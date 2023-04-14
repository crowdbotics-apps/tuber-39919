import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const potatoImage = require('../assets/potato.png');

const PotatoRatingScreen = () => {
  return <View style={styles.container}>
      <Image source={potatoImage} style={styles.image} />
      <Text style={styles.title}>Rate Your Potato</Text>
      <View style={styles.ratingContainer}>
        <TouchableOpacity style={styles.ratingButton}>
          <Text style={styles.ratingText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingButton}>
          <Text style={styles.ratingText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingButton}>
          <Text style={styles.ratingText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingButton}>
          <Text style={styles.ratingText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingButton}>
          <Text style={styles.ratingText}>5</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  ratingButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  ratingText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  submitButton: {
    backgroundColor: '#ffcc00',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default PotatoRatingScreen;