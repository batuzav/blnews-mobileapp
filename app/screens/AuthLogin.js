import React from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Image, CheckBox } from "react-native-elements";
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
import { color } from "react-native-reanimated";
import { MyText } from "../../components/MyText";

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
      tcAccept: false,
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
      this.setState({ tokkenApp });
    } catch (error) {}
  };
  async componentDidMount() {}
  login = async () => {
    this.setState({ loginDisabled: true });
    await this.registerForPushNotificationsAsync();
    const obj = {
      dibNumber: this.state.inputDIB,
      password: this.state.inputPass,
      tokkenApp: this.state.tokkenApp,
    };
    if (
      obj.dibNumber !== "" &&
      obj.password !== "" &&
      obj.tokkenApp !== "" &&
      this.state.tcAccept === true
    ) {
      console.log("GOLA");
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
  handleCheckChange = () => {
    const tcAccept = !this.state.tcAccept;
    this.setState({ tcAccept });
  };
  goToRegister = () => {
    console.log("object");
    this.props.navigation.navigate("Auth", { screen: "Register" });
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
              <CheckBox
                center
                title="Acepto terminos y condiciones."
                checked={this.state.tcAccept}
                onPress={this.handleCheckChange}
                containerStyle={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
                textStyle={{ color: "#000" }}
                checkedColor="#ff7f2f"
              />
              <TouchableOpacity onPress={this.goToRegister}>
                <MyText
                  style={{
                    fontSize: 18,
                    textDecorationLine: "underline",
                    textDecorationStyle: "solid",
                    textDecorationColor: "#000",
                  }}
                >
                  Registrarse
                </MyText>
              </TouchableOpacity>
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
