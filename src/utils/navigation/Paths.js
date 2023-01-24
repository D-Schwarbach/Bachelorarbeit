import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';
import Introduction from '../../screens/Introduction/Introduction';
import FreeText from '../../screens/FreeText/FreeText';
import BackgroundImage from '../components/BackgroundImage/BackgroundImage';
import {style} from '../styles/GlobalStyles';
import FileUpload from '../../screens/UploadFile/FileUpload';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator();
const Paths = () => {
  const options = {
    headerShown: true,
    headerTintColor: 'black',
    // headerTransparent: true,
    headerRight: () => (
      <TouchableOpacity onPress={() => console.log('pressed burger menu')}>
        <Icon name={'menu'} size={30} color={'black'} />
      </TouchableOpacity>
    ),
  };
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerStyle: {
          //   backgroundColor: 'rgba(255,255,255,0)',
          //   borderWidth: 5,
          //   ...style.card,
          // }
        }
      }>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{...options, headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{...options, headerBackVisible: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Freitexteingabe"
        component={FreeText}
        options={options}
      />
      <Stack.Screen
        name="Dateiupload"
        component={FileUpload}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default Paths;
