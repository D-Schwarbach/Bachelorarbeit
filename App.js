// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Paths from './src/utils/navigation/Paths';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Paths />
    </NavigationContainer>
  );
}

export default App;