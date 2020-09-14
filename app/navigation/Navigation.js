import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import AuthStack from "./AuthStack";

import NewsStack from "./NewsStack";
import AccountStack from "./AccountStack";
import RadioStack from "./RadioStack";
import ContactStack from "./ContactStack";

import LoadingView from "../screens/AuthLogin";
import AuthLoading from "../screens/AuthLoading";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function InnerNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="news"
      tabBarOptions={{
        inactiveTintColor: "#7d7d7d",
        activeTintColor: "#ff7e2b",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen
        name="news"
        component={NewsStack}
        options={{ title: "Noticias" }}
      />
      <Tab.Screen
        name="radio"
        component={RadioStack}
        options={{ title: "Radio" }}
      />
      <Tab.Screen
        name="contact"
        component={ContactStack}
        options={{ title: "Contáctanos" }}
      />
      <Tab.Screen
        name="account"
        component={AccountStack}
        options={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "news":
      iconName = "calendar-text-outline";
      break;
    case "radio":
      iconName = "radio";
      break;
    case "contact":
      iconName = "phone";
      break;
    case "account":
      iconName = "account";
      break;

    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={AuthLoading}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
        <Stack.Screen
          name="Navigation"
          component={InnerNavigation}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
