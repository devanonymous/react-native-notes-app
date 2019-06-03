import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        // Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

export default App;