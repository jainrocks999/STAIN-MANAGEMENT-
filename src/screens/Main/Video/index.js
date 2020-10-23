import React, { useEffect, useState } from 'react';
import {View,Text, ImageBackground, Image,StatusBar} from 'react-native';
import {connect} from 'react-redux';
import CustomHeader from '../../../component/header';
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from "react-native-yt-player";
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../component/colors';

const TopBar = ({ play, fullScreen }) =>  (
    <View
      style={{
        alignSelf: 'center',
        position: 'absolute',
        top: 0,
      }}>
      {!fullScreen && <Text style={{color: '#FFF'}}> Custom Top bar</Text>}
    </View>
  );
const Video=()=> {

  const navigation = useNavigation();
  const [fullScreen,setFullScreen]=useState(true)
  
  const onFullScreen = fullScreen => {
        setFullScreen({fullScreen})
  };
  const play = () => {
    player.playVideo();
  };
  const pause = () => {
    player.pauseVideo();
  };
 
  const seekTo = s => {
    player.seekTo(s);
  };
  return (
    <View style={{flex:1}}>
<CustomHeader/>
          <ImageBackground
            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}>
     
      <YoutubePlayer
        loop
        topBar={TopBar}
        videoId="UywqPV1inW4"
        autoPlay
        onFullScreen={onFullScreen}
        onStart={() =>play }
        onEnd={() => alert("on End")}
      />
     

     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',bottom:0,position:'absolute'}}>

      <TouchableOpacity onPress={()=>{navigation.goBack()}} >
      <Text>{'<< BACK'}</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} >
       <Image source={require('../../../assets/Icons/home.png')}
       resizeMode='center'
       />
       </TouchableOpacity>
     </View>
          </ImageBackground>
          <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />

      </View>
  );
}

export default connect()(Video);
