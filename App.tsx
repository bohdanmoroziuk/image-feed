import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Card from 'src/components/Card'

import styles from './App.styles';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <Card 
        fullName="First Last"
        linkText="Comments"
        image={{ uri: 'https://unsplash.it/600/600' }}
        onPressLinkText={() => {
          console.log('Pressed link!');
        }}
      />
    </View>
  );
}
