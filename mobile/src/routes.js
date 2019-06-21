import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Image } from 'react-native';

import Feed from './screens/Feed'
import New from './screens/New'

import logo from './assets/logo.png'

const StackNavigator = createStackNavigator({
    Feed,
    New
}, {
    initialRouteName: "Feed",
    defaultNavigationOptions: {
        henderTintColor: '#000',
        headerTitle: <Image source={logo} />,
        headerBackTitle: null,
    },
    headerLayoutPreset: 'center',
    mode: 'modal'
});

export default createAppContainer(StackNavigator);
