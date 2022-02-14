import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function Footer({sign}){
    return(
       <View style={styles.container}>
           <TouchableOpacity style={styles.buttonBack}><Text style={styles.buttonText}>{sign}</Text></TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#E75480',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        padding:'5%',
        alignItems:'center'
    },
    buttonBack:{
        backgroundColor:'#fafafa',
        borderRadius:50,
        padding:10
    },
    buttonText:{
        fontSize:20,
        fontWeight:'700'
    }
});