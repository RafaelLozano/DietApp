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
import Router from './src/Components/Navigation/Router';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen/WelcomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <WelcomeScreen/> */}
      <Router/> 
      {/* <LoginScreen/> */}
    </>
  );
};


export default App;
