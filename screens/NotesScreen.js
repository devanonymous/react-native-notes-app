import React, {Component} from 'react';
import {Dimensions, StatusBar, ScrollView, StyleSheet, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Icon, Fab } from 'native-base';
import {connect} from "react-redux";

import {NoteList} from '../components/NoteList';

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

    getFolderId = () => this.props.navigation.state.params.folderId;

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
        return (
            <View style={styles.container}>
                <View style={styles.list}>
                    <ScrollView>
                        <View style={styles.notes}>
                            <NoteList navigation={this.props.navigation} folderId={this.props.navigation.state.params.folderId} notes={this.props.notes}/>
                        </View>
                    </ScrollView>
                </View>
                <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('EditNote', {title: "Add note", folderId: this.getFolderId()})}>
                    <Icon name="add" />
                </Fab>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
};

export default connect(mapStateToProps)(NotesScreen)

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
