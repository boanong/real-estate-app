import React from 'react';
import { View, Image, Text, TouchableOpacity, Input, StyleSheet } from 'react-native';
import ActorsImage from '../../assets/actors-page/actors-image.png';
import { useNavigation } from '@react-navigation/core';

const Actors = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('CheckoutPage');
    };

    return (
        <View style={styles.container}>
            <Image source={ActorsImage} style={styles.ActorsImage} />
            {/* Other components can be added here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ActorsImage: {
        width: '100%',  
        height: 300,  
        position: 'absolute',  
        top: 0,  
    },
});

export default Actors;
