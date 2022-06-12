/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native'

import App from './Componentes/App'
import * as firebase from 'firebase'
import Login from './Componentes/Login';
import { Component } from 'react/cjs/react.production.min';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

export default class dribbleAppUil extends Component{
    constructor(props){
        super(props)
        this.state={
            initialView : null

        }
    }

    getInitialView(){
        firebase.auth().on
    }
    renderScene(route, navigator){
        var globalProps={navigator}
        switch(route.id){
            case 'App':
                return(
                    <App navigator={navigator}/>
                )
            case 'Login':
                return(
                    <Login navigator={navigator}/>
                )
                
        }
    }
    render(){
        return(
            <Navigator 
             initialRoute={{
                 id: this.state.initialRoute
             }}
             renderScene={this.renderScene}
             />
        );
    }
}



AppRegistry.registerComponent('dribbleAppUil', () => dribbleAppUil);
