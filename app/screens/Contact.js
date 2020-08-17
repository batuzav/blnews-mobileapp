import React from "react";
import {
  Linking,
  ImageBackground,
  Dimensions,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { login as loginapi, checkAuth } from "../../store/actions/app";
import { Layout, Text, Card, Button } from "@ui-kitten/components";
import Modal from "react-native-modal";
import { styles } from "../../components/styles/ContactStyles";
import { MyText } from "../../components/MyText";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  toggleShowModal = () => {
    const showModal = !this.state.showModal;
    this.setState({ showModal });
  };
  render() {
    return (
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require("../../images/bg-images/contactobg.png")}
      >
        <StatusBar backgroundColor="black" />
        <Layout>
          <Modal
            isVisible={this.state.showModal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{
              backgroundColor: "white",
              maxHeight: Dimensions.get("window").height / 2,
            }}
          >
            <Layout style={{ flex: 1 }}>
              <ScrollView
                style={{
                  flexDirection: "column",
                  backgroundColor: "transparent",
                }}
              >
                <Card style={styles.cardModal}>
                  <Layout>
                    <MyText style={{ fontSize: 16 }}>
                      Atención a Clientes
                    </MyText>
                  </Layout>
                </Card>
                <Card style={styles.cardModal}>
                  <Layout>
                    <MyText style={{ fontSize: 16 }}>Finanzas</MyText>
                  </Layout>
                </Card>
                <Card style={styles.cardModal}>
                  <Layout>
                    <MyText style={{ fontSize: 16 }}>Ética</MyText>
                  </Layout>
                </Card>
                <Card style={styles.cardModal}>
                  <Layout>
                    <MyText style={{ fontSize: 16 }}>Sistemas</MyText>
                  </Layout>
                </Card>
                <Card style={styles.cardModal}>
                  <Layout>
                    <MyText style={{ fontSize: 16 }}>
                      Dirección Comercial
                    </MyText>
                  </Layout>
                </Card>
              </ScrollView>
            </Layout>
            <Layout
              style={{ flex: 0, paddingBottom: 10, alignItems: "center" }}
            >
              <Icon
                reverse
                name="close"
                type="material-community"
                color="#ff7f2f"
                onPress={this.toggleShowModal}
                style={styles.icon}
              />
            </Layout>
          </Modal>
        </Layout>
        <Layout style={styles.body}>
          <Layout style={styles.topContainer} level="1">
            <Card style={styles.card} onPress={this.toggleShowModal}>
              <Layout style={{ alignItems: "center" }}>
                <Icon
                  reverse
                  name="email"
                  type="material-community"
                  color="#0067b8"
                  style={styles.icon}
                />
              </Layout>
              <MyText>¡Por Email!</MyText>
            </Card>

            <Card
              style={styles.card}
              onPress={() => Linking.openURL("https://wa.me/5213339531391")}
            >
              <Layout style={{ alignItems: "center" }}>
                <Icon
                  reverse
                  name="whatsapp"
                  type="material-community"
                  color="#1bd741"
                  style={styles.icon}
                />
              </Layout>

              <MyText>¡Por Mensaje!</MyText>
            </Card>
          </Layout>
          <Layout style={styles.container} level="4">
            <Card
              style={styles.card}
              onPress={() => Linking.openURL("tel:+523336785100")}
            >
              <Layout style={{ alignItems: "center" }}>
                <Icon
                  reverse
                  name="phone-classic"
                  type="material-community"
                  color="#ff7f2f"
                  style={styles.icon}
                />
              </Layout>
              <MyText>¡Llamanos!</MyText>
            </Card>
          </Layout>
        </Layout>
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
});
// Linking.openURL("mailto:pedro@batuzav.com"

export default connect(mapStateToProps, bindActions)(Contact);
