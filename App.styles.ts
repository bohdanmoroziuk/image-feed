import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const platformVersion =
  Platform.OS === 'ios'
    ? Number.parseInt(Platform.Version, 10)
    : Platform.Version;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
    marginTop: Platform.OS === 'android' || platformVersion < 11
      ? Constants.statusBarHeight
      : 0,
  },
});
