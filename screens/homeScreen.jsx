import React from 'react';
import {View,ScrollView,StyleSheet} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import Posts from '../components/posts';
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <Posts/>
                <Footer sign="+" goTo="upload"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})