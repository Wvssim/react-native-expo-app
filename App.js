
// Nouvelle structure de MovieApp (Expo + React Navigation)
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./src/screens/Login";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import Parametres from "./src/screens/Parametres";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack pour chaque onglet principal
import { Ionicons } from '@expo/vector-icons';

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1976d2',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0.5, borderTopColor: '#eee', height: 60 },
        tabBarLabelStyle: { fontSize: 13, marginBottom: 6 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Accueil') iconName = 'home';
          else if (route.name === 'Recherche') iconName = 'search';
          else if (route.name === 'Favoris') iconName = 'star';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Recherche" component={SearchScreen} />
      <Tab.Screen name="Favoris" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

// Navigation principale avec login conditionnel et navigation vers Details
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Parametres" component={Parametres} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
