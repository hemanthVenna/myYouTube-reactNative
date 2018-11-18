import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,WebView
} from 'react-native';
import Video from 'react-native-video';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class VideoItem extends Component{
    render(){
        const videoId = this.props.reqVideo;
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        return (
            <WebView
              source={{uri: url}}
              style={{marginTop: 20}}
            />
        );
    }
}
// function mapDispatchToProps(dispatch){
//     return {action:bindActionCreators({selectVideo},dispatch)}
// }
function mapStateToProps(state){
    return {reqVideo:state.selectedVideo}
}

export default connect(mapStateToProps)(VideoItem)