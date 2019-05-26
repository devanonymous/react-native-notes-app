import React from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $buttonColor: '#00358c',
    $textColor: '#fff',
    $buttonColorUnderlay: '#549ef2',
    button: {
        paddingVertical: 24,
        paddingHorizontal: 35,
        borderRadius: 400,
        backgroundColor: '$buttonColor',
        elevation: 8
    },
    text: {
        color: '$textColor',
        fontSize: 30
    }
});

export const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}