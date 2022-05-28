import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './App.styles';

import AuthorRow from 'src/components/AuthorRow';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <AuthorRow
        fullName="First Last"
        linkText="Comments"
        onPressLinkText={() => {
          console.log('Pressed link!');
        }}
      />
    </View>
  );
}
