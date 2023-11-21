import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

const SuccessMessage = () => {
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.navigate('Actors');
  };

  return (
    <View style={styles.card}>
      <View style={styles.circle}>
        <Ionicons name="checkmark" size={30} color="white" />
      </View>
      <Text style={styles.h3}>Account successfully created</Text>
      <Text style={styles.p}>
        Your account has been successfully created. Click on Continue below to
        move to proceed.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    margin: 'auto',
    width: '90%',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(40, 107, 229, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  p: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 0,
  },
  button: {
    backgroundColor: 'rgba(40, 107, 229, 1)',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessMessage;
