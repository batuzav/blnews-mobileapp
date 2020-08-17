import React from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Image } from "react-native-elements";
import { connect } from "react-redux";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { login as loginapi, checkAuth } from "../../store/actions/app";
import * as eva from "@eva-design/eva";
import { styles } from "../../components/styles/Login";
import {
  ApplicationProvider,
  Text,
  Button,
  Input,
} from "@ui-kitten/components";
import { ShowPasswordControl } from "../../components/input";
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
      tokkenApp: "",
      // navigation: useNavigation(),
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.navigation && props.isLogged) {
      props.navigation.navigate("Navigation", {
        screen: "news",
      });
    }

    // console.log("props en el login", props);
    return null;
  }
  registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      return;
    }

    try {
      let tokkenApp = await Notifications.getExpoPushTokenAsync();
      console.log("tokkenapp", tokkenApp);
      this.setState({ tokkenApp });
    } catch (error) {
      console.log("error: ", error);
    }
  };
  async componentDidMount() {}
  login = async () => {
    await this.registerForPushNotificationsAsync();
    this.setState({ loginDisabled: true });
    const obj = {
      dibNumber: this.state.inputDIB,
      password: this.state.inputPass,
      tokkenApp: this.state.tokkenApp,
    };
    console.log("stateTokken", this.state.tokkenApp);
    console.log("OBJ", obj);
    if (obj.dibNumber !== "" && obj.password !== "" && obj.tokkenApp !== "") {
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
  render() {
    const { errorMsg, loading } = this.props;
    const { inputDIB, inputPass, showPassword } = this.state;
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <StatusBar barStyle="light-content" backgroundColor="#ff7f2f" />
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../../images/bg-images/loginbg.png")}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View style={{ width: 200, alignItems: "center" }}>
              <Image
                source={require("../../assets/logoBL/logo.png")}
                style={{ width: 120, height: 120 }}
                PlaceholderContent={<ActivityIndicator />}
              />
              <KeyboardAvoidingView>
                <Input
                  value={inputDIB}
                  status={"primary"}
                  placeholder={"No. de DIB"}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType={"email-address"}
                  onChangeText={(e) => this.onInputValueChange(e, "inputDIB")}
                  style={{
                    width: 300,
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                />
                <Input
                  style={{ width: 300 }}
                  value={inputPass}
                  status={"primary"}
                  placeholder={"Contraseña"}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(e) => this.onInputValueChange(e, "inputPass")}
                  accessoryRight={() => (
                    <ShowPasswordControl
                      show={showPassword}
                      onPress={() => this.toggleShowPassword()}
                    />
                  )}
                />
              </KeyboardAvoidingView>
            </View>

            <View
              style={{
                justifyContent: "flex-end",
                alignItems: "center",
                height: 180,
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
              <Text style={{ color: "blue" }}>{errorMsg}</Text>
            </View>

            {/* <View style={{ alignItems: "center", marginTop: 20 }}>
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
          </View>*/}
          </View>
        </ImageBackground>
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
