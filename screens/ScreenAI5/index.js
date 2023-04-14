import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TuberScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.cart}>
          <Image source={require('../assets/cart.png')} style={styles.cartIcon} />
          <Text style={styles.cartCount}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Order Potatoes on Demand</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  logo: {
    width: 100,
    height: 50
  },
  cart: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cartIcon: {
    width: 30,
    height: 30,
    marginRight: 5
  },
  cartCount: {
    backgroundColor: '#FFD700',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontSize: 16
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
export default TuberScreen;