import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import BackgroundImage from '../../utils/components/BackgroundImage/BackgroundImage';
import {style} from '../../utils/styles/GlobalStyles';
import MyButton from '../../utils/components/Button/MyButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../utils/styles/Colors';

const HomeView = ({navigation}) => {
  return (
    <BackgroundImage>
      <View style={{...style.container}}>
        <View style={{height: 200, ...style.card}}>
          <TouchableOpacity
            style={[styles.cardContainer]}
            onPress={() => {
              console.log('button freetext is pressed');
              navigation.push('Freitexteingabe');
            }}>
            <View style={styles.rotatedIconContainer}>
              <Icon name={'i-cursor'} size={200} color={COLORS.accent} />
            </View>
            <View style={{...styles.translucentContainer}}>
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.accent,
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  <Icon name={'i-cursor'} size={20} color={COLORS.accent} />{' '}
                  {'Texteingabe'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.marginTop}></View>
        <View style={{height: 200, ...style.card}}>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => {
              console.log('button fileUpload is pressed');
              navigation.push('Dateiupload');
            }}>
            <View style={styles.rotatedIconContainer}>
              <Icon name={'upload'} size={200} color={COLORS.accent} />
            </View>
            <View style={{...styles.translucentContainer}}>
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.accent,
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  <Icon name={'upload'} size={20} color={COLORS.accent} />{' '}
                  {'Dateiupload'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    // borderWidth: 1,
    borderRadius: 10,
    padding: 0,
    borderColor: COLORS.accent,
    maxHeight: 200,
    overflow: 'hidden',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  rotatedIconContainer: {
    position: 'absolute',
    right: -40,
    bottom: -40,
    transform: [{rotate: '45deg'}],
    borderRadius: 10,
  },
  translucentContainer: {
    flex: 1,
    padding: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    height: 150,
    width: '100%',
    borderRadius: 10,
  },
  cardTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    ...style.center,
  },
});

export default HomeView;
