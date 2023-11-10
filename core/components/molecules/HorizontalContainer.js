import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const data = [
  { id: '1', label: 'Office', icon: 'business-outline' },
  { id: '2', label: 'Apartments', icon: 'home-outline' },
  { id: '3', label: 'Rooms', icon: 'bed-outline' },
  { id: '4', label: 'Stores', icon: 'storefront-outline' },
  { id: '5', label: 'Houses', icon: 'home-outline' },
  { id: '6', label: 'Hotels', icon: 'business-outline' },
  // Add more items as needed
];

const HorizontalContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <View key={item.id} style={styles.iconContainer}>
            <Icon name={item.icon} size={50} color="black" /> {/* Use the icon from the library */}
            <Text style={styles.label}>{item.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
  },
});

export default HorizontalContainer;