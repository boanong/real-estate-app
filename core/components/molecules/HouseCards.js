import React from 'react';
import { View, Text, Image, StyleSheet, Touchable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-web';
// import React, { useNavigation } from 'react';


const HouseCards = () => {


  const navigation = useNavigation();

  const handlePropertyDetails = () => {
    // Navigate to the SuccessMessage page when the button is pressed
    navigation.navigate('PropertyDetails');
  };



  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          
          <Text style={styles.cost}>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Mobile Omnispore</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/1436190/pexels-photo-1436190.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/1895031/pexels-photo-1895031.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          <Text>$2000</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood</Text>
        </View>
      </TouchableOpacity>
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
    height: 200,
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

  cost: {
    fontWeight: 'bolder',
    fontSize: 20,
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

