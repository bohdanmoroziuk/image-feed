import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});
