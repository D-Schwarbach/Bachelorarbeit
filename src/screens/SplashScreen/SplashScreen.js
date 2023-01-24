import React, {useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import SplashScreenVideo from '../../utils/assets/SplashScreen.mp4';
import {COLORS} from '../../utils/styles/Colors';
import {style} from '../../utils/styles/GlobalStyles';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.push('Home');
    }, 2500);
  }, []);
  return (
    <SafeAreaView
      style={{...style.container, ...style.center, backgroundColor: 'black'}}>
      <Video source={SplashScreenVideo} style={styles.backgroundVideo} />
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default SplashScreen;
