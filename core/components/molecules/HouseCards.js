import React from 'react';
import { View, Text, Image, StyleSheet, Touchable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-web';


const HouseCards = () => {


  const navigation = useNavigation();

  const handlePropertyDetails = () => {
    navigation.navigate('PropertyDetails');
  };



  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          
          <Text style={styles.cost}>$200/m</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/118/118669.png' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Mobile Omnispore</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.cost} >$200/m</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/118/118669.png' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.cost}>$200/m</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/118/118669.png' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/1436190/pexels-photo-1436190.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.cost}>$200/m</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/118/118669.png' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.cost}>$200/m</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/118/118669.png' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePropertyDetails}>
        <Image source={{ uri: 'https://images.pexels.com/photos/1895031/pexels-photo-1895031.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.cost}>$200/m</Text>
          <View style={styles.rating}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/118/118669.png' }} style={styles.starIcon} />
            <Text>4.5</Text>
          </View>
          <Text>Neighborhood</Text>
        </View>
      </TouchableOpacity>


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
    elevation: 5,
    border: '5px solid white'
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

