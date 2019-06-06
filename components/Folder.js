import React from 'react';
import {Text, View, TouchableWithoutFeedback, TextInput} from "react-native";
import {Button} from "react-native-elements";

import {Ionicons} from '@expo/vector-icons'
import {connect} from "react-redux";
import {removeFolder, updateFolder} from "../redux/actions/foldersActions";

class Folder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRenaming: false,
            text: props.item.text
        };
    }


    /**
     * @param { string } folderId uuid
     */
    onFolderPress = (folderId) => () => {
        this.props.navigation.navigate('Notes', {folderId})
    };

    onRenameButtonPress = () => {
        this.setState({isRenaming: true});
    };

    /**
     * @param {string} text
     */
    changeTextHandler = (text) => {
        this.setState({text});
    };

    updateFolderName = () => {
        this.props.updateFolder(this.props.id, this.state.text);
        this.setState({
            isRenaming: false,
            text: this.state.text
        })
    };

    renderFolder = () => (
        <View style={this.props.styles.listItemCont}>
            <Text style={this.props.styles.listItem}>
                {this.props.item.text}
            </Text>

            <Button
                onPress={this.onRenameButtonPress}
                icon={<Ionicons name="md-create" size={32} color="white"/>}
                type="clear"
            />

            <Button
                onPress={() => this.props.removeFolder(this.props.id)}
                icon={<Ionicons name="ios-trash" size={32} color="white"/>}
                type="clear"
            />
        </View>
    );

    renderRenamingFolder = () => (
        <View style={this.props.styles.listItemCont}>
            <TextInput
                style={this.props.styles.listItem} value={this.state.text}
                onChangeText={this.changeTextHandler}
                placeholder="Enter folder name"
                onSubmitEditing={this.updateFolderName}
                returnKeyType="done"
                returnKeyLabel="done"
            />

            <Button
                onPress={this.updateFolderName}
                icon={<Ionicons name="ios-done-all" size={32} color="white"/>}
                type="clear"
            />
        </View>
    );

    render () {
        const {item, styles} = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.onFolderPress(item.id)}>
                <View>
                    {this.state.isRenaming ? this.renderRenamingFolder() : this.renderFolder()}
                    <View style={styles.hr}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFolder: id => dispatch(removeFolder(id)),
        updateFolder: (id, newFolderName) => dispatch(updateFolder(id, newFolderName))
    }
};

export default connect(null, mapDispatchToProps)(Folder);