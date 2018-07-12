import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button
} from 'react-native';
import Video from 'react-native-video';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class VideoItem extends Component{
    render(){
        console.log("videoIttem")
    console.log(this.props.reqVideo)
        
        const videoId = this.props.reqVideo;
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        console.log(url)
        return (
            <View>
            <Video source={{uri:url}} ref={(ref) => {this.player = ref}}  resizeMode="cover" />
            </View>
        )
        
    }
}
// function mapDispatchToProps(dispatch){
//     return {action:bindActionCreators({selectVideo},dispatch)}
// }
function mapStateToProps(state){
    return {reqVideo:state.selectedVideo}
}

export default connect(mapStateToProps)(VideoItem)