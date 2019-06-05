import React, {Component} from 'react';
import {Dimensions, StatusBar, ScrollView, StyleSheet, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Button} from '../components/Button';
import {Card} from '../components/Card';
import {NoteList} from '../components/NoteList';
import {connect} from "react-redux";
import {addNote} from "../redux/actions/notesActions";

EStyleSheet.build();

class NotesScreen extends Component {
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
            text: '',
            hide: false
        }
    }

    addNote = () => {
        if (this.state.text !== '') {
            let note = {
                folderId: this.props.navigation.state.params.folderId,
                title: null,
                text: this.state.text,
            };
            this.props.addNote(note)
            this.setState({
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
                            <NoteList folderId={this.props.navigation.state.params.folderId} notes={this.props.notes}/>
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

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addNote: (note) => dispatch(addNote(note))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesScreen)

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
