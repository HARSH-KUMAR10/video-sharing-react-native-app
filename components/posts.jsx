import React from 'react';
import {View,Text, ScrollView,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import Video from 'react-native-video';
import {Video} from 'expo-av';

var postImg = "https://i.pinimg.com/550x/c0/3b/30/c03b300c701ce0759f89d8628868ab73.jpg";
export default class Posts extends React.Component{
    state={videoPlay:true}
    render(){
        return(
            <ScrollView>
                <View style={styles.continer}>
                <Text style={styles.whiteText}>UzumakiNaruto</Text>
                <Image source={{uri:postImg}} style={{width: null,height:400,flex:1}}/>
                <View style={styles.likeZone}>
                    <TouchableOpacity style={styles.likeButton}><AntDesign name="like2" size={15} color="white" /></TouchableOpacity>
                    <Text style={[styles.whiteText,styles.likeButton]}>1000+ likes</Text>
                </View>
                </View>
                <View style={styles.continer}>
                <Text style={styles.whiteText}>UzumakiNaruto</Text>
                <Image source={{uri:postImg}} style={{width: null,height:400,flex:1}}/>
                <View style={styles.likeZone}>
                    <TouchableOpacity style={styles.likeButton}><AntDesign name="like2" size={15} color="white" /></TouchableOpacity>
                    <Text style={[styles.whiteText,styles.likeButton]}>1000+ likes</Text>
                </View>
                </View>
                <View style={styles.continer}>
                <Text style={styles.whiteText}>UzumakiNaruto2</Text>
                {/* <Video source={{uri:"../assets/crypto.mp4"}} style={{width: null,height:400,flex:1}}/> */}
                <TouchableOpacity onPress={()=>this.setState({videoPlay:!this.state.videoPlay})}>
                <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay={this.state.videoPlay}
                isLooping
                style={{ width: null, height: 400,flex:1 }}
                /> 
                </TouchableOpacity>
                <View style={styles.likeZone}>
                    <TouchableOpacity style={styles.likeButton}><AntDesign name="like2" size={15} color="white" /></TouchableOpacity>
                    <Text style={[styles.whiteText,styles.likeButton]}>1000+ likes</Text>
                </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    continer:{
        backgroundColor:'#000',
        borderBottomWidth:2,
        borderBottomColor:'#fff'
    },
    whiteText:{
        color:'#fff',
        paddingTop:5,
        paddingBottom:5
    },
    likeZone:{
        display:'flex',
        flexDirection:'row',
    },
    likeButton:{
        paddingLeft:15,
        paddingTop:10,
        paddingRight:10,
        paddingBottom:20
    }
})