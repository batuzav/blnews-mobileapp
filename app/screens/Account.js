import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";
import { connect } from "react-redux";
import {
  login as loginapi,
  checkAuth,
  updateTokken,
} from "../../store/actions/app";
import { getCampaigns } from "../../store/actions/campaigns";
import * as eva from "@eva-design/eva";
import { Text } from "@ui-kitten/components";
import { default as theme } from "../../assets/mapping/mapping.json";
import { render } from "react-dom";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.updateTokken()}>
          <Text>Cuentassss</Text>
        </TouchableOpacity>
      </View>
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
    campaign: state.campaigns,
  };
};
const bindActions = (dispatch) => ({
  loginapi: (obj) => dispatch(loginapi(obj)),
  checkAuth: () => dispatch(checkAuth()),
  updateTokken: () => dispatch(updateTokken()),
});

export default connect(mapStateToProps, bindActions)(Account);
