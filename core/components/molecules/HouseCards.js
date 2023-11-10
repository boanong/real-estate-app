import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HouseCards = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood: Example Neighborhood</Text>
        </View>
      </View>


      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood: Example Neighborhood</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood: Example Neighborhood</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood: Example Neighborhood</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood: Example Neighborhood</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood: Example Neighborhood</Text>
        </View>
      </View>
      {/* Repeat the above card structure for the remaining 5 houses */}
      {/* Use different image URIs for each house */}
      {/* Use real data for price, rating, and neighborhood */}

    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: 160,
    height: 240,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
  },
  details: {
    padding: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
});

export default HouseCards;
