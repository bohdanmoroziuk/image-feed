import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CardList from 'src/components/CardList';

import styles from './App.styles';

const items = [
  { id: '0', author: "Bob Ross" },
  { id: '1', author: "Chuck Norris" },
];

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <CardList items={items} />
    </View>
  );
}
