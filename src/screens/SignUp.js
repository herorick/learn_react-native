import React, {useEffect, useState} from 'react';
import {
  Touchable,
  View,
  Text,
  TextInput,
  Modal,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Input, InputNumber, Button} from '../components';
import {COLORS, SIZES, FONTS, icons, images} from '../contants';

const SignUp = ({navigation}) => {
  const [area, setArea] = useState([]);
  const [selectArea, setSelectedArea] = useState({});
  const [toogleModal, setToggleModal] = useState(false);
  const onToggleModal = () => {
    setToggleModal(true);
  };
  const onSubmit = () => {
    navigation.navigate('Home');
  };
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        let areaData = data.map(item => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}+`,
            flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
          };
        });
        setArea(areaData);

        if (areaData.length > 0) {
          let defaultArea = areaData.filter(a => a.code == 'US');

          if (defaultArea.length > 0) {
            setSelectedArea(defaultArea[0]);
          }
        }
      })
      .catch();
  }, []);
  const renderHeader = () => {
    return (
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding * 2,
        }}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{width: 20, height: 20, tintColor: COLORS.white}}
        />
        <Text style={{paddingLeft: 20, color: COLORS.white, ...FONTS.h3}}>
          Sign Up
        </Text>
      </TouchableOpacity>
    );
  };

  const renderLogo = () => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: SIZES.padding * 5,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.wallieLogo}
          resizeMode="contain"
          style={{
            width: '60%',
          }}
        />
      </View>
    );
  };

  const renderForm = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 2,
        }}>
        <Input
          label="Full name"
          name="fullname"
          placeholder="enter your full name"
        />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <InputNumber
            code={selectArea?.code}
            country_icon={selectArea?.flag}
            callingCode={selectArea?.callingCode}
            onHandle={onToggleModal}
          />
          <Input
            customStyle={{
              marginLeft: 40,
            }}
            name="phone"
            // eslint-disable-next-line react-native/no-inline-styles
            placeholder="Enter your phone"
          />
        </View>
        <Input
          label="Password"
          name="password"
          // eslint-disable-next-line react-native/no-inline-styles
          placeholder="Enter your password"
          isPassword
        />
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View style={{marginVertical: 50, flex: 1, alignItems: 'center'}}>
        <Button text="Submit" onHandle={onSubmit} />
      </View>
    );
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', padding: SIZES.padding * 2}}
        onPress={() => {
          setToggleModal(false);
          setSelectedArea(item);
        }}>
        <Image
          source={{uri: item.flag}}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
        <Text
          style={{
            ...FONTS.body3,
            marginLeft: 10,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={toogleModal}
        onRequestClose={() => {
          setToggleModal(!toogleModal);
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 400,
              width: SIZES.width * 0.8,
              backgroundColor: COLORS.lightGreen,
              borderRadius: SIZES.radius,
            }}>
            <FlatList
              data={area}
              renderItem={item => renderItem(item.item)}
              keyExtractor={item => item.code}></FlatList>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient style={{flex: 1}} colors={[COLORS.lime, COLORS.emerald]}>
        <SafeAreaView style={{flex: 1}}>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
          {renderButton()}
          {toogleModal && renderModal()}
        </SafeAreaView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
