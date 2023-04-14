import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const TuberSplashScreen = () => {
  return <View style={styles.container}>
      <ImageBackground source={require('../assets/tuber-background.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Tuber</Text>
          <Text style={styles.subtitle}>Get a potato delivered to you on demand</Text>
        </View>
      </ImageBackground>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 32
  }
});
export default TuberSplashScreen;