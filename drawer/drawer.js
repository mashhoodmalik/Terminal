import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContents from '../drawerScreen/drawerScreen';
import BottomTabs from '../tabs/tabs';
import Home from '../HomeScreen/homeScreen'
const Drawer = createDrawerNavigator();
const drawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContents {...props} />}>
      <Drawer.Screen name="Drawer" drawerPosition="left" component={Home} />
    </Drawer.Navigator>
  );
};

export default drawer;
