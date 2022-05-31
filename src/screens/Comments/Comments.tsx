import { FunctionComponent } from 'react';
import { SafeAreaView, ViewProps } from 'react-native';

import { Comment } from 'src/types';

import NavigationBar from 'src/components/NavigationBar';
import CommentInput from 'src/components/CommentInput';
import CommentList from 'src/components/CommentList';

export interface CommentsProps {
  style?: ViewProps['style'];
  comments: Comment[];
  onClose: () => void;
  onSubmitComment: (text: string) => void;
}

export const Comments: FunctionComponent<CommentsProps> = ({
  style,
  comments,
  onClose,
  onSubmitComment
}) => (
  <SafeAreaView style={style}>
    <NavigationBar
      title="Comments"
      closeButtonText="close"
      onClose={onClose}
    />
    <CommentInput
      placeholder="Leave a comment"
      onSubmit={onSubmitComment}
    />
    <CommentList items={comments} />
  </SafeAreaView>
);
