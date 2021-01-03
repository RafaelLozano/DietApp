import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import HomeScreen from '../../../Screens/HomeScreen/HomeScreen'
import { color } from 'react-native-reanimated';
import DetailScreen from '../../../Screens/DetailScreen/DetailScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        // <NavigationContainer>
            <Tab.Navigator 
            
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor:'white',
                labelPosition:'beside-icon',
                activeBackgroundColor:'#58be75',
                style: {
                        borderWidth: 0.5,
                        
                        backgroundColor: 'white',
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        
                        borderColor: 'transparent',
                        overflow: 'hidden',
                    }
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
                <Tab.Screen
                    name={"Profile"}
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name={"user-circle"} size={25} color={'#e5e5e5'} />
                        )
                    }}
                />
                <Tab.Screen
                    name={"Goal"}
                    component={DetailScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name={"md-ribbon-sharp"} size={25} color={'#e5e5e5'} />
                        )
                    }}
                />
                <Tab.Screen
                    name={"settings"}
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name={"settings-sharp"} size={25} color={'#e5e5e5'} />
                        )
                    }}
                />
            </Tab.Navigator>
        // </NavigationContainer>
    )
}

export default TabNavigator
