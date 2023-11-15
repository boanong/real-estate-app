import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

const PropertySummary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Apartment</Text>
          <Text style={styles.rating}>
            <Ionicons name="star-sharp" style={styles.starIcon} /> 4.5
          </Text>
        </View>
        <Text style={styles.price}>$200/m</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" style={styles.locationIcon} />
          <Text style={styles.location}>Younde, Cmr</Text>
        </View>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#00000030', width: '100%' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
  },

  detailsContainer: {
    padding: 16,
  },

  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  description: {
    fontWeight: 'bold',
    fontSize: 30,
  },

  price: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 8,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  locationIcon: {
    fontSize: 16,
    marginRight: 4,
  },

  location: {
    fontSize: 12,
  },

  rating: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  starIcon: {
    fontSize: 20,
    marginRight: 4,
    fontWeight: 'bold',
    color: 'gold',
  },
});

export default PropertySummary;