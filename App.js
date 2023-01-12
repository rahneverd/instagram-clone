import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import * as firebase from 'firebase'
import { initializeApp, getApps } from 'firebase/app'

import Landing from './components/auth/Landing';
import Register from './components/auth/Register'
import { firebaseConfig } from './firebase'

const app = initializeApp(firebaseConfig)

// const app = initializeApp(firebaseConfig)

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}