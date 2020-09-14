import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/Register";
import AuthLogin from "../screens/AuthLogin";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={AuthLogin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
