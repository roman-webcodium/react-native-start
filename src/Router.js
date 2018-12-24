import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Login from './components/Login/Login';
import Layout from "./components/Layout/Layout";
import Register from "./components/Register/Register";


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                {/*<Scene key="greeting" component={GreetingPage} parentIndex={1} initial />*/}
                <Scene key="login" hideNavBar={true} component={Login} title="Login" initial/>
                <Scene key="register" component={Register} title="Register"/>
                <Scene key="layout" component={Layout}  title="Layout"/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;