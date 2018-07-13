/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Scene } from 'react-native-router-flux';

import Search from './components/search';
import VideoList from './components/videoList';
import VideoItem from './components/videoItem'
import reducers from './reducers';
import reduxThunk from 'redux-thunk'
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <Scene key="root">
            <Scene key='pageOne' component={Search} title='Search' initial={true} ></Scene>
            <Scene key='pageTwo' component={VideoList} title='Related Videos'></Scene>
            <Scene key='pageThree' component={VideoItem} title="Video Details"></Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});
