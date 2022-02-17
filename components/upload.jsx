import React from "react";
import {Text, TouchableOpacity,StyleSheet,View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class Upload extends React.Component{
       render(){
           return (
               <View style={styles.continer}>
                   <TouchableOpacity style={styles.squre}><Text style={styles.text}>+</Text></TouchableOpacity>
                   <TouchableOpacity style={styles.Racangle}><AntDesign name="upload" size={24} color="black" /><Text style={{justifyContent:"space-around",fontSize:20,}}>UPLOAD</Text></TouchableOpacity>
                   
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
        width: 140,
        height: 140,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:4,
        borderColor:'white',
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
        color:'white'
    }



})