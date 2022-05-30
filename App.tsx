import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Feed from 'src/screens/Feed';

import styles from './App.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Feed style={styles.feed} />
    </View>
  );
}
