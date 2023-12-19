import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './Components/Navigation';
import Message from './Components/message';
import Main from './App';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UseQuery from './react_useQuery/UseQuery';
import AsyncStorageExamp from './asyncStorage/AsyncStorage';
import LoginForm from './asyncStorage/LoginForm';
import SignInForm from './asyncStorage/SignInForm';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
const TabDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Navigation" component={Navigation} />
      <Drawer.Screen name="message" component={Message} />
      <Drawer.Screen name="main" component={Main} />
      <Drawer.Screen name="UseQuery" component={UseQuery} />
      <Drawer.Screen name="AsyncStorageExamp" component={AsyncStorageExamp} />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignUp" component={LoginForm} />
            <Stack.Screen name="Drawer" component={TabDrawer} />
            <Stack.Screen name="SignIn" component={SignInForm} />
          </Stack.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
