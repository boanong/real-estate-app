import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CheckoutPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');

  const handleCheckout = () => {
    // Logic for processing the payment and completing the checkout
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Complete Checkout</Text>
      <Text style={styles.description}>
        Book your property by entering payment details in the fields below.
      </Text>
      <View style={styles.inputContainer}>
        <Text>Card Number</Text>
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
          placeholder="**** **** **** ****"
        />
      </View>
      <View style={styles.inlineInputContainer}>
        <View style={styles.inlineInput}>
          <Text>Expiry</Text>
          <TextInput
            style={styles.input}
            value={expiry}
            onChangeText={setExpiry}
            keyboardType="numeric"
            placeholder="MM/YY"
          />
        </View>
        <View style={styles.inlineInput}>
          <Text>CVV</Text>
          <TextInput
            style={styles.input}
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
            secureTextEntry
            placeholder="123"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Joe"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Address</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={address}
          onChangeText={setAddress}
          multiline
          placeholder="Enter your address"
        />
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutText}>Check out</Text>
        <AntDesign name="arrowright" size={24} color="white" style={styles.checkoutIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
    color: 'gray',
  },
  inputContainer: {
    marginVertical: 10,
  },
  inlineInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inlineInput: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  checkoutButton: {
    backgroundColor: 'rgba(40, 107, 229, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  checkoutText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
  checkoutIcon: {
    marginLeft: 10,
},
});

export default CheckoutPage;
