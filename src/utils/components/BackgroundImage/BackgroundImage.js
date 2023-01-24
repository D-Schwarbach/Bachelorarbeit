import {ImageBackground, Text,View} from 'react-native';
import React from 'react';
import background from '../../assets/back3.png';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../styles/Colors';

const BackgroundImage = ({children}) => {
  return (
    <LinearGradient
      // source={background}
      // resizeMode="cover"
      colors={[COLORS.white,COLORS.accent_muted]}
      style={{flex: 1}}>
      {children}
    </LinearGradient>
  );
};

export default BackgroundImage;
