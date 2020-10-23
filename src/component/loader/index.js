import React from 'react';
import {View,Image,Text} from 'react-native';
export default class Loader extends React.Component{
     constructor(props) {
    super(props);
    this.state={
    spinner:true
}
     }
    render(){
        return(
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(248,249,249,0.5)',
                justifyContent: 'center',
                alignItems:'center',
                position:'absolute',
                top:0,
                left:0,
                right:0,
                bottom:0,
                zIndex:999
            }}>
           <Text>Loading</Text>   
            </View>
        )
    }
}