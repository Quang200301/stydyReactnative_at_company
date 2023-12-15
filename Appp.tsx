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
            <Stack.Screen name="Drawer" component={TabDrawer} />
          </Stack.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
