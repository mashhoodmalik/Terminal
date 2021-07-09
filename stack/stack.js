import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from '../tabs/tabs'
import ManageCars from '../ManageCars/manageCars'
import CarDetails from '../ManageCars/carDetails';
import AddCar from '../ManageCars/addCar';
import ManageCarBrands from '../ManageCars/manageCarBrands';


import Drawer from '../drawer/drawer';
import AddCars from '../AddCars/addCars'
const Stack = createStackNavigator();
const StackNavigation=()=>{
    return(
<Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
 
      <Stack.Screen
        name="Home"
        component={Drawer}
      />
      <Stack.Screen
        name="manageCars"
        component={ManageCars}
      />
      <Stack.Screen
        name="carDetails"
        component={CarDetails}
      />
       <Stack.Screen
        name="addCar"
        component={AddCar}
      />
       <Stack.Screen
        name="manageCarBrand"
        component={ManageCarBrands}
      />
       <Stack.Screen
        name="addcars"
        component={AddCars}
      />
      
      
      
       
    </Stack.Navigator>
    )
}
export default StackNavigation;