import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FirstOnboarding = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('./../../assets/onboarding1.svg')}
                style={styles.image}
            />
            <Text style={styles.message}>Seamless Experience!</Text>
            <Text style={styles.details}>
                Step into a seamless real estate
                experience with Property Trust. Let's get you started
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: '30%',

    },
    message: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginVertical: 20,
        marginBottom: 0,
        // marginTop: 50,

    },
    details: {
        textAlign: 'center',
        color: '#000000',
        marginTop: 0,

    },
    button: {
        backgroundColor: 'rgba(40, 107, 229, 1)',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 50,
        marginTop: 100,

    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default FirstOnboarding;