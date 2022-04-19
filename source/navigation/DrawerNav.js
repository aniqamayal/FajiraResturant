import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from "../navigation/Custom_Drawer"
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Dashboard from '../views/main/Dashboard';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <Drawer.Navigator drawerContent={
      (props) => (
        <CustomDrawer {...props}/> )}
       screenOptions={{headerShown: false,swipeEnabled:true,initialRouteName:"Menu",
         }}>
            <Drawer.Screen name="Home" component={Dashboard}
        options={{
          title: 'Menu',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="bike" size={size} color={focused ? '#FCCE03' : '#000'}
            />
            
          ),
        }}
      />
        {/* <Drawer.Screen name="Arrived" component={Payment_Option}
        options={{
          title: 'PAYMENT',
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="payment" size={size} color={focused ? '#FCCE03' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Promcode_List" component={Promcode_List}
        options={{
          title: 'PROMOCODE',
          drawerIcon: ({ focused, size }) => (
            <FontAwesome name="qrcode" size={size} color={focused ? '#FCCE03' : '#000'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Rating" component={Support}
        options={{
          title: 'SUPPORT',
          drawerIcon: ({ focused, size }) => (
            <FontAwesome name="headphones" size={size} color={focused ? '#FCCE03' : '#000'}
            />
          ),
        }}
      />      */}
      </Drawer.Navigator>
  );
}
