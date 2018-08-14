import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
  ListView,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {videosList,selectedVideo} from '../actions';
import {VideoItem} from './videoItem.js';
import ListItem from './listItem'

class VideoList extends Component{
    constructor(props){
        super(props)
        
    };

    componentWillMount(){
        Keyboard.dismiss()
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.props.videoList)
        console.log("video row")
        console.log(this.props.videoList)
    }
    
    // alertItemName = (item) => {
    //     alert(item.snippet.title)
    //  }
     renderRow(video){
        return <ListItem videoItem={video} />
     }
    render(){
        if(!this.props.videoList){
            console.log("loading... videos")
            return <Text>Loading...</Text>
        }
        return (
            <ListView dataSource={this.dataSource} renderRow={this.renderRow} enableEmptySections={true} />
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        action: bindActionCreators({videosList,selectedVideo},dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        videoList:state.videoListSource
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoList)