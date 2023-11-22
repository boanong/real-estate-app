import React from 'react';
import { View, Image, Text, TouchableOpacity, Input, StyleSheet } from 'react-native';
import ActorsImage from '../../assets/actors-page/actors-image.png';
import { useNavigation } from '@react-navigation/core';
import AccountType from './AccountType';

const Actors = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.container}>
      <Image source={ActorsImage} style={styles.ActorsImage} />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue', padding: 10, borderRadius: 5 }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Go to Home Page</Text>
      </TouchableOpacity>

      <AccountType />
      {/* Other components can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActorsImage: {
    width: '100%',
    height: 300,
    position: 'absolute',
    top: 0,
  },
});

export default Actors;