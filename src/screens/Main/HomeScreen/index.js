import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './style';
import CustomHeader from '../../../component/HomeHeader2';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../../component/colors';
import CustomButton from '../../../component/Button';
import StaticText from '../../../component/StaticText';
import TitleText from '../../../component/TitleText';
function HomeScreen(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    loadData();
    loadData1();
    loadData2();
  }, []);


  const loadData = async () => {
    dispatch({
      type: 'User_Stain_Request',
      url: 'v1/stain/all',
    });
  };
  const loadData1 = async () => {
    dispatch({
      type: 'User_CaseStudy_Request',
      url: 'v1/stain/case_studies',
    });
  };

  const loadData2 = async () => {
    dispatch({
      type: 'User_App_Request',
      url: 'v1/stain/about_app',
    });
  };
  return (
    <View style={styles.imageBackground}>
      <CustomHeader />

      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/HomeScreen.png')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.logoContainer}>
            {/* <Image
              style={styles.logo}
              source={require('../../../assets/Images/logo.png')}
            /> */}
             <Image
                  style={styles.logo}
                  source={require('../../../assets/Images/stain.png')}
                />
          </View>

          <View style={styles.logoContainer}>
            <Text style={styles.heading}>{StaticText.INTERACTIVEtext}</Text>
          </View>
          <View style={styles.logoContainer}>
            {/* <Text style={styles.subHeading}>
              For stone, tile, concrete and{'\n'} other hard porous surfaces
            </Text> */}
              <TitleText title={'Interactive Stain App For Hard Porous Surfaces'}  color={'#000'} fontSize={16} />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="About Stains"
              onPress={() => {
                navigation.navigate('AboutStains', {
                  btnName: 'About Stains',
                });
              }}
            />
            <CustomButton
              title="Stain Chart"
              onPress={() => {
                navigation.navigate('Stain', {
                  btnName: 'STAIN CHART',
                });
              }}
            />
            <CustomButton
              title="How To Video"
              onPress={() => {
                navigation.navigate('VideoList')
                
                // ('HowTo', {
                //   btnName: 'How to Apply a Poultice',
                // });
              }}
            />
            <CustomButton
              title="Recommended Supplies"
              onPress={() => {
                navigation.navigate('Recommendedsupply',
                //  {
                //   btnName: 'How to Apply a Poultice',
                // }
                );
              }}
            />
            <CustomButton
              title="Case Studies"
              onPress={() => {
                navigation.navigate('Support', {
                  btnName: 'Case Studies',
                });
              }}
            />

            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate('Support', {
                  btnName: 'IMPORTANT',
                });
              }}
              style={[styles.button, { flexDirection: 'row' }]}>
              <Image
                resizeMode="stretch"
                style={styles.icon}
                source={require('../../../assets/Icons/Important.png')}
              />
              <Text style={styles.buttonText}>Important!</Text>
            </TouchableOpacity> */}

            {/* <CustomButton
              title="What is a Poultice?"
              onPress={() => {
                navigation.navigate('Support', {
                  btnName: 'What is a Poultice?',
                });
              }}
            />
            */}

             <View style={styles.logoContainer}>
               <Image
             
              source={require('../../../assets/Images/logo.png')}
              />
              </View>
          </View>
         
        </ScrollView>
      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
}

export default HomeScreen;
