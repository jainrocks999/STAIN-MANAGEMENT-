import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
export default StyleSheet.create({
  imageBackground: {
    flex:1
  },
  heading: {
    marginTop:'5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  subHeading: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 17,
    color: colors.darkOrange,
  },
  settingsText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkOrange,
  },
  settings: {
    flex:1/2,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
    
  },
  settingsContainer: {
  width:'80%',
    // marginTop: '10%',
    margin:20,
    borderTopWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderColor: '#ACACAC',
  },
  settingsItems: {
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth:1,
    borderColor: '#ACACAC',
  },
  settingsItemsText:{
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.darkOrange,
  },
  textInput: {
    // marginTop: '5%',
    backgroundColor: colors.white,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#C9C8C7',
  },
  checkbox: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 12,
  },
  checkboxContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '40%',
  },

  button: {
    height: '7%',
    width: '40%',
    marginTop: '15%',
    backgroundColor: colors.orange,
    opacity: 87,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
