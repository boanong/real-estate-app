import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-elements';

const AccountType = ({ navigation }) => {
  const cards = [
    {
      title: 'Card 1',
      image: require('./images/card1.jpg'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Card 2',
      image: require('./images/card2.jpg'),
      text: 'Nulla facilisi. Sed gravida felis eget diam cursus, et tincidunt felis ultrices.',
    },
    // Add more cards here...
  ];

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('HomePage')}
        >
          <Card>
            <Image source={card.image} style={styles.image} />
            <Text h4>{card.title}</Text>
            <Text style={styles.text}>{card.text}</Text>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    height: 150,
    resizeMode: 'cover',
  },
  text: {
    // marginTop: 10,
  },
});

export default AccountType;