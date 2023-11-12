import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const DescriptionSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.description}>
        This property is located in a prime location, offering breathtaking views and top-notch amenities. It features spacious rooms, modern finishes, and a beautiful garden. Don't miss out on this amazing opportunity!
      </Text>
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
    fontSize: 16,
  },
});

export default DescriptionSection;
