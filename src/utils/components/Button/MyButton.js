import {Text, Button, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {style} from '../../styles/GlobalStyles';

const MyButton = ({
  title,
  icon = 'at',
  hasIcon = false,
  buttonStyle,
  iconStyle,
  iconSize = 12,
  iconColor = '#000000',
  onPress,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...buttonStyle,
        width: '100%',
        ...style.center,
        ...style.button,
      }}
      onPress={() => onPress()}>
      <View>
        <Text style={{...textStyle}}>
          {hasIcon ? (
            <Icon
              name={icon}
              size={iconSize}
              color={iconColor}
              style={{...iconStyle}}
            />
          ) : (
            false
          )}
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
