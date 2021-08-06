import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {SIZES, COLORS, FONTS, icons} from '../contants';
const Input = ({
  label,
  name,
  onChange,
  isPassword,
  customStyle,
  placeholder,
}) => {
  const [toggle, setToggle] = useState(false);
  const ontoggle = () => {
    setToggle(!toggle);
  };
  return (
    <View style={{marginTop: SIZES.padding * 3, width: '100%'}}>
      {label && (
        <Text style={{color: COLORS.lightGreen, ...FONTS.h3}}>{label}</Text>
      )}
      <TextInput
        name={name}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.white,
            paddingHorizontal: SIZES.padding * 2,
            ...customStyle,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.white}
        secureTextEntry={toggle && isPassword}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={ontoggle}
          style={{
            position: 'absolute',
            right: 0,
            top: 30,
            width: 30,
            height: 30,
          }}>
          <Image
            source={toggle ? icons.eye : icons.disable_eye}
            resizeMode="contain"
            style={{width: 25, height: 25, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
