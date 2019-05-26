import React from 'react';
import {
    View,
    Dimensions,
    Text,
    TextInput
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Note } from './Note';

export const NoteList = ({ notes }) => {
    const list = notes.map(note => {
        return (
            <View key={note.id}>
                <Note text={note.content} />
            </View>
        )
    })
    return (
        <View>
            {list}
        </View>
    )
}