import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SignIn from '../authentication/SignIn';

const LayoutSignup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.info}>Create an account by filling the fields below</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />



      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 15, }}>
        <Text style={{ fontSize: 16 }}>
          Already have an account?
          <TouchableOpacity>
            <Text style={{ color: 'rgba(40, 107, 229, 1)', textDecorationLine: 'underline' }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </Text>
      </View>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SecondOnboarding')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>



      <TouchableOpacity style={styles.createBtn}>
        <Text style={styles.createBtnText}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or sign up with</Text>
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

export default LayoutSignup;
