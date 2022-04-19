import React, { Component } from 'react'
import { Provider } from "react-redux"
import MyReducers from '../data/local/reducers/MyReducers'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../views/auth/Login"
import Reset_Password from '../views/auth/Reset_Password';
import New_Password from '../views/auth/New_Password';
import Dashboard from "../views/main/Dashboard"
import Order_In_Queue from '../views/main/Order_In_Queue';
import Top_Nav from './Top_Nav';
import Profile_Setting from "../views/main/Profile_Setting"
import DrawerNav from "../navigation/DrawerNav"
const Stack = createNativeStackNavigator();

class Navigator extends Component {

  render() {
    return (
      <Provider store={MyReducers}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Reset_Password" component={Reset_Password} />
            <Stack.Screen name="New_Password" component={New_Password} />
            <Stack.Screen name="DrawerNav" component={DrawerNav} />
            <Stack.Screen name="Profile_Setting" component={Profile_Setting} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Order_In_Queue" component={Order_In_Queue} />
            <Stack.Screen name="Top_Nav" component={Top_Nav} />
           
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
export default Navigator;