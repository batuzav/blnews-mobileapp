import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 10,
  },
  topContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  card: {
    flex: 1,
    margin: 6,
    // borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: "center",
    // backgroundColor: "transparent",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: "50%",
    backgroundColor: "transparent",

    // backgroundColor: "#ff7f2fb3",
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  icon: {
    marginLeft: 40,
    textAlign: "center",
  },
  button: {
    width: Dimensions.get("window").width / 2,
    alignSelf: "center",
  },
  cardModal: {
    flexDirection: "column",
    margin: 6,
    // borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: "baseline",
    width: "95%",
    // backgroundColor: "transparent",
  },
});

export { styles };
