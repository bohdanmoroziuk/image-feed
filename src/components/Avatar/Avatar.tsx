import { FunctionComponent, useMemo } from 'react';
import { View, Text, ColorValue } from 'react-native';

import styles from './Avatar.styles';

export interface AvatarProps {
  size: number;
  initials: string;
  color: ColorValue;
}

export const Avatar: FunctionComponent<AvatarProps> = ({
  size,
  initials,
  color,
}) => {
  const circleStyle = useMemo(() => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: color,
  }), [size, color]);

  return (
    <View style={[styles.avatar, circleStyle]}>
      <Text style={styles.initials}>
        {initials}
      </Text>
    </View>
  );
};
