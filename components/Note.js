import React from 'react';
import {
    View,
    Dimensions,
    Text, Alert
} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {Button} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from "react-redux";

import {removeNote} from "../redux/actions/notesActions";

const styles = EStyleSheet.create({
    NoteCard: {
        zIndex: 1,
        backgroundColor: '#1a1823',
        width: Math.round(Dimensions.get('window').width) - 40,
        height: 200,
        marginTop: 3,
        borderRadius: 30,
        borderWidth: 7.5,
        borderColor: '#252333'
    },
    Header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 3,
        paddingLeft: 3,
        height: 50,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#00358c'
    },
    Date: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 3,
        paddingLeft: 3,
        height: 50,
    },

    Title: {
        marginLeft: 7,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    Buttons: {
        flexDirection: "row",
    },
    Text: {
        marginLeft: 3,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    NotePad: {
        margin: 10,
        width: Math.round(Dimensions.get('window').width) - 75,
        height: Math.round(Dimensions.get('window').height) - 135,

        padding: 3
    },
    Note: {
        color: '#fff',
        flex: 1,
        fontSize: 16,
        textAlignVertical: 'top'
    },
});

const Note = ({navigation, id, note, removeNote, folderId}) => {
    const onEditButtonPress = () => {
        navigation.navigate('EditNote', {note, id, folderId})
    };


    const deleteNote = () => {
        Alert.alert(
            'Remove note',
            'Are you sure?',
            [
                {text: 'Cancel', onPress: () => {}},
                {text: 'Yes', onPress: () =>  removeNote(id)},
            ],
            {cancelable: false},
        );
    };

    return (
        <View>
            <View style={styles.Date}>
                <Text style={styles.Text}>Date: {note.date}</Text>
            </View>
            <View style={styles.NoteCard}>

                <View style={styles.Header}>
                    <Text style={styles.Title}>{note.title || 'missing'}</Text>
                    <View style={styles.Buttons}>
                        <Button
                            onPress={onEditButtonPress}
                            icon={<Ionicons name="md-create" size={32} color="white"/>}
                            type="clear"
                        />

                        <Button
                            onPress={deleteNote}
                            icon={<Ionicons name="ios-trash" size={32} color="white"/>}
                            type="clear"
                        />
                    </View>
                </View>
                <View style={styles.NotePad}>
                    <Text
                        style={styles.Note}
                        multiline={true}>
                        {note.text}
                    </Text>
                </View>
            </View>
        </View>
    )
};

const mapDispatchToProps = dispatch => ({
    removeNote: id => dispatch(removeNote(id)),
});

export default connect(null, mapDispatchToProps)(Note);