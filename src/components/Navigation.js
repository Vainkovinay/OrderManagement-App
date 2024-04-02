import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CustomerScreen from '../screens/CustomerScreen';
import OrderEntry from '../screens/OrderEntry';
import ProductCategory from '../screens/ProductCategory';
import HomeAcces from '../screens/HomeAcces';
import Stationary from '../screens/Stationary';
import TwoWheelers from '../screens/TwoWheelers';
import FourWheelers from '../screens/FourWheelers';
import ElectronicItems from '../screens/ElectronicItems';


const Stack = createNativeStackNavigator();

const Navigation=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='HomeA' component={HomeAcces} options={{headerShown:false}}/>
     
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Customer' component={CustomerScreen} options={{headerShown:false}} />
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name='Order' component={OrderEntry} options={{headerShown:false}}/>
      <Stack.Screen name='Product' component={ProductCategory} options={{headerShown:false}}/>
      
      <Stack.Screen name='Sta' component={Stationary} options={{headerShown:false}}/>
      <Stack.Screen name='Two' component={TwoWheelers} options={{headerShown:false}}/>
      <Stack.Screen name='Four' component={FourWheelers} options={{headerShown:false}}/>
      <Stack.Screen name='EI' component={ElectronicItems} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Navigation;
