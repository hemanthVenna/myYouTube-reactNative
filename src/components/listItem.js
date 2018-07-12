import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
  TextInput,
  Image

} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {selectedVideo} from '../actions'

class ListItem extends Component{
    render(){
        const {itemStyle,textStyle,imgWrapStyle,descriptionWrap} = styles;
        const icon = this.props.videoItem.snippet.thumbnails.default.url;
        console.log('slected video2')
        console.log(this.props.videoItem.id.videoId)
        return (
            <View >
               <TouchableWithoutFeedback onPress={()=>this.props.selectVideo(this.props.videoItem.id.videoId)}>
               <View style={itemStyle}>
                <View style={imgWrapStyle}>
                
                    <Image source={icon} />
                </View>
                <View style={descriptionWrap}>
                    <Text style={textStyle}>{this.props.videoItem.snippet.title}</Text>
                </View>
                </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}


const styles = {
    itemStyle:{
        flex:1,
        display:'flex',
        flexDirection :'row'
    },
    textStyle:{
        color:"#000",
        lineHeight: 24,
        fontSize:20
    },
    imgWrapStyle:{
        flex:1,
        width:150,
        height:100
    },
    descriptionWrap:{
        flex:2,
    }
}

function mapDispatchToProps(dispatch){
    return {
        selectVideo: (video) => dispatch(selectedVideo(video))
    }
}

export default connect(null,mapDispatchToProps)(ListItem)