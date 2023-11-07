import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FirstOnboarding = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/onboarding1.svg')} 
        style={styles.image}
      />
      <Text style={styles.message}>Welcome to Our Real Estate App!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'rgba(40, 107, 229, 1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default FirstOnboarding;