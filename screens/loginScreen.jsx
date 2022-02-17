import React from 'react';
import {View,StyleSheet} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import Login from '../components/login';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <Login/>
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