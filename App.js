import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import FoldersScreen from "./screens/FoldersScreen";
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';
import {Provider} from "react-redux";

const RootStack = createStackNavigator(
    {
        Home: FoldersScreen,
        // Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
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