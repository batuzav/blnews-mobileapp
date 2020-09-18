import React from "react";
import { light as theme } from "@eva-design/eva";
import {
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { Layout, Text, Card } from "@ui-kitten/components";
import { Icon } from "react-native-elements";
import { H1 } from "../components/MyText";

export const Item = ({ img, action, title, subtitle }) => {
  const textFotnt = Platform.OS === "ios" ? 14 : 14;
  console.log("Title: ", title);
  return (
    <TouchableOpacity onPress={action}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 5,
          paddingVertical: 10,
          backgroundColor: "white",
          height: Dimensions.get("window").height / 4,
        }}
      >
        {img ? (
          <Image
            style={{
              width: 100,
              height: 100,
              marginLeft: 15,
              borderRadius: 400 / 2,
              alignSelf: "center",
            }}
            source={{ uri: img }}
          />
        ) : (
          false
        )}
        <View
          style={{
            justifyContent: "flex-start",
            marginLeft: 10,
            width: "auto",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <H1>{title}</H1>
          </View>
          <Layout
            style={{
              borderRadius: 9,
              justifyContent: "flex-end",
              marginTop: 15,
            }}
          >
            <Text
              style={{ color: theme["color-basic-600"], fontSize: textFotnt }}
            >
              {subtitle}
            </Text>
          </Layout>
          <Layout
            style={{
              width: 80,
              borderRadius: 9,
              backgroundColor: "#ff7f2f",
              paddingHorizontal: 10,
              marginRight: 15,
              alignSelf: "flex-end",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: textFotnt,
              }}
            >
              Leer Más
            </Text>
          </Layout>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Detail = ({ data }) => {
  return (
    <ScrollView style={{ backgroundColor: "#ff7f2fba" }}>
      {data.img ? (
        <Image
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
          source={{ uri: data.img }}
        />
      ) : (
        <Layout
          style={{
            borderRadius: 6,
            backgroundColor: theme["color-basic-300"],
            height: 120,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            reverse
            name="camera"
            type="material-community"
            color="#ff7f2f"
            style={{ marginLeft: 40, textAlign: "center" }}
          />
        </Layout>
      )}

      <Layout
        style={{ flexDirection: "column", backgroundColor: "transparent" }}
      >
        <Text style={styles.title} category={"h4"}>
          {data.title}
        </Text>
        <Text style={styles.p}>{data.description}</Text>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "500",
    margin: 20,
    color: "white",
  },
  p: {
    textAlign: "justify",
    fontSize: 20,
    margin: 20,
    color: "white",
  },
  infoContainer: {
    margin: 10,
    height: "100%",
  },
});
