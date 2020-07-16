import React from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { Layout, Input } from "@ui-kitten/components";

export const InputNumber = ({ value, onUp, onDown }) => (
  <Layout
    style={{
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "transparent",
    }}
  >
    <TouchableOpacity onPress={onUp}>
      <Icon type="ionicon" name={"md-arrow-dropup"} size={30} />
    </TouchableOpacity>
    <Input value={`${value}`} />
    <TouchableOpacity onPress={onDown}>
      <Icon type="ionicon" name={"md-arrow-dropdown"} size={30} />
    </TouchableOpacity>
  </Layout>
);

export const ShowPasswordControl = ({ show, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon
      type="material-community"
      name={show ? "eye-outline" : "eye-off-outline"}
      size={26}
    />
  </TouchableOpacity>
);
