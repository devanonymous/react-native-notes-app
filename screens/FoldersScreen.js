import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput
} from "react-native";
import Folder from "../components/Folder";
import {connect} from "react-redux";
import {addFolder} from "../redux/actions/foldersActions";

const viewPadding = 10;

class FoldersScreen extends Component {
    static navigationOptions = {
        title: 'Folders',
        headerStyle: {
            backgroundColor: '#000000'
        },
        headerTintColor: '#fff',
    };

    state = {text: ''};

    changeTextHandler = (text) => {
        this.setState({text});
    };

    addTask = () => {
        if (this.state.text) {
            this.props.addFolder(this.state.text);
            this.setState({text:''});
        }
    };



    render() {
        const {folders} = this.props;
        return (
            <View style={[styles.container]}>
                <Text>We have {this.props.folders.length} elements</Text>
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
                    data={folders}
                    renderItem={({item, index}) => <Folder navigation={this.props.navigation} id={index} item={item} styles={styles}/>

                    }
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        folders: state.folders,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addFolder: (name) => dispatch(addFolder(name))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FoldersScreen);

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
        flexGrow: 1,
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
        color: "gray",
        borderWidth: 1,
        width: "100%"
    }
});
