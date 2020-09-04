import React from "react";
import { Header } from "react-native-elements";

export const StaticHeader = ({ title, leftCompnent = false }) => {
  return (
    <Header
      backgroundColor="white"
      containerStyle={{ height: 55, borderBottomWidth: 0, width: "100%" }}
      centerComponent={{
        text: `${title}`,
        style: {
          color: "#000",
          fontSize: 20,
          marginTop: -38,
          fontWeight: "bold",
        },
      }}
      leftContainerStyle={!leftCompnent ? false : { marginTop: -45 }}
      leftComponent={
        !leftCompnent
          ? false
          : {
              icon: "arrow-left",
              color: "#000",
              onPress: () => leftCompnent,
            }
      }
    />
  );
};
