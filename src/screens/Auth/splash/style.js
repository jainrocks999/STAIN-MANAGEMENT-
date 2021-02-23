import {StyleSheet} from 'react-native';
import colors from '../../../component/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  MainView: {
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logoContainer1: {
    height: hp('8%'),
    width: hp('15%'),
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'white'
  },
  SecondView: {
    flex: 0.98,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    // width:300
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    marginTop: 12,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo1: {
    width: '90%',
    height: 30,
    // borderRadius:10,
    marginTop: 10,

    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    backgroundColor: colors.orange,
    height: hp('5%'),
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  modal: {
    width: wp('100%'),

    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ModelBtntext: {
    color: colors.white,
    fontSize: hp('1.5%'),
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
  },
  ModelMsgText: {
    width: '99%',
    alignSelf: 'center',
    color: colors.black,
    fontSize: hp('1.5%'),
    fontWeight: '500',
    alignItems: 'center',
    padding: 6,
    textAlign: 'center',
  },
  ModelmsgView: {
    width: '99%',

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  popup: {
    width: '30%',
    height: 40,
    marginTop: 10,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
