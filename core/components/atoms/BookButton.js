import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';


const BookButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('CheckoutPage');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>BOOK NOW!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    bottom: 16,
    right: 16,
  },
  button: {
    backgroundColor: 'rgba(40, 107, 229, 1)',
    padding: 14,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default BookButton;