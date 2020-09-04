import React, { Component } from "react";
import { ImageBackground, StatusBar, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { StaticHeader } from "../../components/Header";

export default function Radio() {
  return (
    <ImageBackground
      style={{ width: "100%", height: "100%", flex: 1 }}
      resizeMode="cover"
      source={require("../../images/bg-images/radiobg.png")}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StaticHeader title="MyBL Radio" />
        <StatusBar barStyle="light-content" backgroundColor="#ff7f2f" />
        <WebView
          style={{
            marginTop: 20,
            marginBottom: "75%",
            marginLeft: 10,
            marginRight: 10,
          }}
          originWhitelist={["*"]}
          source={{
            html: `<a class="spreaker-player" href="https://www.spreaker.com/show/productos-bodylogic" data-resource="show_id=4458633" data-width="100%" data-height="350px" data-theme="light" data-playlist="show" data-playlist-continuous="true" data-autoplay="false" data-live-autoplay="false" data-chapters-image="false" data-episode-image-position="right" data-hide-logo="false" data-hide-likes="false" data-hide-comments="false" data-hide-sharing="false" data-hide-download="true">Escucha "Productos Bodylogic" en Spreaker.</a>
            <script async src="https://widget.spreaker.com/widgets.js"></script>`,
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
