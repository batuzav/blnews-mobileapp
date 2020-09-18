import React from "react";
import { Header, Icon } from "react-native-elements";

export const StaticHeader = ({ title = "REY", leftCompnent = false }) => {
  console.log("leftComponent", leftCompnent);
  return (
    <Header
      backgroundColor="white"
      containerStyle={{
        height: 55,
        borderBottomWidth: 0,
        width: "100%",
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
      centerComponent={{
        text: `${title}`,
        style: {
          color: "#000",
          fontSize: 20,
          fontWeight: "bold",
          top: -27,
        },
      }}
      leftContainerStyle={!leftCompnent ? false : { top: -27 }}
      leftComponent={
        !leftCompnent ? (
          false
        ) : (
          <Icon
            name="arrow-left"
            type="material-community"
            color="#000"
            onPress={leftCompnent}
          />
        )
      }
    />
  );
};
