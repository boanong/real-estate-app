import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="home" size={24} color="white" />
      <FontAwesome5 name="th" size={24} color="white" />
      <FontAwesome5 name="heart" size={24} color="white" />
      <FontAwesome5 name="user" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(40, 107, 229, 1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Footer;