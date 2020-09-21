import React from "react";
import { Header, Icon } from "react-native-elements";

export const StaticHeader = ({
  title = "REY",
  leftCompnent = false,
  backgroundColorHeader = "white",
}) => {
  console.log("leftComponent", leftCompnent);
  return (
    <Header
      backgroundColor={backgroundColorHeader}
      containerStyle={{
        height: 50,
        borderBottomWidth: 0,
        paddingTop: 0,
        width: "100%",
        flex: 0,
        flexDirection: "row",
        justifyContent: "center",
      }}
      centerComponent={{
        text: `${title}`,
        style: {
          color: "#000",
          fontSize: 20,
          fontWeight: "bold",
        },
      }}
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
