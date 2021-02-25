import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer';

import customSideBarMenu from './components/customSideBarMenu'
import { BottomNavigator } from './components/BottomNavigator';

import LoginScreen from './screens/LoginScreen'
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App() {
  return (
      <AppContainer/>
  );
}

 

 const SwitchNavigator = createSwitchNavigator({
    
     AppDrawerNavigator:AppDrawerNavigator,
      LoginScreen:LoginScreen,
  
 })

 const AppContainer = createAppContainer(SwitchNavigator);


