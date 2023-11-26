import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccountType = () => {
    const navigation = useNavigation();

    const onCardPress = () => {
        navigation.navigate('HomePage');
    };

    return (
        <> 
        <View>
                <Text style ={styles.pageTitle}>What do you want to use property trust for?</Text> 
            </View>
        <View style={styles.container}>
            

            <TouchableOpacity style={styles.card} onPress={onCardPress}>
                <Image source={require('./../../components/../assets/actors-page/search.svg')} style={styles.cardImage} />
                <Text style={styles.cardTitle}>Search property</Text>
                <Text style={styles.cardText}>Rent and buy rent property</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={onCardPress}>
                <Image source={require('./../../components/../assets/actors-page/buy.svg')} style={styles.cardImage} />
                <Text style={styles.cardTitle}>Agent</Text>
                <Text style={styles.cardText}>Rent and buy rent property</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={onCardPress}>
                <Image source={require('./../../components/../assets/actors-page/home.svg')} style={styles.cardImage} />
                <Text style={styles.cardTitle}>List a property</Text>
                <Text style={styles.cardText}>Rent and buy rent property</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={onCardPress}>
                <Image source={require('./../../components/../assets/actors-page/lawyer.svg')} style={styles.cardImage} />
                <Text style={styles.cardTitle}>Lawyer</Text>
                <Text style={styles.cardText}>Rent and buy rent property</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={onCardPress}>
                <Image source={require('./../../components/../assets/actors-page/partner.svg')} style={styles.cardImage} />
                <Text style={styles.cardTitle}>Become a part partner</Text>
                <Text style={styles.cardText}>Some text describing Card</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={onCardPress}>
                <Image source={require('./../../components/../assets/actors-page/services.svg')} style={styles.cardImage} />
                <Text style={styles.cardTitle}>Other service</Text>
                <Text style={styles.cardText}>Rent and buy rent property</Text>
            </TouchableOpacity>


        </View>
        </>
    );
};

const styles = StyleSheet.create({

    pageTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15,
        color: 'white', 
        textAlign: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10,
    },


    card: {
        width: '45%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 180,
    },


    cardImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 50,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        color: '#333', 
        textAlign: 'center',
    },
    cardText: {
        fontSize: 16,
        marginTop: 10,
        color: '#666', 
        textAlign: 'center',
    },
});

export default AccountType;
