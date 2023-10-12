import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons'

import Login from './app/screens/Login';
import Home from './app/screens/Home';
import Friend from './app/screens/Friend';
import Shop from './app/screens/Shop';
import Log from './app/screens/Log';
import Quest from './app/screens/Quest';

const AppStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function AppLayout() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let rn = route.name;

          if (rn === 'Home') {
            return <Ionicons name="home" size={size} color={color}/>
          } else if (rn === 'Friend') {
            return <Ionicons name="people" size={size} color={color}/>
          } else if (rn === 'Shop') {
            return <Ionicons name="cart" size={size} color={color}/>
          } else if (rn === 'Log') {
            return <Ionicons name="camera" size={size} color={color}/>
          }
        },
      })}>
    
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name='Friend' component={Friend} options={{ headerShown: false }}/>
      <Tab.Screen name='Shop' component={Shop} options={{ headerShown: false }}/>
      <Tab.Screen name='Log' component={Log} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  // USERS
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    })
  })

  // FONTS
  const [fontsLoaded] = useFonts({
    'Retro_Gaming': require('./assets/fonts/Retro_Gaming.ttf'),
  });

  if (!fontsLoaded) {
    // Fonts are still loading, return a loading indicator or null
    return null;
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName='Login'>
        {user ? (
          <>
            <AppStack.Screen name='AppLayout' component={AppLayout} options={{ headerShown: false }}/>
            <AppStack.Screen name='Quest' component={Quest} options={{ headerShown: false }}/>
          </>
        ) : (
          <AppStack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
