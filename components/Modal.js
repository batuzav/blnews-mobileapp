import React from "react";
import { TouchableOpacity, Image, View, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { Layout, Text } from "@ui-kitten/components";
import Modal from "react-native-modal";

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
        <Layout style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => CategorySelected("NUT")}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginBottom: 10,
                marginTop: 10,
                borderRadius: 5,
                paddingVertical: 20,
                backgroundColor: "white",
              }}
            >
              <View style={{ justifyContent: "center", marginLeft: 15 }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="food-apple"
                    type="material-community"
                    color={Selected === "NUT" ? selectedColor : defaultColor}
                    r
                  />
                  <Text style={{ fontSize: 20, marginLeft: 5 }}>Nutrición</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => CategorySelected("NOT")}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginBottom: 10,
                marginTop: 10,
                borderRadius: 5,
                paddingVertical: 20,
                backgroundColor: "white",
              }}
            >
              <View style={{ justifyContent: "center", marginLeft: 15 }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="newspaper"
                    type="material-community"
                    color={Selected === "NOT" ? selectedColor : defaultColor}
                  />
                  <Text style={{ fontSize: 20, marginLeft: 5 }}>Noticias</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => CategorySelected("PRO")}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginBottom: 10,
                marginTop: 10,
                borderRadius: 5,
                paddingVertical: 20,
                backgroundColor: "white",
              }}
            >
              <View style={{ justifyContent: "center", marginLeft: 15 }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="sale"
                    type="material-community"
                    color={Selected === "PRO" ? selectedColor : defaultColor}
                  />
                  <Text style={{ fontSize: 20, marginLeft: 5 }}>Promoción</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => CategorySelected("TOD")}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginBottom: 10,
                marginTop: 10,
                borderRadius: 5,
                paddingVertical: 20,
                backgroundColor: "white",
              }}
            >
              <View style={{ justifyContent: "center", marginLeft: 15 }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="expand-all"
                    type="material-community"
                    color={Selected === "TOD" ? selectedColor : defaultColor}
                  />
                  <Text style={{ fontSize: 20, marginLeft: 5 }}>Todos</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Layout>
        <Layout style={{ flex: 0, paddingBottom: 10, alignItems: "center" }}>
          <Icon
            reverse
            name="close"
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
