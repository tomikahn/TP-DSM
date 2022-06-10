import 'react-native-gesture-handler';
import React from 'react';

import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import Header from './components/header'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Create a component
export default  App = () => (
  <NavigationContainer>
    <Stack.Navigator>
    {/* <Stack.Screen
        name="header"
        component={Header}
        options={{title: 'Albums'}}
      /> */}
      <Stack.Screen
        name="albumList"
        component={AlbumList}
        options={{title: 'Albums'}}
      />
      <Stack.Screen
        name="photoList"
        component={PhotoList}
        options={{title: 'Photos'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

