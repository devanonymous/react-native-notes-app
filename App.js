import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import NotesScreen from "./screens/NotesScreen";
import FoldersScreen from "./screens/FoldersScreen";
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';
import {Provider} from "react-redux";
import EditNoteScreen from "./screens/EditNoteScreen";
import LogInScreen from "./screens/LogInScreen";

const RootStack = createStackNavigator(
    {
        LogIn: LogInScreen,
        Folders: FoldersScreen,
        Notes: NotesScreen,
        EditNote: EditNoteScreen
    },
    {
        initialRouteName: 'LogIn',
    }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppContainer/>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;