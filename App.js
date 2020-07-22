import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import Navigation from "./app/navigation/Navigation";
import { Provider } from "react-redux";
// import { Ionicons } from "@expo/vector-icons";

// import LoadingView from "./app/screens/AuthLogin";
import { persistor, store } from "./store";

import { PersistGate } from "redux-persist/lib/integration/react";
import { ApplicationProvider } from "@ui-kitten/components";
import { mapping, light as theme } from "@eva-design/eva";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    console.log("store en el App.js: ", store.getState());
    return (
      <ApplicationProvider mapping={mapping} theme={theme}>
        <Provider store={store}>
          <PersistGate loading={<Navigation />} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    );
  }
}

async function loadResourcesAsync() {
  // console.log("ejecutandose LoadResources");
  await Promise.all([
    Font.loadAsync({
      //   //   // This is the font that we are using for our tab bar
      //   //   ...Ionicons.font,
      //   //   // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      //   //   // remove this if you are not using it in your app
      "body-logic": {
        uri: require("./assets/fonts/Lucifer-Sans-Condensed-SemiBold.otf"),
      },
    }),
  ]);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}
