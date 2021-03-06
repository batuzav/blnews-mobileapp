import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Switch,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { logout } from "../../store/actions/app";
import { MyText } from "../../components/MyText";
import { StaticHeader } from "../../components/Header";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      selectedCountries: this.props.user.countriesToSee,
      img: this.props.user.img,
    };
  }
  onSelectedItemsChange = (selectedCountries) => {
    this.setState({ selectedCountries });
  };
  render() {
    return (
      <View style={styles.root}>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        ) : (
          <StatusBar barStyle="dark-content" backgroundColor="#ff7f2f" />
        )}

        <View style={styles.bodyFiller}>
          <StaticHeader backgroundColorHeader="transparent" />
        </View>
        <View style={styles.body}>
          <View style={styles.ellipseStack}>
            <Svg viewBox=" 0 0 859.43 830.3" style={styles.ellipse}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(255,255,255,1)"
                cx={-14}
                cy={220}
                rx={409}
                ry={515}
              ></Ellipse>
            </Svg>

            <View style={styles.settingsList}>
              <View style={styles.accountSettings}>
                <MyText style={styles.expanded}>
                  Preferencias del usuario
                </MyText>
                <View style={styles.subSettings}>
                  <View style={styles.editProfileColumn}>
                    <View style={styles.text10Filler}>
                      <SectionedMultiSelect
                        items={items}
                        uniqueKey="id"
                        colors={{
                          primary: "#ff7f2f",
                          chipColor: "#ff7f2f",
                          subItemBackground: "#ff7f2f",
                        }}
                        selectText="Cambie los paises para ver..."
                        confirmText={"Confirmar"}
                        selectedText={"Seleccionado"}
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={this.state.selectedCountries}
                      />
                    </View>
                    {/* <View style={styles.changeConnections}>
                      <Text style={styles.text11}>Change connections</Text>
                      <View style={styles.text11Filler}></View>
                      <Icon
                        name="arrow-down"
                        type="material-community"
                        style={styles.icon}
                      />
                    </View> */}
                  </View>
                  <View style={styles.editProfileColumnFiller}></View>
                  {/* <View style={styles.providerSettings}>
                    <Text style={styles.text12}>Edit provider settings</Text>
                    <View style={styles.text12Filler}></View>
                    <Icon
                      name="arrow-down"
                      type="material-community"
                      style={styles.icon}
                    />
                  </View> */}
                </View>
              </View>
              <View style={styles.sub2}>
                <View style={styles.notificationsColumn}>
                  {/* <View style={styles.notifications}>
                    <Text style={styles.text7}>Notifications</Text>
                    <View style={styles.text7Filler}></View>
                    <Switch
                      value={true}
                      trackColor={{ true: "rgba(230, 230, 230,1)" }}
                      thumbColor="rgba(31,178,204,1)"
                      style={styles.switch3}
                    ></Switch>
                  </View>
                  <View style={styles.backup}>
                    <Text style={styles.text72}>Backup</Text>
                    <View style={styles.text72Filler}></View>
                    <Switch
                      value={false}
                      trackColor={{
                        true: "#1fb2cc",
                        false: "rgba(230, 230, 230,1)",
                      }}
                      style={styles.switch2}
                    ></Switch>
                  </View> */}
                </View>
                <View style={styles.notificationsColumnFiller}></View>
                <View style={styles.sponsored}>
                  {/* <Switch
                    value={false}
                    trackColor={{
                      true: "rgba(230, 230, 230,1)",
                      false: "rgba(230, 230, 230,1)",
                    }}
                    style={styles.switch4}
                  ></Switch> */}
                </View>
              </View>
            </View>
            <View style={styles.titleContainer}>
              <MyText style={styles.pageName}>
                {" "}
                {this.props.user.dibNumber}
              </MyText>
              <View
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  alignSelf: "center",
                  alignItems: "flex-end",
                  flex: 1,
                }}
              >
                <Icon
                  name="logout"
                  onPress={() => this.props.logout()}
                  type="material-community"
                  size={32}
                  style={{ marginRight: 60, alignSelf: "flex-start" }}
                />
              </View>
            </View>

            <View style={styles.userInfo}>
              <View style={styles.avatarRow}>
                {this.props.user.img !== "none" ? (
                  <Image
                    source={{ uri: this.state.img }}
                    resizeMode="stretch"
                    style={styles.avatar}
                  />
                ) : (
                  <Image
                    source={require("../../images/isotipo-bodylogic.png")}
                    resizeMode="stretch"
                    style={styles.avatar}
                  />
                )}
                <View style={styles.userEmailStack}>
                  <MyText style={styles.userName}>
                    {this.props.user.firstName} {"\n"}
                    {this.props.user.lastName}
                  </MyText>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const items = [
  {
    id: "MEX",
    name: "México",
  },
  {
    id: "PER",
    name: "Perú",
  },
  {
    id: "BOL",
    name: "Bolivia",
  },
  {
    id: "SAL",
    name: "El Salvador",
  },
  {
    id: "PAN",
    name: "Pánama",
  },
  {
    id: "USA",
    name: "United States",
  },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ff7f2f",
    flexDirection: "row",
  },
  bodyFiller: {
    top: 0,
    zIndex: 99999,
    flex: 1,
    flexDirection: "row",
  },
  body: {
    backgroundColor: "#ff7f2f",
    width: 360,
    marginRight: Platform.OS === "ios" ? -4 : 2,
    marginTop: 45,
    marginBottom: 21,
  },
  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1,
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 360,
    marginTop: -59,
    marginLeft: -3,
  },
  ellipse: {
    top: -62,
    left: 0,
    width: 859,
    height: 890,
    position: "absolute",
  },
  settingsList: {
    left: 51,
    height: 409,
    position: "absolute",
    right: 450,
    bottom: 300,
  },
  accountSettings: {
    height: 105,
    marginTop: 35,
    marginLeft: 24,
    marginRight: 24,
  },
  expanded: {
    color: "#121212",
    fontSize: 18,
    marginTop: -3,
  },
  subSettings: {
    height: 118,
    marginTop: 9,
  },
  editProfile: {
    height: 30,
    flexDirection: "row",
  },
  text10: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6,
  },
  text10Filler: {
    flex: 1,
    marginTop: 5,
    width: 240,
    marginLeft: -25,
    flexDirection: "column",
  },
  icon: {
    color: "rgba(31,178,204,1)",
    fontSize: 30,
  },
  changeConnections: {
    height: 30,
    flexDirection: "row",
    marginTop: 11,
  },
  text11: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6,
  },
  text11Filler: {
    flex: 1,
    flexDirection: "row",
  },
  icon2: {
    color: "rgba(31,178,204,1)",
    fontSize: 30,
  },
  editProfileColumn: {
    marginLeft: 10,
    marginRight: 10,
  },
  editProfileColumnFiller: {
    flex: 1,
  },
  providerSettings: {
    height: 30,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  text12: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6,
  },
  text12Filler: {
    flex: 1,
    flexDirection: "row",
  },
  icon3: {
    color: "#1fb2cc",
    fontSize: 30,
  },
  sub2: {
    height: 186,
    marginTop: 0,
    marginLeft: 29,
    marginRight: 29,
  },
  notifications: {
    height: 27,
    alignSelf: "center",
    flexDirection: "row",
  },
  text7: {
    color: "#121212",
    fontSize: 18,
  },
  text7Filler: {
    flex: 1,
    flexDirection: "row",
  },
  switch3: {
    width: 40,
  },
  backup: {
    height: 27,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 53,
  },
  text72: {
    color: "#121212",
    fontSize: 18,
  },
  text72Filler: {
    flex: 1,
    flexDirection: "row",
  },
  switch2: {
    width: 40,
    marginRight: -2,
  },
  notificationsColumn: {},
  notificationsColumnFiller: {
    flex: 1,
  },
  sponsored: {
    height: 27,
    alignSelf: "center",
    flexDirection: "row",
  },
  text73: {
    color: "#121212",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  text73Filler: {
    flex: 1,
    flexDirection: "row",
  },
  switch4: {
    width: 40,
  },

  titleContainer: {
    flex: 1,
    top: 0,
    width: 260,
    left: 85,
    position: "absolute",
    flexDirection: "row",
  },

  pageName: {
    color: "#ff7f2f",
    fontSize: 24,
  },
  userInfo: {
    top: 64,
    left: 57,
    height: 125,
    position: "absolute",
    right: 420,
    flexDirection: "row",
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 100,
    backgroundColor: Platform.OS === "ios" ? "white" : "transparent",
    borderWidth: Platform.OS === "ios" ? 2 : 0,
    borderColor: "#ff7f2f",
  },
  userEmail: {
    top: 80,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 16,
  },
  userName: {
    top: 0,
    left: 0,
    color: "#ff7f2f",
    position: "absolute",
    fontSize: 30,
  },
  userEmailStack: {
    width: 165,
    height: 96,
    marginLeft: 50,
    marginTop: 13,
  },
  avatarRow: {
    height: 109,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    borderRadius: 100,
  },
  ellipseStack: {
    height: 899,
    marginTop: 13,
    marginLeft: -50,
    marginRight: -449,
  },
});

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
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, bindActions)(Account);
