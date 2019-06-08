import React, {Component} from 'react';
import {Button, Container, Content, Form, Input, Item, Text} from 'native-base';
import validator from "email-validator";
import {connect} from "react-redux";
import {Ionicons} from "@expo/vector-icons";
import {Font} from 'expo';
import sha256 from 'js-sha256'

import {logIn} from "../redux/actions/authActions";

const styles = {
    Container: {
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        color: "white",
        fontSize: 14,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    Input: {
        flexGrow: 1,
        color: "white",
        padding: 0,
        margin: 0
    },
    Item: {
        flexGrow: 1,
    }
};

const userData = {email: "admin@yandex.ru", password: sha256("admin")};

class LogInScreen extends Component {
    static navigationOptions = {
        title: 'Log in',
        headerStyle: {
            backgroundColor: '#000000'
        },
        headerTintColor: '#fff',
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fontLoaded: false
        };
        this.inputs = {};
    }



    async componentDidMount() {
        if (this.props.isLogined) {
            this.props.navigation.navigate('Folders');
        }
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({fontLoaded: true})
    }

    changeEmailHandler = text => {
        this.setState({email: text})
    };

    changePasswordHandler = text => {
        this.setState({password: text})
    };

    onLoginButtonPress = () => {
        if (this.state.email.toLowerCase() === userData.email && sha256(this.state.password) === userData.password) {
            this.login();
        } else {
            if (this.state.email.toLowerCase() !== userData.email) {
                alert('incorrect email');
            } else {
                alert('incorrect password');
            }
        }
    };

    login = () => {
        this.props.logIn();
        this.props.navigation.push('Folders');
    };

    isCorrectEmail = () => {
        return validator.validate(this.state.email);
    };

    focusTheField = (id) => {
        console.log(this.inputs);
        this.inputs[id]._root.focus();
    };

    renderInputs = () => {
        return (
            <Form style={{padding: 0}}>
                <Item
                    last
                    success={this.isCorrectEmail()}
                    style={styles.Item}
                >
                    <Input
                        style={styles.Input}
                        placeholder="email"
                        autoCapitalize={"none"}
                        value={this.state.email}
                        returnKeyType={ 'next' }
                        onChangeText={this.changeEmailHandler}
                        onSubmitEditing={() => { this.focusTheField('field2'); }}
                    />
                </Item>
                <Item
                    last
                    style={styles.Item}
                >
                    <Input
                        ref={input => { this.inputs['field2'] = input }}
                        secureTextEntry={true} style={styles.Input}
                        value={this.state.password}
                        placeholder="Password"
                        onChangeText={this.changePasswordHandler}
                    />
                </Item>
            </Form>
        )
    };

    render() {
        return (
            <Container style={styles.Container}>
                {this.state.fontLoaded ? (
                    <Content>
                        <Text style={styles.Text}>email: admin@yandex.ru, Password: admin </Text>
                        {this.renderInputs()}
                        <Button onPress={this.onLoginButtonPress} full primary style={{paddingBottom: 4}} title={"Login"}>
                            <Text>Login</Text>
                        </Button>
                    </Content>
                ) : (
                    <Text>loading...</Text>
                )}

            </Container>
        );
    }


}


const mapStateToProps = state => {
    return {
        isLogined: state.auth.isLogined
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logIn: () => dispatch(logIn())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen);