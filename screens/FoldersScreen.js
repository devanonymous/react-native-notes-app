import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Platform,
    TextInput
} from "react-native";
import Folder from "../components/Folder";

const viewPadding = 10;

export default class FoldersScreen extends Component {
    static navigationOptions = {
        title: 'Folders',
        headerStyle: {
            backgroundColor: '#000000'
        },
        headerTintColor: '#fff',
    };
    state = {
        tasks: [{text: 'dick'}, {text: 'dick'}, {text: 'dick'},{text: 'dick'},{text: 'dick'}],
        text: ""
    };

    render() {
        return (
            <View
                style={[styles.container, {paddingBottom: this.state.viewMargin}]}
            >
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.changeTextHandler}
                    onSubmitEditing={this.addTask}
                    value={this.state.text}
                    placeholder="Add Folder"
                    returnKeyType="done"
                    returnKeyLabel="done"
                />
                <FlatList
                    style={styles.list}
                    data={this.state.tasks}
                    renderItem={({item, index}) => <Folder onPress={() => alert('fuck')}  item={item} styles={styles} key={index}/>

                    }
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        padding: viewPadding,
        paddingTop: 20
    },
    list: {
        width: "100%"
    },
    listItem: {
        color: "#9c9c9c",
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18
    },
    hr: {
        height: 1,
        backgroundColor: "gray"
    },
    listItemCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput: {
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "gray",
        borderWidth: 1,
        width: "100%"
    }
});
