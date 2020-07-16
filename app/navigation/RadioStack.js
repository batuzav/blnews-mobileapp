import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Radio from "../screens/Radio";

const Stack = createStackNavigator();

export default function RadioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="radio"
        component={Radio}
        options={{ title: "MyBL News Radio" }}
      />
    </Stack.Navigator>
  );
}
