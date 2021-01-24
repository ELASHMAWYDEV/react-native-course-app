import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";

//Components
import Header from "../components/Header";
import Loading from "../components/Loading";
import NoConnection from "../components/NoConnection";

//Config
import {
  BANNER_UNIT_ID_ANDROID,
  BANNER_TEST_ID_ANDROID,
  BANNER_UNIT_ID_IOS,
  BANNER_TEST_ID_IOS,
  INTERSTITIAL_UNIT_ID_ANDROID,
  INTERSTITIAL_TEST_ID_ANDROID,
  INTERSTITIAL_UNIT_ID_IOS,
  INTERSTITIAL_TEST_ID_IOS,
} from "../../config";

const Home = (props) => {
  const [url, setUrl] = useState("http://salary.app-other.com");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => displayInterstitial(), 5000);
    console.log(isLoading);
  }, []);

  const displayInterstitial = async () => {
    try {
      await AdMobInterstitial.setAdUnitID(
        __DEV__
          ? Platform.OS === "ios" //in debelopment
            ? INTERSTITIAL_TEST_ID_IOS
            : INTERSTITIAL_TEST_ID_ANDROID
          : Platform.OS === "ios" //in production
          ? INTERSTITIAL_UNIT_ID_IOS
          : INTERSTITIAL_UNIT_ID_ANDROID
      );

      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
      await AdMobInterstitial.showAdAsync();
    } catch (e) {
      alert(e.message);
    }
  };

  const reloadWebView = () => {
    setUrl(`http://salary.app-other.com?t=${new Date().getTime()}`);
  };

  // console.log(props.navigation.openDrawer);

  return (
    <View style={styles.container}>
      <Header reloadWebView={reloadWebView} {...props} />
      {isLoading && <Loading />}
      <NoConnection />
      <WebView
        source={{ uri: url }}
        style={styles.webView}
        onLoad={() => setIsLoading(false)}
      />
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={
          __DEV__
            ? Platform.OS === "ios" //in debelopment
              ? BANNER_TEST_ID_IOS
              : BANNER_TEST_ID_ANDROID
            : Platform.OS === "ios" //in production
            ? BANNER_UNIT_ID_IOS
            : BANNER_UNIT_ID_ANDROID
        }
        servePersonalizedAds
      />
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
export default Home;
