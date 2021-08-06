/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  COLORS,
  featuresData,
  specialPromoData,
  SIZES,
  FONTS,
  images,
  icons,
} from '../contants';

import {HeaderBanner, Header, Services, Promotions} from './components';

const Home = () => {
  const [features, setFeatures] = useState([]);
  const [special, setSpecial] = useState([]);
  useEffect(() => {
    setFeatures(featuresData);
    setSpecial(specialPromoData);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30,
      }}>
      <ScrollView>
        <Header />
        <HeaderBanner />
        <Services list={features} />
        <Promotions list={special} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
