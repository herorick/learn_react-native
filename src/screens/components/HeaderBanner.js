import React from 'react';
import {View, Image} from 'react-native';
import {SIZES, images} from '../../contants';

const HeaderBanner = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        paddingVertical: SIZES.padding * 2,
        borderRadius: SIZES.borderRadius,
      }}>
      <Image
        source={images.banner}
        style={{height: 200, width: '100%', borderRadius: SIZES.borderRadius}}
        resizeMode="contain"
      />
    </View>
  );
};

export default HeaderBanner;
