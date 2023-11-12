import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SupplementInfo = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Apartment icon */}
        <View style={styles.item}>
          <Ionicons name="home" size={24} color="black" />
          <Text style={styles.itemText}>Apartment</Text>
        </View>
        {/* Rooms icon */}
        <View style={styles.item}>
          <Ionicons name="bed-outline" size={24} color="black" />
          <Text style={styles.itemText}>Rooms</Text>
        </View>
        {/* Toilets icon */}
        <View style={styles.item}>
          <Ionicons name="bath-outline" size={24} color="black" />
          <Text style={styles.itemText}>Toilets</Text>
        </View>
        {/* Surface area icon */}
        <View style={styles.item}>
          <Ionicons name="square-outline" size={24} color="black" />
          <Text style={styles.itemText}>Surface Area</Text>
        </View>
        {/* Another icon */}
        <View style={styles.item}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
          <Text style={styles.itemText}>Another Icon</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  itemText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default SupplementInfo;