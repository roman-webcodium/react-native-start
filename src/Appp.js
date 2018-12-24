import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

export default class Appp extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <StatusBar hidden barStyle='default'/>
                    <Router/>
                </View>
            </Provider>
        );
    }
}


