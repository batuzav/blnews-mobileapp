import React, { Component } from "react";
import { Text } from "@ui-kitten/components";

export default (props) => (
  <Text {...props} style={[{ fontFamily: "body-logic" }, props.style]}>
    {props.children}
  </Text>
);
