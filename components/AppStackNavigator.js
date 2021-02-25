import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen'
import UserDetailScreen from './screens/UserDetailScreen';

import LoginScreen from '../screens/LoginScreen'

export const stackNavigator = createStackNavigator({
  Donationlist:{
      screen:HomeScreen,
      navigationOptions:{
        headerShown:false
      }
  },

  UserDetails:{
      screen:UserDetailScreen,
      navigationOptions:{
        headerShown:false
      }
  }

})

