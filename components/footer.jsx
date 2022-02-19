import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
// import { Actions } from 'react-native-router-flux';

export default function Footer({sign}){
    goTo = () =>{
        // if(this.props.goTo==='upload'){
        //     Actions.uploadscreen();
        // }else if(this.props.goTo==="home"){
        //     Actions.homescreen();
        // }
        console.log('go back');
    }
    return(
       <View style={styles.container}>
           <TouchableOpacity style={styles.buttonBack} onPress={()=>this.goTo()}><Text style={styles.buttonText}>{sign}</Text></TouchableOpacity>
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
        padding:15
    },
    buttonText:{
        fontSize:20,
        fontWeight:'700'
    }
});