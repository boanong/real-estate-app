import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Changed 'Ionicons' to '{ Ionicons }'

const FooterSection = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={24} color="white" />
      <Ionicons name="apps" size={24} color="white" />
      <Ionicons name="heart" size={24} color="white" />
      <Ionicons name="person" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(40, 107, 229, 1)',
    height: 60,
  },
});

export default FooterSection;