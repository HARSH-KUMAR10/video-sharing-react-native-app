import React from "react";
import {Text, TouchableOpacity,StyleSheet,View,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component{
    goToHome=()=>{
        // Actions.homescreen();
        console.log("to home");
    }
    render(){
        return (
            <View style={styles.continer}>
                <View style={styles.squre}></View>
                <TouchableOpacity onPress={()=>this.goToHome()} style={styles.Racangle}><AntDesign name="google" size={30} color="black" /><Text style={{justifyContent:"space-around",fontSize:20,}}>Login</Text></TouchableOpacity>
                <Image source={require('../assets/india.png')} style={{ resizeMode: 'cover', width: 200, height: 200 }}/>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    continer:{
        backgroundColor:'#000',
        borderBottomWidth:2,
        borderColor:'#E75480',
        flex:1,
        alignItems:'center',
        paddingTop:80,
        paddingBottom:80,
        justifyContent:'space-around'
    },
    squre:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: '#FF9800',
        borderWidth:3,
        borderColor:'#E75480',
        borderStyle:'dashed',
        
    },
    Racangle:{
        width: 120 * 2,
        height: 70,
        backgroundColor:'#E75480',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,

    },
    text:{
        fontSize:40,
        color:'#E75480'
    }



})