import { FunctionComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Comment } from 'src/types';

import styles from './CommentList.styles';

export interface CommentListProps {
  items: Comment[];
}

const renderItem = (item: Comment) => (
  <View
    style={styles.comment}
    key={item.id}
  >
    <Text>
      {item.text}
    </Text>
  </View>
);

export const CommentList: FunctionComponent<CommentListProps> = ({ items }) => (
  <ScrollView>
    {items.map(renderItem)}
  </ScrollView>
);
