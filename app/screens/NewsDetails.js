import React from "react";
import {
  TouchableOpacity,
  View,
  ImageBackground,
  StatusBar,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { getCampaigns } from "../../store/actions/campaigns";
import { getCampaignById } from "../../store/actions/campaign";
import * as eva from "@eva-design/eva";
import { Text } from "@ui-kitten/components";
import { Detail } from "../../components/Campaigns";

class NewsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const index = this.props.route.params.index;
    const list = this.props.list[index]._id;
    this.getCampaignData(list);
  }
  getCampaignData = (id) => {
    this.props.getCampaignById(id);
  };
  render() {
    console.log("imagebody: ", this.props.campaign.imageBody);
    if (this.props.campaign.imageBody === "") {
      return (
        <ImageBackground
          style={{
            width: "100%",
            flex: 1,
          }}
          resizeMode="cover"
          source={require("../../images/bg-images/newsbg.png")}
        >
          <StatusBar barStyle="light-content" backgroundColor="#ff7f2f" />
          <Detail data={this.props.campaign} />
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          style={{
            width: "100%",
            flex: 1,
          }}
          resizeMode="cover"
          source={{ uri: this.props.campaign.imageBody }}
        >
          <Image
            source={{ uri: this.props.campaign.imageBody }}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </ImageBackground>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    campaign: state.campaign,
    list: state.campaigns.list,
  };
};
const bindActions = (dispatch) => ({
  getCampaigns: () => dispatch(getCampaigns()),
  getCampaignById: (id) => dispatch(getCampaignById(id)),
});

export default connect(mapStateToProps, bindActions)(NewsDetails);
