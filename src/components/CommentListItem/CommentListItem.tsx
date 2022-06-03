import { FunctionComponent } from 'react';
import { View, Text } from 'react-native';

import { Comment } from 'src/types';

import styles from './CommentListItem.styles';

export interface CommentListItemProps {
  item: Comment;
}

export const CommentListItem: FunctionComponent<CommentListItemProps> = ({ item }) => (
  <View style={styles.container}>
    <Text>
      {item.text}
    </Text>
  </View>
);
