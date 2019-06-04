import React from 'react';
import {Text, View, TouchableWithoutFeedback} from "react-native";
import {Button} from "react-native-elements";

import {Ionicons} from '@expo/vector-icons'
import {connect} from "react-redux";
import {removeFolder} from "../redux/actions/foldersActions";

const Folder = (props) => {
    const {item, styles, id, dispatch} = props;

    return (
        <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
            <View>
                <View style={styles.listItemCont}>
                    <Text style={styles.listItem}>
                        {item.text}
                    </Text>
                    <Button
                        onPress={() => props.removeFolder(id)}
                        icon={<Ionicons name="ios-trash" size={32} color="white"/>}
                        type="clear"
                    />
                </View>
                <View style={styles.hr}/>
            </View>
        </TouchableWithoutFeedback>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        removeFolder: id => dispatch(removeFolder(id))
    }
};

export default connect(null, mapDispatchToProps)(Folder);