import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Saved from "../screens/Saved";

const Stack = createStackNavigator();

export default function SavedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Saved}
        options={{ title: "Guardados" }}
      />
    </Stack.Navigator>
  );
}
