import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../contants';

const Button = ({onHandle, text, customButton, customText}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.black,
        width: '80%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        ...customButton,
      }}
      onPress={onHandle}>
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
          ...customText,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
