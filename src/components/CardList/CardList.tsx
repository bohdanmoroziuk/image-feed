import { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

import { Comments } from 'src/types';

import Card from 'src/components/Card';
import getImageUriFromId from 'src/utils/getImageUriFromId';

interface Item {
  id: string;
  author: string;
}

export interface CardListProps {
  items: Item[];
  comments: Comments;
  onPressComments: (id: string) => void;
}

export const CardList: FunctionComponent<CardListProps> = ({
  items,
  comments,
  onPressComments,
}) => {
  const keyExtractor = (item: Item) => item.id;

  const renderItem = ({ item }: { item: Item }) => {
    const handlePressLinkText = () => {
      onPressComments(item.id);
    };

    const itemComments = comments[item.id];

    return (
      <Card
        key={item.id}
        fullName={item.author}
        image={{ uri: getImageUriFromId(item.id) }}
        linkText={`${itemComments ? itemComments.length : 0} Comments`}
        onPressLinkText={handlePressLinkText}
      />
    );
  };

  return (
    <FlatList
      data={items}
      extraData={comments}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};