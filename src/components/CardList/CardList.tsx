import { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

import { Comment } from 'src/types';

import Card from 'src/components/Card';
import getImageUriFromId from 'src/utils/getImageUriFromId';

interface Item {
  id: string;
  author: string;
}

export interface CardListProps {
  items: Item[];
  commentsForItem: Record<string, Comment[]>;
  onPressComments: (id: string) => void;
}

export const CardList: FunctionComponent<CardListProps> = ({
  items,
  commentsForItem,
  onPressComments,
}) => {
  const keyExtractor = (item: Item) => item.id;

  const renderItem = ({ item }: { item: Item }) => {
    const handlePressLinkText = () => {
      onPressComments(item.id);
    };

    const comments = commentsForItem[item.id];

    return (
      <Card
        key={item.id}
        fullName={item.author}
        image={{ uri: getImageUriFromId(item.id) }}
        linkText={`${comments ? comments.length : 0} Comments`}
        onPressLinkText={handlePressLinkText}
      />
    );
  };

  return (
    <FlatList
      data={items}
      extraData={commentsForItem}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};