import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Radio() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        html:
          "<iframe src='https://widget.spreaker.com/player?show_id=4458633&theme=light&autoplay=false&playlist=show&cover_image_url=https%3A%22https%3A%5C%2F%5C%2Fd3wo5wojvuv7l.cloudfront.net%5C%2Fimages.spreaker.com%5C%2Foriginal%5C%2Ff217f4acc92af15d99420a18456e4096.jpg%2' width='100%' height='50%' frameborder='0'></iframe>",
      }}
    />
  );
}
