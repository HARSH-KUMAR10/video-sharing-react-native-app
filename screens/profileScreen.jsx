import React from 'react';
import {View,StyleSheet} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import Profile from '../components/profile';

export default class ProfileScreen extends React.Component{
    render(){
        return(<View style={styles.container}>
            <Header/>
            <Profile/>
            <Footer sign="<" goTo="home"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000'
    }
})