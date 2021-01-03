import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../../../Screens/HomeScreen/HomeScreen'
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
        }}>
            <Tab.Screen
                name={"Home"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"md-home-sharp"} size={25} color={'#e5e5e5'} />
                    )

                }}
            />
            
        </Tab.Navigator>
    )
}

export default TabNavigator
