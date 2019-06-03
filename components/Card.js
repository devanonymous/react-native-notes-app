import React from 'react';
import {
    View,
    Dimensions,
    Text,
    TextInput
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Divider} from "react-native-elements";

const styles = EStyleSheet.create({
    Card: {
        zIndex: 1,
        backgroundColor: '#1a1823',
        width: Math.round(Dimensions.get('window').width) - 40,
        height: Math.round(Dimensions.get('window').height) - 40,
        marginTop: 30,
        borderRadius: 30,
        borderWidth: 7.5,
        borderColor: '#252333'
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#252333'
    },
    Save: {
        // marginTop: 'auto',
        // marginLeft: 'auto',
        // marginBottom: 'auto'
    },
    Text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#166bcc'
    },
    NotePad: {
        // margin: 10,
        width: Math.round(Dimensions.get('window').width) - 75,
        height: Math.round(Dimensions.get('window').height) - 135,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 5
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

export const Card = ({text, onPress, onChangeText, close}) => {

    return (
        <View style={styles.Card}>
            <View style={styles.Header}>
                <View style={styles.Save}>
                    <Text style={styles.Text} onPress={close}>Cancel </Text>
                </View>
                <View style={styles.Save}>
                    <Text style={styles.Text} onPress={onPress}>Save </Text>
                </View>
            </View>
            <View style={styles.Title}>
                <TextInput
                    style={styles.TitleTextInput}
                    multiline={true}
                    placeholder='Title'
                    onChangeText={onChangeText}/>
            </View>
            <Divider/>
            <View style={styles.NotePad}>
                <TextInput
                    style={styles.Note}
                    multiline={true}
                    placeholder='New Note...'
                    onChangeText={onChangeText}/>
            </View>
        </View>
    )
};