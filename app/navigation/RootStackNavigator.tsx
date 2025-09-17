import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { MainScreen } from '../mainScreen';
import { CategoryPizzaScreen } from '../categoryPizzaScreen';
import { PizzaScreen } from '../pizza';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="main" component={MainScreen} />
    <Stack.Screen name="categoryPizza" component={CategoryPizzaScreen} />
    <Stack.Screen name="pizza" component={PizzaScreen} />
  </Stack.Navigator>
);

export { RootStackNavigator };
