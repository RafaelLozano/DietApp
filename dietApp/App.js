/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './src/Components/Card/card';
import Router from './src/Components/Navigation/Router';
import TabNavigator from './src/Components/Navigation/TabNavigator/TabNavigator';

import DetailScreen from './src/Screens/DetailScreen/DetailScreen';

import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen/WelcomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <WelcomeScreen/> */}
      <Router/> 
      {/* <TabNavigator/> */}
      {/* <LoginScreen/> */}
      {/* <HomeScreen/> */}
      {/* <DetailScreen/> */}
      {/* <Post item={dataBreakfast}></Post> */}
      
    </>
  );
};


export default App;
