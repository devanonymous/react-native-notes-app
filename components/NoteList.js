import React from 'react';
import {
    View,
    Dimensions,
    Text,
    TextInput
} from 'react-native';

import Note from './Note';

export const NoteList = ({ notes, folderId }) => {
    const list = notes.map((note, index) => {
        if (folderId === note.folderId) {
            return (
                <View key={index.toString()}>
                    <Note id={index} note={note}/>
                </View>
            )
        }
    });
    return (
        <View>
            {list}
        </View>
    )
};