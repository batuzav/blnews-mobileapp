import React from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "react-native-elements";
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
  Icon,
} from "@ui-kitten/components";
import { default as theme } from "../../assets/mapping/mapping.json";

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDIB: "",
      inputPass: "",
      inputPassMask: "",
      loginDisabled: false,
      showPassword: false,
      // navigation: useNavigation(),
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.navigation && props.isLogged) {
      props.navigation.navigate("Navigation", {
        screen: "news",
      });
    }

    console.log("props en el login", props);
    return null;
  }
  componentDidMount() {}
  login = () => {
    this.setState({ loginDisabled: true });
    const obj = {
      dibNumber: this.state.inputDIB,
      password: this.state.inputPass,
    };
    if (obj.dibNumber !== "" && obj.password !== "") {
      this.props.loginapi(obj);
    }
  };

  onIndexChange = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  onInputValueChange = (e, type) => {
    switch (type) {
      case "inputDIB":
        this.setState({ inputDIB: e });
        break;
      case "inputPass":
        this.setState({ inputPass: e });
        break;
      default:
    }
  };
  toggleShowPassword = () => {
    const showPassword = !this.state.showPassword;

    this.setState({ showPassword });
  };

  renderIcon = (props) => {
    //console.log("props", props);
    <TouchableWithoutFeedback onPress={this.toggleShowPassword}>
      <Icon name={this.state.showPassword ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>;
  };

  render() {
    const { errorMsg, loading } = this.props;
    const { inputDIB, inputPass, showPassword } = this.state;
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Layout
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Layout style={{ width: 200, alignItems: "center" }}>
            <Image
              source={require("../../assets/logoBL/logo.png")}
              style={{ width: 120, height: 120 }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <KeyboardAvoidingView>
              <Input
                value={inputDIB}
                label={"No. de DIB"}
                status={"primary"}
                placeholder={"No. de DIB"}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={"email-address"}
                onChangeText={(e) => this.onInputValueChange(e, "inputDIB")}
                style={{ width: 250 }}
              />
              <Input
                style={{ width: 250 }}
                value={inputPass}
                label={"Contraseña"}
                status={"primary"}
                placeholder={"Contraseña"}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(e) => this.onInputValueChange(e, "inputPass")}
                accessoryRight={this.renderIcon()}
              />
            </KeyboardAvoidingView>
          </Layout>

          <Layout
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 80,
            }}
          >
            {loading ? (
              <ActivityIndicator
                size="large"
                color={eva.light["color-basic-900"]}
              />
            ) : (
              <Button onPress={this.login} disabled={loading}>
                Entrar
              </Button>
            )}
            <Text status={"danger"}>{errorMsg}</Text>
          </Layout>

          {/* <Layout style={{ alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AuthResetPass")}
            >
              <Text>Recuperar contraseña</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AuthRegister")}
            >
              <Text>Crear cuenta</Text>
            </TouchableOpacity>
          </Layout>*/}
        </Layout>
      </ApplicationProvider>
    );
  }
}

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

export default connect(mapStateToProps, bindActions)(Screen);
