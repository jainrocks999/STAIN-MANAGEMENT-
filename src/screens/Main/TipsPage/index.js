import React, { useEffect, useState } from 'react';
import {
    ImageBackground,
    View,
} from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import BottomTab from '../../../component/BottomTab';
import { ScrollView, Dimensions } from 'react-native';
import StatusBar from '../../../component/StatusBar';
//import HTMLView from 'react-native-htmlview';
import HTMLView from 'react-native-render-html';
//import style from './style';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';

const TipPage = ({ route }) => {
    const [contents, setContent] = useState();
    const selector = useSelector((state) => state.StainPagesDetails);
    const isFetching = useSelector((state) => state.isFetching);
    const [button, setButton] = useState(null);
    const [chart, setChart] = useState(false);
    const navigation=useNavigation();
    useEffect(() => {
        console.log('StainPagesDetails' + JSON.stringify(selector))
        setButton(' Stain Identification Tips'.toUpperCase());

        const selectedName = selector.map((element) => {

            if (element.name == 'Stain Identification Tips') {
                setChart(false);
                setContent(element.content);
            }
        });
    });

    return (
        <View style={styles.imageBackground}>
            <CustomHeader 
             goBack={()=>navigation.goBack()}
             goToNotification={()=>navigation.navigate('Notifications')}
            />
            {isFetching ? <Loader /> : null}
            <ImageBackground
                style={styles.imageBackground}
                source={require('../../../assets/Images/AppBackground.jpg')}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scroll}>
                    <TitleText title={button} color={'#9E3B22'} fontSize={22} />
                    <HTMLView
                        html={contents}
                        imagesMaxWidth={Dimensions.get('window').width}
                    />
                </ScrollView>
            </ImageBackground>
            <StatusBar />
            <BottomTab />
        </View>
    );
};

export default TipPage;
