import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer';

import customSideBarMenu from './customSideBarMenu'
import { BottomNavigator } from './BottomNavigator';
import  settings  from '../screens/settings';

import LoginScreen from '../screens/LoginScreen'
import MyBarters from '../screens/MyBarters'
import NotificationScreen from '../screens/NotificationScreen'

export const AppDrawerNavigator = createDrawerNavigator(
 {
   Home:{screen:BottomNavigator},
   Settings:{screen:settings},
   MyBarters:{screen:MyBarters},
   Notifications:{screen:NotificationScreen},
   
 },
 {
        contentComponent: customSideBarMenu
    },
    {
        initialRouteName : "Home"
    }
 )