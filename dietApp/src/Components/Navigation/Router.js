import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../Screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';

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
                

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

