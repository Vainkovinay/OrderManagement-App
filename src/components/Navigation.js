import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CustomerScreen from '../screens/CustomerScreen';
import OrderEntry from '../screens/OrderEntry';

const Stack = createNativeStackNavigator();

const Navigation=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Customer' component={CustomerScreen} options={{headerShown:false}} />
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name='Order' component={OrderEntry} options={{headerShown:false}}/>
      
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Navigation;
