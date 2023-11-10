import React from 'react';
import { Navigation } from 'react-feather';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';




const SuccessMessage = () => {

    const navigation = useNavigation();


    const handleCreateAccount = () => {
        navigation.navigate ('HomePage');
    }


  return (
    <View style={styles.card}>
      <View style={styles.circle}>
      <Ionicons name="logoCheckmark" style={styles.tick} />
      </View>
      <Text style={styles.h3}>Account successfully created</Text>
      <Text style={styles.p}>
        Your account has been successfully created. Click on Continue below to
        move to proceed.
      </Text>
      <TouchableOpacity style={styles.button}
      onPress={handleCreateAccount}>
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
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#38b2ac',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
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
    marginTop: 10,
  },
  button: {
    backgroundColor: '#38b2ac',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessMessage;
