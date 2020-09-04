import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Switch,
  Image,
  Platform,
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  render() {
    return (
      <View style={styles.root}>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        ) : (
          <StatusBar barStyle="dark-content" backgroundColor="#ff7f2f" />
        )}
        <View style={styles.bodyFiller}></View>
        <View style={styles.body}>
          <View style={styles.ellipseStack}>
            <Svg viewBox=" 0 0 859.43 830.3" style={styles.ellipse}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(255,255,255,1)"
                cx={-14}
                cy={180}
                rx={409}
                ry={515}
              ></Ellipse>
            </Svg>
            <View style={styles.settingsList}>
              <View style={styles.accountSettings}>
                <Text style={styles.expanded}>Account Settings</Text>
                <View style={styles.subSettings}>
                  <View style={styles.editProfileColumn}>
                    <View style={styles.editProfile}>
                      <Text style={styles.text10}>Edit Profile</Text>
                      {/* <View style={styles.text10Filler}></View>
                      <Icon
                        name="arrow-down"
                        type="material-community"
                        style={styles.icon}
                      /> */}
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
                {/* <View style={styles.sponsored}>
                  <Text style={styles.text73}>Sponsored Messages</Text>
                  <View style={styles.text73Filler}></View>
                  <Switch
                    value={false}
                    trackColor={{
                      true: "rgba(230, 230, 230,1)",
                      false: "rgba(230, 230, 230,1)",
                    }}
                    style={styles.switch4}
                  ></Switch>
                </View> */}
              </View>
            </View>
            <Text style={styles.pageName}>{this.props.user.dibNumber}</Text>
            <View style={styles.userInfo}>
              <View style={styles.avatarRow}>
                <Image
                  source={require("../../images/isotipo-bodylogic.png")}
                  resizeMode="stretch"
                  style={styles.avatar}
                />
                {/* {this.props.user.img !== "none" ? (
                  <Image
                    source={require({ uri: this.props.user.img })}
                    resizeMode="stretch"
                    style={styles.avatar}
                  />
                ) : (
                  <Image
                    source={require("../../images/isotipo-bodylogic.png")}
                    resizeMode="stretch"
                    style={styles.avatar}
                  />
                )} */}
                <View style={styles.userEmailStack}>
                  {/* <Text style={styles.userEmail}>stan@stansmith.com</Text> */}
                  <Text style={styles.userName}>
                    {this.props.user.firstName} {"\n"}
                    {this.props.user.lastName}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ff7f2f",
    flexDirection: "row",
  },
  bodyFiller: {
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
    bottom: 272,
  },
  accountSettings: {
    height: 165,
    marginTop: 15,
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
    flexDirection: "row",
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
    marginTop: 18,
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
  },
  text73Filler: {
    flex: 1,
    flexDirection: "row",
  },
  switch4: {
    width: 40,
  },
  pageName: {
    top: 0,
    left: 85,
    color: "#ff7f2f",
    position: "absolute",
    fontSize: 24,
  },
  userInfo: {
    top: 64,
    left: 87,
    height: 125,
    position: "absolute",
    right: 451,
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
    top: 75,
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
    width: 147,
    height: 96,
    marginLeft: 62,
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
    campaign: state.campaigns,
  };
};
const bindActions = (dispatch) => ({});

export default connect(mapStateToProps, bindActions)(Account);
