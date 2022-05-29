import { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

import Card from 'src/components/Card';
import getImageUriFromId from 'src/utils/getImageUriFromId';

interface Item {
  id: string;
  author: string;
}

export interface CardListProps {
  items: Item[];
}

const keyExtractor = (item: Item) => item.id;

const renderItem = ({ item }: { item: Item }) => (
  <Card
    key={item.id}
    fullName={item.author}
    image={{ uri: getImageUriFromId(item.id) }}
  />
);

export const CardList: FunctionComponent<CardListProps> = ({ items }) => (
  <FlatList
    data={items}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
  />
);