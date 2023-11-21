import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CheckoutPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCheckout = () => {
        setIsModalVisible(true);
    };

    const Modal = ({ onClose }) => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Confirm payment of ${200}</Text>
                    <Text style={styles.modalMessage}>Are you sure you want to checkout of this property?</Text>
                    <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                        <Text style={styles.modalButtonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
            {isModalVisible && <Modal onClose={() => setIsModalVisible(false)} />}
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
    modalContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 10,
        backdropFilter: 'blur(5px)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: 300,
        height: 250,
        margin: '0 auto',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalMessage: {
        margin: '0 0 10px 0',
        textAlign: 'center',
        textAlign: 'center',
        paddingBottom: 50,
    },
    modalButton: {
        backgroundColor: 'rgba(40, 107, 229, 1)',
        padding: 10,
        borderRadius: 5,
        width: 150,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default CheckoutPage;