import {View, Text, TextInput, StyleSheet, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackgroundImage from '../../utils/components/BackgroundImage/BackgroundImage';
import {style} from '../../utils/styles/GlobalStyles';
import {Dropdown} from 'react-native-element-dropdown';
import MyButton from '../../utils/components/Button/MyButton';
import languageList from '../../utils/assets/helper/languageList';
import {COLORS} from '../../utils/styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default FreeTextView = ({
  navigation,
  setTextInput,
  languageValue,
  textInput,
  onTranslate,
  onTTS,
  setlanguageValue,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <BackgroundImage>
      <View style={style.container}>
        <View>
          <TextInput
            multiline
            numberOfLines={5}
            style={{
              ...style.textinputStyle,
              height: 100,
              ...style.center,
              backgroundColor: COLORS.white,
            }}
            value={textInput}
            placeholder="Texteingebe"
            onChangeText={text => setTextInput(text)}
          />
          <Text style={style.textUnderForm}>
            Bitte hier den Text eingeben, welcher konvertiert werden soll.
          </Text>
        </View>
        <View style={style.marginTop}></View>
        <View>
          <Text style={{...style.sub_heading, marginLeft: 'auto'}}>
            Übersetzen
          </Text>
          <Switch
            style={{
              marginLeft: 'auto',
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
              borderColor: COLORS.accent,
              borderWidth: 1,
            }}
            trackColor={{false: COLORS.danger, true: COLORS.accent_muted}}
            thumbColor={isEnabled ? COLORS.accent : COLORS.white}
            ios_backgroundColor={COLORS.accent_muted}
            onValueChange={() => {
              setIsEnabled(!isEnabled);
            }}
            value={isEnabled}
          />
          <Text style={{...style.textUnderForm, marginLeft: 'auto'}}>
            Aktivieren um den Text zu übersetzen
          </Text>
        </View>

        {isEnabled ? (
          <>
            <View style={style.marginTop}></View>
            <View>
              <Dropdown
                style={{...style.dropdown}}
                placeholderStyle={style.placeholderStyle}
                selectedTextStyle={style.selectedTextStyle}
                inputSearchStyle={style.inputSearchStyle}
                data={languageList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                onChange={item => {
                  // console.log('frontend', item.value);
                  setlanguageValue(item.value);
                  // onTranslate(languageValue);
                }}
              />
            </View>
          </>
        ) : (
          <></>
        )}

        <View style={style.marginTop}></View>
        <View>
          <MyButton
            title={' Ausgabe'}
            hasIcon
            iconStyle={''}
            icon="volume-up"
            iconColor={COLORS.accent}
            iconSize={16}
            textStyle={{
              color: COLORS.accent,
              fontSize: 16,
              fontWeight: 'bold',
            }}
            buttonStyle={{...style.myButtonStyle, marginLeft: 'auto'}}
            onPress={() => {
              onTTS();
            }}></MyButton>
        </View>
      </View>
    </BackgroundImage>
  );
};
