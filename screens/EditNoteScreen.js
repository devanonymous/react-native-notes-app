import React from 'react'
import EStyleSheet from "react-native-extended-stylesheet";
import {Dimensions, Text, TextInput, View} from "react-native";
import {Divider} from "react-native-elements";
import {Fab, Icon, Container} from "native-base";
import {addNote} from "../redux/actions/notesActions";
import {connect} from "react-redux";

const styles = EStyleSheet.create({
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: '#252333'
    },
    Text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#166bcc'
    },
    NotePad: {
        width: "100%",
        height: "100%",
        backgroundColor: '#4a4a4a',
    },
    Note: {
        color: '#fff',
        flex: 1,
        fontSize: 16,
        textAlignVertical: 'top'
    },
    Title: {
        width: Math.round(Dimensions.get('window').width) - 75,
        height: 50,
        padding: 5
    },
    TitleTextInput: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

class EditNoteScreen extends React.Component {
    static navigationOptions = {
        title: "Note",
        headerStyle: {
            backgroundColor: '#000000'
        },
        headerTintColor: '#fff',
    };

    state = {
        title: "",
        text: "",
    };

    getFolderId = () => this.props.navigation.state.params.folderId;

    saveNote = () => {
        if (!this.state.title || !this.state.text) {
            alert('title and text have not to be empty')
        } else {
            const note = {
                folderId: this.getFolderId(),
                title: this.state.title,
                text: this.state.text,
            };
            this.props.addNote(note);
            this.props.navigation.goBack();
        }
    };

    onChangeTitle = text => {
      this.setState({text: text})
    };

    onChangeText = text => {
        this.setState({title: text})
    };

    render() {
        return (
            <Container>
                <View>
                    <View style={styles.Header}>
                        <View style={styles.Title}>
                            <TextInput
                                style={styles.TitleTextInput}
                                multiline={true}
                                placeholder='Title'
                                onChangeText={this.onChangeTitle}/>
                        </View>
                    </View>
                    <Divider/>
                    <View style={styles.NotePad}>
                        <TextInput
                            style={styles.Note}
                            multiline={true}
                            placeholder='New Note...'
                            onChangeText={this.onChangeText}/>
                    </View>
                </View>
                <Fab
                    containerStyle={{}}
                    style={{backgroundColor: '#5067FF'}}
                    position="bottomRight"
                    onPress={this.saveNote}>
                    <Icon name="save"/>
                </Fab>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote: (note) => dispatch(addNote(note))
    }
};

export default connect(null, mapDispatchToProps)(EditNoteScreen);