import React, {Component} from 'react';
import {Container, Content, Form, Item, Input, Text} from 'native-base';
import validator from "email-validator";
import {logIn} from "../redux/actions/authActions";
import {connect} from "react-redux";

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
            password: ''
        }
    }

    componentDidMount() {
        if (this.props.isLogined) {
            this.props.navigation.push('Folders');
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.email.toLowerCase() === userData.email && this.state.password === userData.password) {
            this.login();
        }
    }

    changeEmailHandler = text => {
        this.setState({email: text})
    };

    changePasswordHandler = text => {
        this.setState({password: text})
    };

    login = () => {
        this.props.logIn();
        this.props.navigation.push('Folders');
    };

    isCorrectEmail = () => this.state.email.toLowerCase() === userData.email;


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
                        value={this.state.email}
                        onChangeText={this.changeEmailHandler}
                    />
                </Item>
                <Item last>
                    <Input
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
                <Content>
                    <Text style={styles.Text}>email: admin@yandex.ru, Password: admin </Text>
                    {this.renderInputs()}
                </Content>
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