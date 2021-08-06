/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';
import {COLORS, SIZES, icons, FONTS, images} from '../contants';

const Scan = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding * 4,
          paddingHorizontal: SIZES.padding * 3,
        }}>
        <TouchableOpacity
          style={{
            width: 45,
            alignContent: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={icons.close}
            style={{height: 20, width: 20, tintColor: COLORS.white}}></Image>
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: COLORS.white,
              justifyContent: 'center',
              alignItems: 'center',
              ...FONTS.h3,
            }}>
            Scan For Payment
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            backgroundColor: COLORS.green,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            console.log('info');
          }}>
          <Image
            source={icons.info}
            style={{width: 25, height: 25, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderPayments = () => (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 180,
        padding: SIZES.padding * 3,
        borderTopLeftRadius: SIZES.radius,
        borderTopRightRadius: SIZES.radius,
        backgroundColor: COLORS.white,
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{...FONTS.h2, paddingBottom: 40}}>
          Another payment Methods
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={icons.phone}
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
                tintColor: COLORS.purple,
              }}
            />
            <Text style={{alignItems: 'center'}}>Phone Number</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 40,
            }}>
            <Image
              source={icons.barcode}
              style={{
                width: 20,
                height: 20,
                marginRight: 10,
                tintColor: COLORS.primary,
              }}
            />
            <Text style={{alignItems: 'center'}}>Barcode</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderCode = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <Image
        source={images.focus}
        resizeMode="stretch"
        style={{
          marginTop: '-55%',
          width: 200,
          height: 300,
        }}
      />
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: COLORS.transparent}}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{flex: 1}}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}>
        {renderHeader()}
        {renderCode()}
        {renderPayments()}
      </RNCamera>
    </View>
  );
};

export default Scan;
