import React from 'react';
import { Text, View, Image, } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../HomeScreen/homeScreen'

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
      <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
       >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: focused ? 'orange' : '#FFFFFF',
                }}>
                {/* <Image
                  source={icons.home_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#FFFFFF' : '#FFFFFF',
                  }}
                /> */}
                <Text
                  style={{
                    fontSize: 11,
                    paddingTop: 3,
                    color: focused ?  '#FFFFFF': '#FFFFFF',
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Homie"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: focused ? 'orange' : '#FFFFFF',
                }}>
                {/* <Image
                  source={icons.home_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#FFFFFF' : '#FFFFFF',
                  }}
                /> */}
                <Text
                  style={{
                    fontSize: 11,
                    paddingTop: 3,
                    color: focused ?  '#FFFFFF': '#FFFFFF',
                  }}>
                  Home 2
                </Text>
              </View>
            ),
          }}
        />
         
         
     
      </Tab.Navigator>
    );
}
export default BottomTabs;