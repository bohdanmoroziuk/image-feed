import { FunctionComponent, useState, useEffect } from 'react';
import { SafeAreaView, Text, ActivityIndicator, ViewProps } from 'react-native';

import { Item, Comments } from 'src/types';

import fetchImages from 'src/api/fetchImages';
import CardList from 'src/components/CardList';

export interface FeedProps {
  style?: ViewProps['style'];
  comments: Comments;
  onPressComments: (id: string) => void;
}

interface State {
  items: Item[];
  loading: boolean;
  error: string | null;
}

export const Feed: FunctionComponent<FeedProps> = ({
  style,
  comments,
  onPressComments
}) => {
  const [state, setState] = useState<State>({
    items: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchImages()
      .then((items) => {
        setState({
          loading: false,
          items,
          error: null,
        });
      })
      .catch((error: Error) => {
        setState({
          loading: false,
          items: [],
          error: error.message,
        });
      });
  }, []);

  if (state.loading) {
    return <ActivityIndicator size="large" testID="loader" />
  }

  if (state.error) {
    return <Text testID="error">{state.error}</Text>
  }

  return (
    <SafeAreaView style={style} testID="feed">
      <CardList
        comments={comments}
        items={state.items}
        onPressComments={onPressComments}
      />
    </SafeAreaView>
  );
};