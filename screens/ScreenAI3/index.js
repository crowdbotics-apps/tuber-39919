import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
const {
  width,
  height
} = Dimensions.get('window');

const TuberTutorialScreen = () => {
  return <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/tuber-logo.png')} style={styles.logo} />
        <Image source={require('../assets/tuber-tutorial.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Tuber!</Text>
        <Text style={styles.subtitle}>
          Swipe left to see how to order your potatoes.
        </Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: width * 0.4,
    height: height * 0.1,
    resizeMode: 'contain',
    marginBottom: 20
  },
  image: {
    width: width * 0.8,
    height: height * 0.6,
    resizeMode: 'contain'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888'
  }
});
export default TuberTutorialScreen;