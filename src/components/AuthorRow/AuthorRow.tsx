import { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import getInitials from 'src/utils/getInitials';
import getAvatarColor from 'src/utils/getAvatarColor';

import Avatar from 'src/components/Avatar';

import styles from './AuthorRow.styles'

export interface AuthorRowProps {
  fullName: string;
  linkText?: string;
  onPressLinkText?: () => void;
}

export const AuthorRow: FunctionComponent<AuthorRowProps> = ({
  fullName,
  linkText,
  onPressLinkText,
}) => {

  return (
    <View style={styles.container}>
      <Avatar
        size={35}
        color={getAvatarColor(fullName)}
        initials={getInitials(fullName)}
      />
      <Text
        style={styles.text}
        numberOfLines={1}
      >
        {fullName}
      </Text>
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>
            {linkText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
