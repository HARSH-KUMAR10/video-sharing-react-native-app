import React from 'react';
import {TouchableOpacity,Image,StyleSheet,View,Text,ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Profile extends React.Component{
    render(){
        return (<View style={styles.container}>
            <View style={styles.about}>
            <TouchableOpacity>
            <Image source={{uri:'https://i.pinimg.com/originals/63/15/97/631597a7db9df21746620c504acd95ec.jpg'}} style={{width:100,height:100,borderRadius:50}}/>
            </TouchableOpacity>
            <Text style={{color:'white',fontSize:20}}>@UzumakiNaruto</Text>
            </View>
            <ScrollView>
                <View style={styles.postSection}>
                    <Image source={{uri:'https://i.pinimg.com/originals/b0/05/51/b0055180760a251f3d192a03b9650ed3.jpg'}} style={{width:70,height:70,borderRadius:10}}/>
                    <Text style={{color:"#fff"}}>100 likes</Text>
                    <TouchableOpacity><FontAwesome name="trash" size={24} color="#f44" /></TouchableOpacity>
                </View>
                <View style={styles.postSection}>
                    <Image source={{uri:'https://i.pinimg.com/originals/b0/05/51/b0055180760a251f3d192a03b9650ed3.jpg'}} style={{width:70,height:70,borderRadius:10}}/>
                    <Text style={{color:"#fff"}}>100 likes</Text>
                    <TouchableOpacity><FontAwesome name="trash" size={24} color="#f44" /></TouchableOpacity>
                </View>
                <View style={styles.postSection}>
                    <Image source={{uri:'https://i.pinimg.com/originals/b0/05/51/b0055180760a251f3d192a03b9650ed3.jpg'}} style={{width:70,height:70,borderRadius:10}}/>
                    <Text style={{color:"#fff"}}>150 likes</Text>
                    <TouchableOpacity><FontAwesome name="trash" size={24} color="#f44" /></TouchableOpacity>
                </View>
                <View style={styles.postSection}>
                    <Image source={{uri:'https://i.pinimg.com/originals/b0/05/51/b0055180760a251f3d192a03b9650ed3.jpg'}} style={{width:70,height:70,borderRadius:10}}/>
                    <Text style={{color:"#fff"}}>200 likes</Text>
                    <TouchableOpacity><FontAwesome name="trash" size={24} color="#f44" /></TouchableOpacity>
                </View>
                <View style={styles.postSection}>
                    <Image source={{uri:'https://i.pinimg.com/originals/b0/05/51/b0055180760a251f3d192a03b9650ed3.jpg'}} style={{width:70,height:70,borderRadius:10}}/>
                    <Text style={{color:"#fff"}}>350 likes</Text>
                    <TouchableOpacity><FontAwesome name="trash" size={24} color="#f44" /></TouchableOpacity>
                </View>
                <View style={styles.postSection}>
                    <Image source={{uri:'https://i.pinimg.com/originals/b0/05/51/b0055180760a251f3d192a03b9650ed3.jpg'}} style={{width:70,height:70,borderRadius:10}}/>
                    <Text style={{color:"#fff"}}>50 likes</Text>
                    <TouchableOpacity><FontAwesome name="trash" size={24} color="#f44" /></TouchableOpacity>
                </View>
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    about:{
        flexDirection:'row',
        padding:30,
        justifyContent:'space-between',
        alignItems:'center'
    },
    postSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15,
        marginBottom:15,
        marginLeft:40,
        marginRight:40,
    }
})