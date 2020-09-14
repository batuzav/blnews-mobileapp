import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { connect } from "react-redux";
import { socketInit } from "../../services/socket";
import { loginReset, checkAuth } from "../../store/actions/app";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
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
    // console.log("Entro al getDerivedStatedFromsProps", props);

    if (props.isLogged) {
      console.log("ENTRO AL LOGEED DEL LOADING EN GET");
      socketInit({
        jwtAccessToken: props.app.token,
        dispatch: props.dispatch,
      });
      props.navigation.navigate("Navigation", { screen: "news" });
    } else {
      props.navigation.navigate("Auth", { screen: "Login" });
    }
    return null;
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.loginReset();
    // console.log("boootsarp");
    // console.log("props en boootstartp: ", this.props);

    if (this.props.isLogged) {
      console.log("ENTRO AL LOGEED DEL LOADING");
      this.props.checkAuth();
      this.props.isLogged
        ? this.props.navigation.navigate("Navigation", { screen: "news" })
        : this.props.navigation.navigate("Auth", { screen: "Login" });
    } else {
      this.props.navigation.navigate("Auth", { screen: "Login" });
    }
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.app.isLogged,
  user: state.user,
  app: state.app,
});

const mapDispatchToProps = (dispatch) => ({
  loginReset: () => dispatch(loginReset()),
  checkAuth: () => dispatch(checkAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
