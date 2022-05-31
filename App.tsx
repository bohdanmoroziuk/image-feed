import { useState, useMemo } from 'react';
import { View, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import uuid from 'react-native-uuid';

import { Comment } from 'src/types';

import Feed from 'src/screens/Feed';
import Comments from 'src/screens/Comments';

import styles from './App.styles';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [commentsForItem, setCommentsForItem] = useState<Record<string, Comment[]>>({});

  const selectedItemComments = useMemo(() => {
    return (
      selectedItemId 
        ? commentsForItem[selectedItemId] 
          ? commentsForItem[selectedItemId] 
          : [] 
        : []
    );

  }, [selectedItemId, commentsForItem]);

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

    setCommentsForItem((prevCommentsForItem) => {
      const comments = prevCommentsForItem[selectedItemId] ?? [];

      return {
        ...prevCommentsForItem,
        [selectedItemId]: [
          ...comments,
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
      <Feed
        style={styles.screen}
        commentsForItem={commentsForItem}
        onPressComments={openCommentsScreen}
      />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeCommentsScreen}
      >
        <Comments
          style={styles.screen}
          comments={selectedItemComments}
          onClose={closeCommentsScreen}
          onSubmitComment={addComment}
        />
      </Modal>
    </View>
  );
}
