import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { backgroundWhite } from './Modules/constants';
import VideoDisplayPage from './Modules/Pages/VideoDisplayPage';
import WelcomePage from './Modules/Pages/WelcomePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="GoLive" options={{ title: 'Go Live' }} component={VideoDisplayPage} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
