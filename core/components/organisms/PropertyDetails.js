import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon library
import PropertySummary from '../layout/PropertySummary';
import SupplementInfo from '../layout/SupplementInfo';

const PropertyDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/7195537/pexels-photo-7195537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: images[currentImageIndex] }}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.previousIcon} onPress={goToPreviousImage}>
          <FontAwesome name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextIcon} onPress={goToNextImage}>
          <FontAwesome name="chevron-right" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.dotContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentImageIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>
      <PropertySummary />
      <SupplementInfo />
      {/* Other components */}
      
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    // Other styles
  },
  imageContainer: {
    height: 300,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  previousIcon: {
    position: 'absolute',
    top: '50%',
    left: 20,
    transform: [{ translateY: -12 }],
  },
  nextIcon: {
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: [{ translateY: -12 }],
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  inactiveDot: {
    backgroundColor: 'lightgray',
  },
};

export default PropertyDetails; 