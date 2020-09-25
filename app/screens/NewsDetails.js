import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
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
import { StaticHeader } from "../../components/Header";

class NewsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let list = "";
    !this.props.route.params.campaignId
      ? (list = this.props.list[this.props.route.params.index]._id)
      : (list = this.props.route.params.campaignId);
    this.getCampaignData(list);
  }
  getCampaignData = (id) => {
    this.props.getCampaignById(id);
  };
  goToBack = () => {
    this.props.navigation.navigate("news");
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
          <SafeAreaView>
            <StaticHeader title="MyBL-News" leftCompnent={this.goToBack} />
            <StatusBar barStyle="light-content" backgroundColor="#ff7f2f" />
            <Detail data={this.props.campaign} />
          </SafeAreaView>
        </ImageBackground>
      );
    } else {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <StaticHeader title="MyBL News" leftCompnent={this.goToBack} />
          <Image
            source={{ uri: this.props.campaign.imageBody }}
            style={{ width: "100%", height: "95%", margin: 1 }}
          ></Image>
        </SafeAreaView>
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
