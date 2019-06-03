import React from 'react';
import {Text, View, TouchableWithoutFeedback} from "react-native";
import {Button} from "react-native-elements";

import {Ionicons} from '@expo/vector-icons'

const Folder = (props) => {
    const {item, styles} = props;

    return (
        <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
            <View>
                <View style={styles.listItemCont}>
                    <Text style={styles.listItem}>
                        {item.text}
                    </Text>
                    <Button
                        icon={<Ionicons name="ios-trash" size={32} color="white"/>}
                        type="clear"
                    />
                </View>
                <View style={styles.hr}/>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default Folder;