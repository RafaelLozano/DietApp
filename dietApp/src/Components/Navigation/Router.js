import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../Screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import TabNavigator from './TabNavigator/TabNavigator';
const Stack = createStackNavigator();
const Router = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"getStarted"}
                    component={WelcomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Login"}
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Home"}
                    component={TabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

