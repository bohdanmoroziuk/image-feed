import { useState, useMemo, useEffect } from 'react';
import { View, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Comment, Comments } from 'src/types';

import FeedScreen from 'src/screens/Feed';
import CommentsScreen from 'src/screens/Comments';

import styles from './App.styles';

const COMMENTS_STORAGE_KEY = '@comments-storage-key';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [comments, setComments] = useState<Comments>({});

  const selectedItemComments = useMemo(() => {
    return (
      selectedItemId 
        ? comments[selectedItemId] 
          ? comments[selectedItemId] 
          : [] 
        : []
    );

  }, [selectedItemId, comments]);

  const openCommentsScreen = (id: string) => {
    setIsModalVisible(true);
    setSelectedItemId(id);
  };

  const closeCommentsScreen = () => {
    setIsModalVisible(false);
    setSelectedItemId(null);
  };

  const addComment = async (text: string) => {
    if (!selectedItemId) return;

    const itemComments = comments[selectedItemId] ?? [];

    const newItemComment = {
      id: uuid.v4().toString(),
      text,
    };

    const newComments = {
      ...comments,
      [selectedItemId]: [
        ...itemComments,
        newItemComment,
      ],
    };

    setComments(newComments);

    try {
      await AsyncStorage.setItem(COMMENTS_STORAGE_KEY, JSON.stringify(newComments));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem(COMMENTS_STORAGE_KEY)
      .then((value) => {
        if (value) {
          const comments = JSON.parse(value);
          setComments(comments);
        } else {
          setComments({});
        }
      })
      .catch((error) => {
        console.error((error as Error).message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FeedScreen
        style={styles.screen}
        comments={comments}
        onPressComments={openCommentsScreen}
      />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeCommentsScreen}
      >
        <CommentsScreen
          style={styles.screen}
          comments={selectedItemComments}
          onClose={closeCommentsScreen}
          onSubmitComment={addComment}
        />
      </Modal>
    </View>
  );
}
