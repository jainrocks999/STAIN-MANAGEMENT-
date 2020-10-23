import React, { useEffect, useState } from 'react';
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View,Alert,StatusBar} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './style';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import colors from '../../../component/colors';


const LoginScreen =(props)=> {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')

  
 const doLogin = () => {
  AsyncStorage.setItem(storage.Username, Username);
  AsyncStorage.setItem(storage.Password, Password);
    if (Username == '') {
     Alert.alert('Please Enter Username')
    } else if (Password == '') {
      Alert.alert('Please Enter Password')
    } else {   
    if (Username == 'robin' && Password == '123456'){
      props.dispatch({
        type: 'User_Login_Request',
        url: 'login',
        Username,
        Password,
      });
      navigation.navigate('Home');
    }
    else{
      Alert.alert('Please Enter a valid Username and Password')
    }
  }
    
  };

  return (
    <View style={{flex:1}}>
<CustomHeader/>
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}
            
            >
              <View style={styles.logoContainer}>
           <Text style={styles.subHeading}>Member Login</Text>
            </View>
            <View style={styles.textInputContainer}>
            <TextInput 
            style={styles.textInput}
            placeholder=' Username'
            placeholderTextColor='grey'
            onChangeText={(text)=>setUsername(text)}
            />
            <TextInput 
            style={styles.textInput}
            placeholder=' Password'
            placeholderTextColor='grey'
            keyboardType={"number-pad"}
            onChangeText={(p)=>setPassword(p)}
            />
            </View>
          <View style={styles.checkboxContainer}>
          <View style={{backgroundColor:"#fff"}}> 
             <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            boxType= 'square'
            onFillColor='red'

            onTintColor= '#fffff'
            
          />
          </View>
          <Text style={styles.checkbox}>Keep me logged in</Text>
          </View>

          <TouchableOpacity style={styles.button}
          onPress={doLogin}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>

          </ImageBackground>
       <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
      </View>
  );
}

export default connect()(LoginScreen);
