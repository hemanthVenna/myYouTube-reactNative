import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
  TextInput

} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {setSearchText,videosList} from '../actions'

class Search extends Component{
    render(){
        return (
            <View>
                <TextInput onChange={(text) => this.props.textHandler(text) }  value={ this.props.searchText }/>
                <Button onPress={ () => this.props.videoHandler()} title="Go To Videos"></Button>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        textHandler: (text) => dispatch(setSearchText(text)),
        videoHandler: () => dispatch(videosList())
    }
}
const mapStateToProps = (state) => {
    return {searchText:state.item}
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)