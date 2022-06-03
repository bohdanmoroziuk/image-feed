import { useState, useMemo } from 'react';
import { View, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import uuid from 'react-native-uuid';

import { Comment, Comments } from 'src/types';

import FeedScreen from 'src/screens/Feed';
import CommentsScreen from 'src/screens/Comments';

import styles from './App.styles';

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

  const addComment = (text: string) => {
    if (!selectedItemId) return;

    setComments((prevComments) => {
      const itemComments = prevComments[selectedItemId] ?? [];

      return {
        ...prevComments,
        [selectedItemId]: [
          ...itemComments,
          {
            id: uuid.v4().toString(),
            text,
          },
        ],
      };
    });
  };

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
