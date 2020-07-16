import React from "react";
import {
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { login as loginapi, checkAuth } from "../../store/actions/app";

import { ShowPasswordControl } from "../../components/input";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  LayoutPager,
  Input,
  Card,
} from "@ui-kitten/components";
import { default as theme } from "../../assets/mapping/mapping.json";
const image = { uri: "../../images/bg-images/contactobg.png" };

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDIB: "",
      inputPass: "",
      inputPassMask: "",
      loginDisabled: false,
      showPassword: false,
    };
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={require("../../images/bg-images/contactobg.png")}
        >
          <Layout style={styles.body}>
            <Layout style={styles.topContainer} level="1">
              <Card
                style={styles.card}
                onPress={() => Linking.openURL("mailto:pedro@batuzav.com")}
              >
                <Icon
                  reverse
                  name="email"
                  type="material-community"
                  color="#0067b8"
                  style={styles.icon}
                />
                <Text>¡Por Email!</Text>
              </Card>

              <Card
                style={styles.card}
                onPress={() =>
                  Linking.openURL("https://wa.me/+52-(669)2052676")
                }
              >
                <Icon
                  reverse
                  name="whatsapp"
                  type="material-community"
                  color="#1bd741"
                  style={styles.icon}
                />
                <Text>¡Por Mensaje!</Text>
              </Card>
            </Layout>
            <Layout style={styles.container} level="4">
              <Card
                style={styles.card}
                onPress={() => Linking.openURL("tel:+526692052676")}
              >
                <Icon
                  reverse
                  name="phone-classic"
                  type="material-community"
                  color="#ff7f2f"
                  style={styles.icon}
                />
                <Text>¡Llamanos!</Text>
              </Card>
            </Layout>
          </Layout>
        </ImageBackground>
      </ApplicationProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: 10,
  },
  topContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  card: {
    flex: 1,
    margin: 6,
    // borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: "transparent",
  },
  body: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    height: "50%",
    backgroundColor: "transparent",

    // backgroundColor: "#ff7f2fb3",
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  icon: {
    alignSelf: "center",
  },
});
const mapStateToProps = (state) => {
  const { isLogged, errorMsg, loading, loginError, serverError } = state.app;
  return {
    isLogged,
    errorMsg,
    loading,
    serverError,
    loginError,

    user: state.user,
  };
};
const bindActions = (dispatch) => ({
  loginapi: (obj) => dispatch(loginapi(obj)),
  checkAuth: () => dispatch(checkAuth()),
});

export default connect(mapStateToProps, bindActions)(Contact);
