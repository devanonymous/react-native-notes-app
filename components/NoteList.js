import React from 'react';
import {
    View,
} from 'react-native';

import Note from './Note';

export const NoteList = ({navigation, notes, folderId}) => {

    const list = notes.map((note, index) => {
        if (folderId === note.folderId) {
            return (
                <View key={index.toString()}>
                        <Note navigation={navigation} folderId={folderId} id={index} note={note}/>
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