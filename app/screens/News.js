import React from "react";
import { ImageBackground, StyleSheet, FlatList } from "react-native";
import { Header } from "react-native-elements";
import { connect } from "react-redux";
import {
  getCampaigns,
  getCampaignsByCategory,
} from "../../store/actions/campaigns";
import { Layout, Text, Card, Button } from "@ui-kitten/components";
import { Item } from "../../components/Campaigns";
import { ModalCat } from "../../components/Modal";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      findByCategory: false,
      category: "TOD",
      showModal: false,
    };
  }
  async componentDidMount() {
    this.getAllCampaigns();
  }
  toggleShowModal = () => {
    const showModal = !this.state.showModal;
    this.setState({ showModal });
    !showModal ? this.getAllCampaigns() : false;
  };

  async getAllCampaigns() {
    !this.state.findByCategory
      ? await this.props.getCampaigns()
      : await this.props.getCampaignsByCategory(this.state.category);
  }
  categorySelected = async (category) => {
    if (category === "TOD") {
      this.setState({ findByCategory: false, category });
    } else {
      this.setState({ findByCategory: true, category });
      console.log("categoria: ", category);
    }
    // this.toggleShowModal();
  };
  goToDetail = (index) => {
    this.props.navigation.navigate("newsDetails", { index });
  };
  renderItem({ index, item }) {
    return <Item {...item} action={() => this.goToDetail(index)} />;
  }
  render() {
    return (
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require("../../images/bg-images/newsbg.png")}
      >
        <Header
          backgroundColor="white"
          containerStyle={{ height: 55, borderBottomWidth: 0, width: "100%" }}
          centerComponent={{
            text: "Noticias",
            style: {
              color: "#000",
              fontSize: 20,
              marginTop: -38,
              fontWeight: "bold",
            },
          }}
          leftContainerStyle={{ marginTop: -45 }}
          leftComponent={{
            icon: "menu",
            color: "#000",
            onPress: () => this.toggleShowModal(),
          }}
        />

        <ModalCat
          ToggleModal={() => this.toggleShowModal()}
          CategorySelected={this.categorySelected}
          Visible={this.state.showModal}
          Selected={this.state.category}
        />

        <Layout style={{ backgroundColor: "transparent", height: "93%" }}>
          <FlatList
            style={{ paddingHorizontal: 20 }}
            onRefresh={() => this.getAllCampaigns()}
            refreshing={false}
            data={this.props.list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => this.renderItem(item, this.renderItem)}
            // ListHeaderComponent={this.renderHeader}
          ></FlatList>
        </Layout>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",

    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    list: state.campaigns.list,
    user: state.user,
  };
};
const bindActions = (dispatch) => ({
  getCampaigns: () => dispatch(getCampaigns()),
  getCampaignsByCategory: (category) =>
    dispatch(getCampaignsByCategory(category)),
});

export default connect(mapStateToProps, bindActions)(News);
