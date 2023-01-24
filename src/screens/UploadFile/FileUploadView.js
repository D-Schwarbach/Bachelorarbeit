import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Tts from 'react-native-tts';
import BackgroundImage from '../../utils/components/BackgroundImage/BackgroundImage';
import {style} from '../../utils/styles/GlobalStyles';
import DocumentPicker from 'react-native-document-picker';
import * as RNFS from 'react-native-fs';
import MyButton from '../../utils/components/Button/MyButton';
import {Dropdown} from 'react-native-element-dropdown';
import languageList from '../../utils/assets/helper/languageList';
import {COLORS} from '../../utils/styles/Colors';

const FileUploadView = ({
  navigation,
  settextFileContent,
  languageValue,
  textInput,
  onTranslate,
  onTTS,
  setlanguageValue,
}) => {
  useEffect(() => {
    // Tts.addEventListener('tts-start', event => console.log('start', event));
    // Tts.addEventListener('tts-finish', event => console.log('finish', event));
    // Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
    Tts.setIgnoreSilentSwitch('ignore');
  }, []);

  const [singleFile, setSingleFile] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [fileUplaoded, setFileUplaoded] = useState(false);

  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const _res = await DocumentPicker.pick({
        type: [DocumentPicker.types.plainText],
        readContent: true,
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      // console.log('res : ' + JSON.stringify(res));
      const res = _res[0];
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      console.log('Text inside File : ' + res.content);

      RNFS.readFile(res.uri, 'ascii')
        .then(result => {
          console.log('text in file', result);
          settextFileContent(result);
          setFileUplaoded(true);
        })
        .catch(err => {
          console.log(err.message, err.code);
        });
      //Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selectio
        Alert.alert('Vorgang abgebrochen', 'Keine Datei ausgewählt', [
          {text: 'OK', onPress: () => navigation.push('Home')},
        ]);
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  useEffect(() => {
    if (!fileUplaoded) {
      selectOneFile();
    }
  }, [fileUplaoded]);

  return (
    <BackgroundImage>
      <View style={{...style.container}}>
        {fileUplaoded ? (
          <>
            <View>
              {/*To show single file attribute*/}
              <MyButton
                title={' Andere Datei auswählen'}
                hasIcon
                iconStyle={''}
                icon="paperclip"
                iconColor={COLORS.danger}
                iconSize={16}
                textStyle={{
                  color: COLORS.danger,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
                buttonStyle={{...style.myButtonStyle, maxWidth: '100%'}}
                onPress={() => {
                  setFileUplaoded(false);
                }}></MyButton>
            </View>
            <View style={{...style.marginTop}}></View>
            <View style={{...styles.boxLayout}}>
              {/*Showing the data of selected Single file*/}
              <View
                style={{
                  flexDirection: 'row',
                  ...style.center,
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={{color: COLORS.accent, fontWeight: 'bold', flex: 2}}>
                  {'Dateiname: '}
                </Text>
                <Text
                  style={{
                    color: COLORS.accent_muted,
                    fontSize: 16,
                    flex: 4,
                  }}>
                  {singleFile.name ? singleFile.name : ''}
                </Text>
              </View>

              <View style={style.hr}></View>

              <View
                style={{
                  flexDirection: 'row',
                  ...style.center,
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={{color: COLORS.accent, fontWeight: 'bold', flex: 2}}>
                  {'Dateityp: '}
                </Text>
                <Text
                  style={{
                    color: COLORS.accent_muted,
                    fontSize: 16,
                    flex: 4,
                  }}>
                  {singleFile.type ? singleFile.type : ''}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  ...style.center,
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={{color: COLORS.accent, fontWeight: 'bold', flex: 2}}>
                  {'Dateigröße: '}
                </Text>
                <Text
                  style={{
                    color: COLORS.accent_muted,
                    fontSize: 16,
                    flex: 4,
                  }}>
                  {singleFile.size ? singleFile.size : ''}
                </Text>
              </View>
            </View>
            <View style={{...style.marginTop}}></View>

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
            <View style={style.marginTop}></View>
          </>
        ) : (
          false
        )}
      </View>
    </BackgroundImage>
  );
};

export default FileUploadView;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    fontSize: 15,
    color: COLORS.accent,
  },
  boxLayout: {
    borderColor: COLORS.accent,
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },
});
