import { FunctionComponent } from 'react';
import { ScrollView } from 'react-native';

import { Comment } from 'src/types';
import CommentListItem from 'src/components/CommentListItem';

export interface CommentListProps {
  items: Comment[];
}

const renderItem = (item: Comment) => (
  <CommentListItem
    key={item.id}
    item={item}
  />
);

export const CommentList: FunctionComponent<CommentListProps> = ({ items }) => (
  <ScrollView>
    {items.map(renderItem)}
  </ScrollView>
);
