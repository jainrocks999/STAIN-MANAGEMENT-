import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Animated
} from 'react-native';
import Axios from 'axios';
import styles from './style';
import { connect } from 'react-redux';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../storage';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-simple-toast';

const CustomHeader = (props) => {
  const [anim,setAnim]=useState(new Animated.Value(0))
  const navigation = useNavigation();
  let _menu = null;

  const setMenuRef = (ref) => {
    _menu = ref;
  };

  const Account = () => {
    navigation.navigate('Account');
    _menu.hide();
  };
  const About = () => {
    navigation.navigate('About');
    _menu.hide();
  };
  const Resource = () => {
    navigation.navigate('resource');
    _menu.hide();
  };
  const Support = () => {
    navigation.navigate('supportTwo');
    _menu.hide();
  };
  const Subscribe = () => {
    navigation.navigate('Subscribe');
    _menu.hide();
  };
  const Profile = () => {
    navigation.navigate('Edit');
    _menu.hide();
  };

  const Logout = () => {
   
    Alert.alert(
      'Are you want to logout ?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => {
            cancelable: false;
          },
          style: 'cancel',
        },
        { text: 'ok', onPress: () => setlog() },
      ],
      { cancelable: false },
    );

  };
  const setlog = () => {
    try {
      _menu.hide();
      const user_id= AsyncStorage.getItem(storage.UserId)
      console.log('djfksad',user_id)
      const device_id=DeviceInfo.getDeviceId();
      Axios.get(`https://backstage.surphaces.com/wp-json/wp/v1/user/logout?user_id=${user_id}&device_id=null`).
      then(responce=>{
        // Toast.show(responce.status)
        // console.log('Logout res',responce.status)
      })
      navigation.replace('Login');
       AsyncStorage.setItem(storage.Username, '');
      AsyncStorage.setItem(storage.Password, '');
      AsyncStorage.setItem(storage.Email, '');
      AsyncStorage.setItem(storage.Name, '');
      AsyncStorage.setItem(storage.UserId, '');
      AsyncStorage.setItem(storage.Url, '');
    } catch (error) {
      console.error(error);
    }
  };

  const showMenu = () => {
    _menu.show();
  };


  //   My account 
  // About the App 
  // Support 
  // Logout 
  
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: -1,
          duration: 120,
          useNativeDriver: true
          // delay: 800
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true
        }),
        Animated.timing(anim, {
          toValue: -1,
          duration: 120,
          useNativeDriver: true
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true
        }),
       
      ])
    ).start();

  }, []);
  const rotation = anim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-20deg', '20deg']
  });
  return (
    <View style={styles.header}>
       {/* <TouchableOpacity
        style={styles.iconmain}
        onPress={() => {
          navigation.goBack(null);
        }}>
        <Image
          source={require('../../assets/Icons/arrow1.png')}
          style={styles.icon}
          // style={{ tintColor: '#fff' }}
          resizeMode={'contain'}
        />
      </TouchableOpacity> */}
      <View style={styles.header1}>
        <TouchableOpacity
          style={{
            height: 26,
            width: 26,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          onPress={() => {
             navigation.navigate('Notifications')
          }}>
          <Animated.View style={{ alignSelf: 'center', transform: [{ rotate: rotation }], }}>
          <Image
            source={require('../../assets/Icons/bell.png')}
             style={{ tintColor: '#fff',height:26,width:26}}
            resizeMode="cover"
          />
          </Animated.View>
        </TouchableOpacity>
       
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            marginLeft: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={showMenu}>
          <Menu
            style={{ width: '38%' }}
            ref={setMenuRef}
            button={
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="transparent"
                style={{
                  height: 26,
                  width: 26,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                // hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                //activeOpacity={10.00}
                onPress={showMenu}>
                <Image
                  style={{ height: '90%', width: '100%' }}
                  resizeMode="contain"
                  source={require('../../assets/Icons/menu.png')}
                />
              </TouchableHighlight>
            }>
            <MenuItem style={styles.itemSeperator} onPress={Profile}>

              <Text style={{ fontFamily: 'Arial', }}>My Account</Text>
            </MenuItem>

            <MenuItem style={styles.itemSeperator} onPress={About}>

              <Text style={{ fontFamily: 'Arial', }}>About The App</Text>
            </MenuItem>

            <MenuItem style={styles.itemSeperator} onPress={Support}>
              <Text style={{ fontFamily: 'Arial', }}>Support</Text>
            </MenuItem>
            {/* <MenuItem style={styles.itemSeperator} onPress={Subscribe}>

              <Text style={{ fontFamily: 'Arial', }}>Subscribe</Text>
            </MenuItem> */}

            {/* <MenuItem style={styles.itemSeperator} onPress={Resource}>

              <Text style={{ fontFamily: 'Arial', }}>Resources</Text>
            </MenuItem> */}


            <MenuItem style={styles.itemSeperator} onPress={Logout}>

              <Text style={{ fontFamily: 'Arial', }}>Logout</Text>
            </MenuItem>
          </Menu>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(CustomHeader);
