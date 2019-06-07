import React, {Component} from 'react';
import {Container, Content, Form, Item, Input, Text, Button} from 'native-base';
import validator from "email-validator";
import {logIn} from "../redux/actions/authActions";
import {connect} from "react-redux";
import {Ionicons} from "@expo/vector-icons";
import {Font} from 'expo';

const styles = {
    Container: {
        backgroundColor: "#000000"
    },
    Text: {
        color: "white",
        fontSize: 14,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    Input: {
        color: "white"
    }
};

const userData = {email: "admin@yandex.ru", password: "admin"};

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
        if (this.state.email.toLowerCase() === userData.email && this.state.password === userData.password) {
            this.login();
        } else {
            alert('incorrect email or password');
        }
    };

    login = () => {
        this.props.logIn();
        this.props.navigation.push('Folders');
    };

    isCorrectEmail = () => this.state.email.toLowerCase() === userData.email;

    focusTheField = (id) => {
        console.log(this.inputs);
        this.inputs[id]._root.focus();
    };

    renderInputs = () => {
        return (
            <Form>
                <Item
                    error={!validator.validate(this.props.email)}
                    success={this.isCorrectEmail()}
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
                <Item last>
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