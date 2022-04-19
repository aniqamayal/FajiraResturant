import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Order_Cancelled from '../views/main/Order_Cancelled';
import Order_Completed from '../views/main/Order_Completed';
import Order_In_Queue from '../views/main/Order_In_Queue';
const Tab = createMaterialTopTabNavigator();

export default function Top_Nav() {
  return (

      <Tab.Navigator>
        <Tab.Screen name="In Queue" component={Order_In_Queue} />
        <Tab.Screen name="Completed" component={Order_Completed} />
        <Tab.Screen name="Cancelled" component={Order_Cancelled} />
      </Tab.Navigator>

  );
}