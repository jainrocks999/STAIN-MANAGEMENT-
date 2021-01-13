import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../component/colors';

const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBackground: {
    flex:1,
  },
  scroll:{
    paddingHorizontal:30,
    paddingBottom:60,
    flexGrow: 1,
  },
  logoContainer: {
    marginTop:'5%',
    alignItems:'center'
    ,width:'99%'
  },

});