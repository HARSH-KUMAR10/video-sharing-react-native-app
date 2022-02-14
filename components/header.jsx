import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';

export default class Header extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                
                <Text style={styles.logoText}>{'{JSX}'}</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity><Ionicons name="ios-exit-outline" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity><FontAwesome5 name="user" size={24} color="black" /></TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#E75480',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'5%',
        marginTop:Constants.statusBarHeight
    },
    buttonContainer:{
        display:'flex',
        flexDirection:'row',
        width:'22%',
        justifyContent:'space-around'
    },
    logoText:{
        fontSize:20,
        fontFamily:'sans-serif',
        fontWeight:'700',
        letterSpacing:2,
    }
})