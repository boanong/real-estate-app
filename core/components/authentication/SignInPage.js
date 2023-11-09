import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import LayoutLogin from '../layout/LayoutLogin';
import SuccessMessage from '../molecules/SuccessMessage';



const SignInPage = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require('./../../assets/houseCrossection.png')} style={styles.backgroundImage} />
        <Image source={require('./../../assets/logo.png')} style={styles.logo} />
      </View>
      <LayoutLogin />
      <SuccessMessage />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  logo: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 50,
    height: 50,
  },
});

export default SignInPage;
