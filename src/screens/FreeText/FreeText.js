import React, {useEffect, useState} from 'react';
import Tts from 'react-native-tts';
import {Endpoints} from '../../utils/repository/Endpoints';
import {PostMaker} from '../../utils/repository/RequestMakers';
import FreeTextView from './FreeTextView';
import speakers from '../../utils/assets/helper/speakers';

const FreeText = ({navigation}) => {
  //
  const [languageValue, setlanguageValue] = useState('de');
  const [speaklanguageValue, setSpeaklanguageValue] = useState('');
  const [textInput, setTextInput] = useState('');
  const [voiceID, setVoiceID] = useState('com.apple.ttsbundle.Moira-compact');

  //Eventlistener für TTS Paket
  useEffect(() => {
    Tts.addEventListener('tts-start', event => console.log('start', event));
    Tts.addEventListener('tts-finish', event => console.log('finish', event));
    Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
    Tts.setIgnoreSilentSwitch('ignore');
  }, []);

  //Text output variable
  useEffect(() => {
    setSpeaklanguageValue(textInput);
  }, [textInput]);

  useEffect(() => {
    onTranslate(languageValue);
  }, [languageValue]);

  const onSpeakerSelect = () => {};
  //-----------Function Area-----------
  const onTranslate = langVal => {
    console.log('from config', langVal);
    const speakerID = langVal.toLowerCase();
    console.log('speaakerID:', speakerID);
    const speakerList = speakers.filter(speaker => {
      const speakerLanguage = speaker.language.split('-');
      if (speakerLanguage[0] == speakerID) {
        return speaker;
      }
    });
    const speaker = speakerList[0];
    console.log('speaker', speaker);
    if (speaker) {
      setVoiceID(speaker.id);
    } else {
      setVoiceID('com.apple.ttsbundle.Anna-compact');
    }

    const data = {
      text: textInput,
      target_lang: langVal,
    };

    PostMaker(data, Endpoints.api_deepl).then(res => {
      console.log('res from view', res);
      setSpeaklanguageValue(res.translations[0].text);
    });
  };

  const onTTS = () => {
    Tts.getInitStatus().then(val => {
      Tts.speak(speaklanguageValue, {
        iosVoiceId: voiceID,
        rate: 0.5,
      });
    });
    console.log(speaklanguageValue);
    // Tts.voices().then(voices => console.log(voices));
  };

  return (
    <FreeTextView
      navigation={navigation}
      languageValue={languageValue}
      onTTS={onTTS}
      onTranslate={onTranslate}
      setTextInput={setTextInput}
      textInput={textInput}
      setlanguageValue={setlanguageValue}
    />
  );
};

export default FreeText;
