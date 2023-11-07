import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './path/to/SplashScreen';
import FirstOnboarding from './path/to/FirstOnboarding';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
