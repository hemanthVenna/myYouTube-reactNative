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
    inputChangeHandler (text){
        console.log("input text")
        console.log(text)
        this.props.setSearchText(text)
        console.log(this.props.searchText)
    }
    onSearchVideo(){
        const {searchText} = this.props;
        this.props.videosList(searchText);
    }
    render(){
        return (
            <View>
                <TextInput onChangeText={this.inputChangeHandler.bind(this) }  value={ this.props.searchText }/>
                <Button onPress={this.onSearchVideo.bind(this) } title="Go To Videos"></Button>
            </View>
        )
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         textHandler: (text) => dispatch(setSearchText(text)),
//         videoHandler: () => dispatch(videosList())
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setSearchText,videosList},dispatch)
}
const mapStateToProps = (state) => {
    return {searchText:state.item}
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)