import React, { useEffect } from
 
'react';
import { StyleSheet, View, Image } from
 
'react-native';
import { useNavigation } from
 
'@react-navigation/native';


const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('FirstOnboarding');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
 
style={styles.container}>

      
<Image

        
source={require('../../assets/logo.png')}
        style={styles.logo}
      />

    
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:
 
1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(40, 107, 229, 1)',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export
 
default SplashScreen;