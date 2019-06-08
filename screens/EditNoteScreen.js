import React from 'react'
import EStyleSheet from "react-native-extended-stylesheet";
import {Dimensions, Text, TextInput, View} from "react-native";
import {Divider} from "react-native-elements";
import {Fab, Icon, Container} from "native-base";
import {addNote, updateNote} from "../redux/actions/notesActions";
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
        marginLeft: 4,
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
        color: '#fff',
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

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
        };
    }


    isEditing = () => !!this.props.navigation.state.params.note;

    getId = () => this.props.navigation.state.params.id;

    componentDidMount() {
        if (this.isEditing()) {
            const note = this.props.navigation.state.params.note;
            this.setState({
                title: note.title,
                text: note.text
            })
        }
    }

    getFolderId = () => this.props.navigation.state.params.folderId;

    getDate = () => {
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();

        return `${date}.${month}.${year}`
    };

    saveNote = () => {
        if (!this.state.title || !this.state.text) {
            alert('title and text have not to be empty')
        } else {
            const note = {
                folderId: this.getFolderId(),
                title: this.state.title,
                text: this.state.text,
                date: this.getDate()
            };
            if (this.isEditing()) {
                this.props.updateNote(this.getId(), note)
            } else {
                this.props.addNote(note);
            }
            this.props.navigation.goBack();
        }
    };

    onChangeTitle = text => {
        this.setState({title: text})
    };

    onChangeText = text => {
        this.setState({text: text})
    };

    render() {
        return (
            <Container>
                <View>
                    <View style={styles.Header}>
                        <View style={styles.Title}>
                            <TextInput
                                style={styles.TitleTextInput}
                                multiline={false}
                                placeholder='Title'
                                value={this.state.title}
                                onChangeText={this.onChangeTitle}/>
                        </View>
                    </View>
                    <Divider/>
                    <View style={styles.NotePad}>
                        <TextInput
                            style={styles.Note}
                            multiline={true}
                            placeholder='New Note...'
                            value={this.state.text}
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
        addNote: (note) => dispatch(addNote(note)),
        updateNote: (id, note) => dispatch(updateNote(id,note))
    }
};

export default connect(null, mapDispatchToProps)(EditNoteScreen);