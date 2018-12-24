import React, {Component} from 'react';
import {TextField} from 'react-native-material-textfield';
import {Button} from "react-native-material-ui";
import {View, Text, StyleSheet, TextInput, Alert, ImageBackground, StatusBar} from 'react-native';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

    }

    sendData = () => {
        console.log(this.state);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Login
                </Text>
                <TextField
                    label='Email'
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                />
                <TextField
                    label='Password'
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                />
                <Button raised primary text="Send" onPress={this.sendData}/>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '90%',
        marginLeft: '5%'
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 30,
    }
});
