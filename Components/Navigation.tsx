import React from 'react';
import HomeScreen from './Home';
import SettingsScreen from './SettingsScreen';
import {Image} from 'react-native';
import Profile from './Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({}) => (
            <Image
              source={require('../android/app/src/Images/iconhome.png')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 25, height: 25}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({}) => (
            <Image
              source={require('../android/app/src/Images/iconsetting.png')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 25, height: 25}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({}) => (
            <Image
              source={require('../android/app/src/Images/iconprofile.webp')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 25, height: 25}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
