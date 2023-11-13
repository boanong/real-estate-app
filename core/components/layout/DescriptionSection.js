import React from
 
'react';
import { View, StyleSheet, Text, TouchableOpacity } from
 
'react-native';
import { Ionicons } from
 
'@expo/vector-icons';

const DescriptionSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.description}>
        This property is located in a prime location, offering breathtaking views and top-notch amenities. It features spacious rooms, modern finishes, and a beautiful garden. Don't miss out on this amazing opportunity!
      </Text>
      <TouchableOpacity style={styles.callButton}>
        <Ionicons name="call-outline" size={20} />
        <Text style={styles.phoneNumber}>(+237) 675678900</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 8,
  },
  description: {
    fontSize: 17,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  phoneNumber: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#000',
  },
});

export default DescriptionSection;