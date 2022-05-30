import { FunctionComponent, useState, useEffect } from 'react';
import { SafeAreaView, Text, ActivityIndicator, ViewProps } from 'react-native';

import { Item } from 'src/types';

import fetchImages from 'src/api/fetchImages';
import CardList from 'src/components/CardList';

export interface FeedProps {
  style?: ViewProps['style'];
}

interface State {
  items: Item[];
  loading: boolean;
  error: string | null;
}

export const Feed: FunctionComponent<FeedProps> = ({ style }) => {
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
    return <ActivityIndicator size="large" />
  }

  if (state.error) {
    return <Text>{state.error}</Text>
  }

  return (
    <SafeAreaView style={style}>
      <CardList items={state.items} />
    </SafeAreaView>
  );
};