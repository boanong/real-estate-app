import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import HorizontalContainer from '../molecules/HorizontalContainer';
import HouseCards from '../molecules/HouseCards';
import FooterSection from './FooterSection';

const handleSearch = (searchQuery) => {
};

const HomePage = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search property"
                        placeholderTextColor="lightgray"
                        onSubmitEditing={(event) => handleSearch(event.nativeEvent.text)}
                    />
                </View>
                <TouchableOpacity style={styles.profileContainer}>
                    <Image
                        style={styles.profileImage}
                        source={require('../../assets/josh.jpg')}
                    />
                </TouchableOpacity>
            </View>
            {/* <HorizontalContainer /> */}
            <HouseCards />
            <FooterSection />
        </>


    );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: 'rgba(64, 123, 255, 1)',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    searchContainer: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    searchInput: {
        height: 40,
        fontSize: 16,
    },
});

export default HomePage;