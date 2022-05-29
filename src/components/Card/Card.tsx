import { FunctionComponent } from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

import AuthorRow from 'src/components/AuthorRow';

import styles from './Card.styles';

export interface CardProps {
  fullName: string;
  image: ImageSourcePropType;
  linkText: string;
  onPressLinkText: () => void;
}

export const Card: FunctionComponent<CardProps> = ({
  fullName,
  image,
  linkText,
  onPressLinkText,
}) => (
  <View>
    <AuthorRow
      fullName={fullName}
      linkText={linkText}
      onPressLinkText={onPressLinkText}
    />
    <Image
      style={styles.image}
      source={image}
    />
  </View>
);