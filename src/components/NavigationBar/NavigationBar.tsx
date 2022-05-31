import { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './NavigationBar.styles';

export interface NavigationBarProps {
  title: string;
  closeButtonText: string;
  onClose: () => void;
}

export const NavigationBar: FunctionComponent<NavigationBarProps> = ({
  title,
  closeButtonText,
  onClose,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.closeButton}
      onPress={onClose}
    >
      <Text>
        {closeButtonText}
      </Text>
    </TouchableOpacity>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
);
