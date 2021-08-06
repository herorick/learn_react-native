/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../contants';

const Services = ({list}) => {
  const renderHeader = () => (
    <View>
      <Text style={{...FONTS.h3, color: COLORS.primary}}>Features</Text>
    </View>
  );
  const renderItem = item => (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
      }}>
      <View
        style={{
          height: 60,
          width: 60,
          backgroundColor: item.backgroundColor,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.icon}
          style={{width: 30, height: 30, tintColor: item.color}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        {item.description}
      </Text>
    </View>
  );
  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={list}
      renderItem={item => renderItem(item.item)}
      contentContainerStyle={{paddingHorizontal: SIZES.padding * 3}}
      keyExtractor={item => `${item.id}`}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      scrollEnabled={false}
      numColumns={4}
    />
  );
};

export default Services;
