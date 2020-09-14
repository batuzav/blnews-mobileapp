import React, { Component } from "react";
import {
  ImageBackground,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  Image,
} from "react-native";
import {
  ApplicationProvider,
  Text,
  Button,
  Input,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { MyText } from "../../components/MyText";
import { ShowPasswordControl } from "../../components/input";
import { registerAccount } from "../../store/actions/app";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDIB: "",
      inputPass: "",
      inputEmail: "",
      inputConfirmPass: "",
      inputPassMask: "",
      loginDisabled: false,
      showPassword: false,
      tokkenApp: "",
      tcAccept: false,

      // navigation: useNavigation(),
    };
  }
  onIndexChange = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  onInputValueChange = (e, type) => {
    switch (type) {
      case "inputDIB":
        this.setState({ inputDIB: e });
        console.log("inputDIB", this.state.inputDIB);
        break;
      case "inputPass":
        this.setState({ inputPass: e });
        console.log("inputPass", this.state.inputPass);
        break;
      case "inputEmail":
        this.setState({ inputEmail: e });
        console.log("inputEmail", this.state.inputEmail);
        break;
      case "inputConfirmPass":
        this.setState({ inputConfirmPass: e });
        console.log("inputConfirmPass", this.state.inputConfirmPass);
        break;
      default:
    }
  };
  toggleShowPassword = () => {
    const showPassword = !this.state.showPassword;
    this.setState({ showPassword });
  };
  cancelar = () => {
    this.props.navigation.navigate("Auth", { screen: "Login" });
  };
  registrar = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const obj = {
      dibNumber: this.state.inputDIB,
      email: this.state.inputEmail,
      password: this.state.inputPass,
      confirmPassword: this.state.inputConfirmPass,
    };
    if (
      obj.dibNumber === "" ||
      obj.email === "" ||
      obj.password === "" ||
      obj.confirmPassword === ""
    ) {
      alert("Todos los campos son requeridos.");
      return;
    }
    if (obj.password !== obj.confirmPassword) {
      alert("El campo PassWord y de el de Confirmar Password no son iguales.");
      return;
    }
    if (reg.test(obj.email) === false) {
      alert("No ingresaste un Email Correcto");
      return;
    }
    this.props.registerAccount(obj);
  };
  render() {
    const { errorMsg, loading } = this.props;
    const {
      inputDIB,
      inputPass,
      showPassword,
      inputEmail,
      inputConfirmPass,
    } = this.state;
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%", flex: 1 }}
        resizeMode="cover"
        source={require("../../images/bg-images/loginbg.png")}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/logoBL/logo.png")}
              style={{ width: 120, height: 120 }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <KeyboardAvoidingView>
              <Input
                value={inputEmail}
                status={"primary"}
                placeholder={"E-mail"}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={"email-address"}
                onChangeText={(e) => this.onInputValueChange(e, "inputEmail")}
                style={{
                  width: 300,
                  marginBottom: 20,
                }}
              />
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
                  marginBottom: 35,
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
              <Input
                style={{ width: 300 }}
                value={inputConfirmPass}
                status={"primary"}
                placeholder={"Confirmar contraseña"}
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={(e) =>
                  this.onInputValueChange(e, "inputConfirmPass")
                }
              />
              <View style={{ flexDirection: "row", marginTop: 30 }}>
                {loading ? (
                  <ActivityIndicator size="large" />
                ) : (
                  <Button
                    style={{ marginLeft: "7.5%" }}
                    onPress={this.registrar}
                    disabled={loading}
                  >
                    Registrar
                  </Button>
                )}
                <Button
                  style={{
                    alignSelf: "flex-end",
                    marginLeft: "15%",
                  }}
                  onPress={this.cancelar}
                  status="danger"
                  disabled={loading}
                >
                  Cancelar
                </Button>
              </View>
              <Text
                style={{ color: "blue", alignSelf: "center", marginTop: 10 }}
              >
                {errorMsg}
              </Text>
            </KeyboardAvoidingView>
          </View>
        </SafeAreaView>
      </ImageBackground>
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
  registerAccount: (obj) => dispatch(registerAccount(obj)),
});

export default connect(mapStateToProps, bindActions)(Register);
