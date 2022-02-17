import React from 'react';
import {View,ScrollView,StyleSheet} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import Upload from '../components/upload';

export default class uploadScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <Upload/>
                <Footer sign="<"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})