/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FONTS, SIZES, COLORS, icons} from '../../contants';
const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding * 2,
      }}>
      <View>
        <Text style={{...FONTS.h2}}>Hello!</Text>
        <Text style={{...FONTS.body4}}>ByProgrammer</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.transparent,
          }}>
          <Image
            source={icons.bell}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.secondary,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: -5,
              right: -5,
              height: 10,
              width: 10,
              backgroundColor: COLORS.red,
              borderRadius: 5,
            }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
