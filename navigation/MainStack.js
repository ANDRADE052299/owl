import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text} from 'react-native'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
 
const Stack=createNativeStackNavigator()
   
const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Home'
                    component={Home}
                />
                <Stack.Screen 
                    name='Profile'
                    component={Profile}
                />
                <Stack.Screen 
                    name='Cart'
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack