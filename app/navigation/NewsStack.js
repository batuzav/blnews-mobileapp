import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import News from "../screens/News";
import NewsDetails from "../screens/NewsDetails";

const Stack = createStackNavigator();

export default function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="news"
        component={News}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="newsDetails"
        component={NewsDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
