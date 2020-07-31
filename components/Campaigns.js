import React from "react";
import { light as theme } from "@eva-design/eva";
import {
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Layout, Text, Card } from "@ui-kitten/components";
import { Icon } from "react-native-elements";

export const Item = ({ img, action, title, subtitle }) => {
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
        }}
      >
        {img ? (
          <Image
            style={{
              width: 80,
              height: 80,
              marginLeft: 15,
              borderRadius: 400 / 2,
            }}
            source={{ uri: img }}
          />
        ) : (
          false
        )}
        <View style={{ justifyContent: "center", marginLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Text category={"h5"}>{title}</Text>
          </View>
          <Layout
            style={{
              borderRadius: 9,
              alignItems: "center",
            }}
          >
            <Text style={{ color: theme["color-basic-500"] }}>{subtitle}</Text>
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
