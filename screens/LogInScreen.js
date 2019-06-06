import React, {Component} from 'react';
import {Container, Header, Content, Form, Item, Input, Text} from 'native-base';

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

const userData = {email: "admin@yandex.ru", password:"admin"};

class LogInScreen extends Component {
    static navigationOptions = {
        title: 'Log in',
        headerStyle: {
            backgroundColor: '#000000'
        },
        headerTintColor: '#fff',
    };

    render() {
        return (
            <Container style={styles.Container}>
                <Content>
                    <Text style={styles.Text}>email: admin@yandex.ru, Password: admin </Text>
                    <Form>
                        <Item>
                            <Input style={styles.Input} placeholder="email"/>
                        </Item>
                        <Item last>
                            <Input secureTextEntry={true} style={styles.Input} placeholder="Password"/>
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default LogInScreen;