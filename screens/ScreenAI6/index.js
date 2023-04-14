import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TuberMapScreen = () => {
  return <View style={styles.container}>
      <Image source={require('../assets/map.png')} style={styles.mapImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Your potato is on the way!</Text>
        <Text style={styles.infoText}>Estimated delivery time: 10 minutes</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapImage: {
    width: '100%',
    height: '80%'
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    alignItems: 'center'
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center'
  }
});
export default TuberMapScreen;