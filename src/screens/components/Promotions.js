/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import {FONTS, SIZES, COLORS, images} from '../../contants';

const Promotions = ({list}) => {
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5,
        }}
        onPress={() => console.log(item.title)}>
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.primary,
          }}>
          <Image
            source={images.promoBanner}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>

        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={{...FONTS.h4}}>{item.title}</Text>
          <Text style={{...FONTS.body4}}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
  const renderHeader = () => (
    <View>
      <Text
        style={{
          ...FONTS.h3,
          marginVertical: 10,
        }}>
        Promotions
      </Text>
    </View>
  );
  return (
    <FlatList
      data={list}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      numColumns={2}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 3,
      }}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      scrollEnabled={false}
    />
  );
};

export default Promotions;
