import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SignInPage from '../authentication/SignInPage';
import { useNavigation } from '@react-navigation/native';




const LayoutLogin = () => {
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate('SignInPage');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log in</Text>
            <Text style={styles.info}>Enter login details bellow in order to log in</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />


            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 15, }}>
                <Text style={{ fontSize: 16 }}>
                    Already have an account?
                    <TouchableOpacity onPress={handleSignIn}>
                        <Text style={{ color: 'rgba(40, 107, 229, 1)', textDecorationLine: 'underline' }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>



            <TouchableOpacity style={styles.createBtn}>
                <Text style={styles.createBtnText}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or sign in with</Text>
                <View style={styles.dividerLine} />
            </View>


            <View style={styles.socialBtnContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-google" size={24} color="blue" />
                    <Text style={styles.socialButtonText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-facebook" size={24} color="blue" />
                    <Text style={styles.socialButtonText}>Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: '60%',
        width: '100%',
        backgroundColor: 'rgba(224, 224, 224, 1)',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex: 4,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        paddingLeft: 15,
    },



    createBtn: {
        backgroundColor: 'rgba(40, 107, 229, 1)',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 15,
    },
    createBtnText: {
        color: 'white',
        fontWeight: 'bold',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
        marginHorizontal: 10,
    },
    dividerText: {
        fontSize: 16,
        color: 'black',
    },
    socialBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(40, 107, 229, 1)',
        padding: 7,
        borderRadius: 10,
    },
    socialButtonText: {
        marginLeft: 10,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default LayoutLogin;
