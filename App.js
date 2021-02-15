import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ApodListScreen from './screens/ApodListScreen';
import ApodDetailScreen from './screens/ApodDetailScreen';

const HomeStack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="List" component={ApodListScreen}/>
        <HomeStack.Screen name="Detail" component={ApodDetailScreen}/>
      </HomeStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}