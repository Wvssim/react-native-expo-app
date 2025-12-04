import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import SearchScreen from "./src/screens/SearchScreen";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Accueil" }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Recherche" }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: "Favoris" }}
      />

      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Profil" }}
      />
    </Tab.Navigator>
  );
}

// --- STACK NAVIGATOR ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Onglets principaux */}
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }} // Cache le header du Stack
        />

        {/* Page Details (hors onglets) */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Détails du film" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
