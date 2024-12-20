import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";
import SignupPage from "./screens/Signup";
import UserPage from "./screens/UserPage";
import Check from "./screens/Check";
import YourNutrisian from "./screens/Nutrision";
import YourMood from "./screens/Mood";
import EnergiLevel from "./screens/Energi";
import Overview from "./screens/Overview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="UserPage" component={UserPage} />
        <Stack.Screen name="Check" component={Check} />
        <Stack.Screen name="Nutrisian" component={YourNutrisian} />
        <Stack.Screen name="Mood" component={YourMood} />
        <Stack.Screen name="Energi" component={EnergiLevel} />
        <Stack.Screen name="Overview" component={Overview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
