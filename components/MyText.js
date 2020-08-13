import React from "react";
import { Text } from "react-native";

export const MyText = (props) => {
  return (
    <Text {...props} style={[{ fontFamily: "body-logic" }, props.style]}>
      {props.children}
    </Text>
  );
};

export const H1 = (props) => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "body-logic",
          fontSize: 24,
        },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};
