import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { MainScreen } from '../mainScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='main' component={MainScreen} />
  </Stack.Navigator>
);

export { RootStackNavigator };
