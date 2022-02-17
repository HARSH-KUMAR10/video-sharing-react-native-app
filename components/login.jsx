import React from "react";
import {Text, TouchableOpacity,StyleSheet,View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class Login extends React.Component{
       render(){
           return (
               <View style={styles.continer}>
                   <View style={styles.squre}></View>
                   <TouchableOpacity style={styles.Racangle}><AntDesign name="google" size={30} color="black" /><Text style={{justifyContent:"space-around",fontSize:20,}}>Login</Text></TouchableOpacity>
                   
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
        justifyContent:'space-around',
        alignItems:'center',
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