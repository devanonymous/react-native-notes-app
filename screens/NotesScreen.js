import React, {Component} from 'react';
import {Dimensions, StatusBar, ScrollView, StyleSheet, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Button} from '../components/Button';
import {Card} from '../components/Card';
import {NoteList} from '../components/NoteList';

EStyleSheet.build();

export default class NotesScreen extends Component {
    static navigationOptions = {
        title: 'Todos',
        headerStyle: {
            backgroundColor: '#000000'
        },
        headerTintColor: '#fff',
    };

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [
                {id: 1, content: 'I like bacon and eggs'}
            ],
            text: '',
            hide: false
        }
    }

    addNote = () => {
        if (this.state.text !== '') {
            let currentId = this.state.noteArray[this.state.noteArray.length - 1].id;
            let note = {
                id: currentId + 1,
                content: this.state.text,
            };
            let notes = [...this.state.noteArray, note];
            this.setState({
                noteArray: notes,
                text: ''
            })
        }
        this.closeAddNoteScreen();
    };

    closeAddNoteScreen = () => {
        this.setState({hide: !this.state.hide})
    };

    render() {
        if (this.state.hide) {
            return (
                <View style={styles.container}>
                    <Card
                        text={this.state.text}
                        onPress={this.addNote}
                        close={this.closeAddNoteScreen}
                        onChangeText={(text) => this.setState({text})}/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.list}>
                    <ScrollView>
                        <View style={styles.notes}>
                            <NoteList notes={this.state.noteArray}/>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.bottomcontainer}>
                    <Button
                        text='+'
                        onPress={(hide) => this.setState({hide: !this.state.hide})}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121119',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomcontainer: {
        zIndex: 2,
        position: 'absolute',
        marginRight: 20,
        marginBottom: 22,
        right: 0,
        bottom: 0,
    },
    list: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        width: Math.round(Dimensions.get('window').width),
    },
    notes: {
        marginTop: 40,
        marginLeft: 20,
        marginBottom: 20
    }
});
