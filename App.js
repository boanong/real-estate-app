import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './core/components/organisms/SplashScreen';
import FirstOnboarding from './core/components/organisms/FirstOnboarding';
import SecondOnboarding from './core/components/organisms/SecondOnboarding';
import ThirdOnboarding from './core/components/organisms/ThirdOnboarding';
import Signin from './core/components/authentication/SignUp';
import { Layout } from 'react-feather';
import LayoutSignup from './core/components/layout/LayoutSignup';
import SignInPage from './core/components/authentication/SignInPage';
import LayoutLogin from './core/components/layout/LayoutLogin';
import SuccessMessage from './core/components/molecules/SuccessMessage';
import HomePage from './core/components/organisms/HomePage'
import PropertyDetails from './core/components/organisms/PropertyDetails';
import CheckoutPage from './core/components/organisms/CheckoutPage';


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
        <Stack.Screen name="ThirdOnboarding" component={ThirdOnboarding} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name='LayoutSigin' component={LayoutSignup} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="LayoutLogin" component={LayoutLogin} />
        <Stack.Screen name='SuccessMessage' component={SuccessMessage} /> 
        <Stack.Screen name='HomePage' component={HomePage} />
        <Stack.Screen name='PropertyDetails' component={PropertyDetails} />
        <Stack.Screen name='CheckoutPage' component={CheckoutPage} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


