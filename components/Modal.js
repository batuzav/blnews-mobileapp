import React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import { Layout, Text, Card } from "@ui-kitten/components";
import Modal from "react-native-modal";
import { styles } from "./styles/ContactStyles";
import MyText from "./MyText";

export const ModalCat = ({
  ToggleModal,
  CategorySelected,
  Visible,
  Selected,
}) => {
  const selectedColor = "#ff7f2f";
  const defaultColor = "black";
  return (
    <Layout>
      <Modal
        isVisible={Visible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{
          backgroundColor: "white",
          maxHeight: Dimensions.get("window").height / 2,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => CategorySelected("NUT")}>
            <View style={style.list}>
              <View style={{ justifyContent: "center", marginLeft: 15 }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="food-apple"
                    type="material-community"
                    color={Selected === "NUT" ? selectedColor : defaultColor}
                  />
                  <Text
                    style={[
                      style.fontList,
                      {
                        color:
                          Selected === "NUT" ? selectedColor : defaultColor,
                      },
                    ]}
                  >
                    Nutrición
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => CategorySelected("NOT")}>
            <View style={style.list}>
              <View style={{ justifyContent: "center", marginLeft: 15 }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="newspaper"
                    type="material-community"
                    color={Selected === "NOT" ? selectedColor : defaultColor}
                  />
                  <Text
                    style={[
                      style.fontList,
                      {
                        color:
                          Selected === "NOT" ? selectedColor : defaultColor,
                      },
                    ]}
                  >
                    Noticias
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => CategorySelected("PRO")}>
            <View style={style.list}>
              <View style={{ justifyContent: "center", marginLeft: 15 }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="sale"
                    type="material-community"
                    color={Selected === "PRO" ? selectedColor : defaultColor}
                  />
                  <Text
                    style={[
                      style.fontList,
                      {
                        color:
                          Selected === "PRO" ? selectedColor : defaultColor,
                      },
                    ]}
                  >
                    Promoción
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => CategorySelected("TOD")}>
            <View style={style.list}>
              <View style={{ justifyContent: "center", marginLeft: 15 }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="expand-all"
                    type="material-community"
                    color={Selected === "TOD" ? selectedColor : defaultColor}
                  />
                  <Text
                    style={[
                      style.fontList,
                      {
                        color:
                          Selected === "TOD" ? selectedColor : defaultColor,
                      },
                    ]}
                  >
                    Todos
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <Layout style={{ flex: 0, paddingBottom: 10, alignItems: "center" }}>
          <Icon
            reverse
            name="magnify"
            type="material-community"
            color="#ff7f2f"
            onPress={ToggleModal}
            style={{ marginLeft: 40, textAlign: "center" }}
          />
        </Layout>
      </Modal>
    </Layout>
  );
};

const style = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  fontList: { fontSize: 18, marginLeft: 5 },
});
