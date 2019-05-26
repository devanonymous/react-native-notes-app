import React from 'react';
import {
    View,
    Dimensions,
    Text,
    TextInput
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    NoteCard: {
        zIndex: 1,
        backgroundColor: '#1a1823',
        width: Math.round(Dimensions.get('window').width) - 40,
        height: 200,
        marginTop: 30,
        borderRadius: 30,
        borderWidth: 7.5,
        borderColor: '#252333'
    },
    Header: {
        height: 50,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#00358c'
    },
    Title: {
        marginTop: 'auto',
        marginLeft: 20,
        marginBottom: 'auto'
    },
    Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    NotePad: {
        margin: 10,
        width: Math.round(Dimensions.get('window').width) - 75,
        height: Math.round(Dimensions.get('window').height) - 135,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 10
    },
    Note: {
        color: '#fff',
        flex: 1,
        fontSize: 16,
        textAlignVertical: 'top'
    }
});

export const Note = ({ text, onPress, onChangeText }) => {

    return (
        <View style={styles.NoteCard}>
            <View style={styles.Header}>
                <View style={styles.Title}>
                    <Text style={styles.Text} onPress={onPress}>My true love </Text>
                </View>
            </View>
            <View style={styles.NotePad}>
                <Text
                    style={styles.Note}
                    multiline={true}>{text}</Text>
            </View>
        </View>
    )
}