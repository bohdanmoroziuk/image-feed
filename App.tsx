import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './App.styles';

import Avatar from 'src/components/Avatar';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <Avatar color="teal" initials="FL" size={35} />
    </View>
  );
}
