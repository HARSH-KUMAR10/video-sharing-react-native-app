import React from 'react';
import {View,ScrollView,StyleSheet} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <ScrollView></ScrollView>
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