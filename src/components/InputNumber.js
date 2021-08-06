import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {icons, COLORS, SIZES, images, FONTS} from '../contants';
const InputNumber = ({code, country_icon, callingCode, onHandle}) => {
  return (
    <TouchableOpacity
      onPress={onHandle}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white,
        width: 100,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 10,
      }}>
      <Image
        source={icons.down}
        resizeMode="contain"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 20,
          width: 20,
          tintColor: COLORS.white,
          marginRight: 10,
        }}
      />
      <Image
        source={{uri: country_icon}}
        resizeMode="contain"
        style={{height: 20, width: 20, marginRight: 10}}
      />
      <Text style={{color: COLORS.white, ...FONTS.body3}}>
        {code}
        {callingCode}
      </Text>
    </TouchableOpacity>
  );
};

export default InputNumber;
