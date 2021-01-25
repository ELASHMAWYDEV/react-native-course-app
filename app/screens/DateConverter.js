import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

//Components
import Header from "../components/Header";

const DateConverter = (props) => {
  const [url, setUrl] = useState("http://sdate.app-other.com/");

  const reloadWebView = () => {
    setUrl(`http://sdate.app-other.com/?t=${new Date().getTime()}`);
  };


  return (
    <View style={styles.container}>
      <Header reloadWebView={reloadWebView} {...props} />
      <WebView source={{ uri: url }} style={styles.webView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webView: {
    width: "100%",
    backgroundColor: "#fff",
  },
});
export default DateConverter;
