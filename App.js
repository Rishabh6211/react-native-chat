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
  View, ProgressBar, TextInput
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import allReducer from './src/reducres/index'
// import ViewButton from './src/component/view';
//import ScrollViewTab from './component/scrollview';
//import LoginComponent from './component/login';
//import FooterComponent from './component/footer';
//import FlexDirectionBasics from './component/flex';
import Route from './src/component/routing';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});





const store = createStore(allReducer, applyMiddleware(thunk));

export default class App extends Component{

  constructor(props) {
    super(props);
    
  }
  /*configureStore(initialState) {
      const enhancer = compose(
          applyMiddleware(
              thunkMiddleware
          ),
      );
      return createStore(allReducer, initialState, enhancer);
  }*/
  render() {
     //const store= this.configureStore({});
    return (
       
    <Provider store={store}>
      <View style={styles.container}> 
        <Route />
     </View>
    </Provider>     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
  },
  container1: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  view: {
    paddingTop: 500,
    marginRight: 150,

  }
  
});

