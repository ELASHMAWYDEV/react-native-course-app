// @ts-nocheck
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  Linking,
} from "react-native";
import * as pkg from "../../app.json";

//Components
import Header from "../components/Header";

//Assets
import Colors from "../assets/Colors";

//Config
import { EMAIL, APP_NAME, APP_ABOUT } from "../../config";

const About = (props) => {
  return (
    <>
      <Header {...props} backBtnEnabled title="عن التطبيق" />
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/main-img/logo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.versionText}>إصدار {pkg.expo.version}</Text>
        <Text style={styles.appNameText}>{APP_NAME}</Text>
        <Text style={styles.infoText}>{APP_ABOUT}</Text>
        <TouchableNativeFeedback
          onPress={() => Linking.openURL(`mailto:${EMAIL}`)}
          background={TouchableNativeFeedback.Ripple(Colors.primary, false)}
          useForeground
        >
          <View style={styles.sendMailBtn}>
            <Text style={styles.btnText}>تواصل معنا عبر البريد</Text>
          </View>
        </TouchableNativeFeedback>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 20,
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "60%",
    height: "100%",
  },
  versionText: {
    fontFamily: "mix-arab-regular",
    fontSize: 28,
    textAlign: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginHorizontal: 20,
  },
  appNameText: {
    fontFamily: "mix-arab-regular",
    fontSize: 40,
    textAlign: "center",
    marginVertical: 40,
  },
  infoText: {
    fontFamily: "mix-arab-regular",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 30,
    marginHorizontal: 20,
  },
  sendMailBtn: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
    borderColor: Colors.primary,
    alignItems: "center",
    width: 330,
    marginVertical: 30,
    alignSelf: "center",
    overflow: "hidden",
  },
  btnText: {
    fontFamily: "mix-arab-regular",
    fontSize: 28,
    color: Colors.primary,
  },
});
export default About;
