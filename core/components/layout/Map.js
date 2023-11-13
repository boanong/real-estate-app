import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Map = () => {
  return (
    <View style={[styles.container, { width: '95%', margin: 'auto' }]}>
      <View style={styles.headingContainer}>
        <Ionicons name="location-sharp" style={styles.locationIcon} />
        <Text style={styles.heading}>Location</Text>
        <Text style={styles.address}>Simbock</Text>
      </View>
      <Text style={styles.text}>See your property location on this map</Text>

      <Image
        source={{ uri: 'https://joomly.net/frontend/web/images/googlemap/map.png' }}
        style={[styles.CardImage, { width: '100%', margin: 'auto'}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  address: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  CardImage: {
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default Map;