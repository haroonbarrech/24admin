import React, {useEffect, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigator/navigator';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import TabNavigator from './src/navigator/tabnavigator';
import { AntDesign } from '@expo/vector-icons';
import {store} from './src/store/store';
import { Provider } from 'react-redux';

export default function App() {

  const myFont = {
    'clibri' : require('./assets/fonts/Roboto-Bold.ttf')
  }
  const [fontsLoaded] = Font.useFonts(myFont);


// TO Prevent the splash screen....
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    
      
      
    }
    prepare();
  }, []);

  // check if font is loaded.......
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
    <NavigationContainer  onReady={onLayoutRootView} >
    <Navigator/>
  </NavigationContainer>
  </Provider>
    

  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});