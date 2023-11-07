import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './core/components/organisms/SplashScreen';
import FirstOnboarding from './core/components/organisms/FirstOnboarding';
import SecondOnboarding from './core/components/organisms/SecondOnboarding';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="FirstOnboarding" component={FirstOnboarding} />
        <Stack.Screen name="SecondOnboarding" component={SecondOnboarding}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
