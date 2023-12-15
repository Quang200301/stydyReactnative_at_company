import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Navigation from './Navigation';
import Message from './message';
const Stack = createStackNavigator();
export default function MyStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="navigation" component={Navigation} />
      <Stack.Screen name="message" component={Message} />
    </Stack.Navigator>
  );
}
