import React from 'react';
import {
    View,
    Dimensions,
    Text,
    TextInput
} from 'react-native';

import { Note } from './Note';

export const NoteList = ({ notes }) => {
    const list = notes.map((note, index) => {
        return (
            <View key={index.toString()}>
                <Note note={note} />
            </View>
        )
    });
    return (
        <View>
            {list}
        </View>
    )
};