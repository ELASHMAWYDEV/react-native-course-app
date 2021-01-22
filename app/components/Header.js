// @ts-nocheck
import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import Icon from "react-native-ionicons";

//Assets
import Colors from "../assets/Colors";


const Header = ({
  reloadWebView = () => null,
  backBtnEnabled = false,
  title = "",
  navigation,
}) => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={() => navigation.openDrawer()}
          useForeground
        >
          <View style={styles.iconContainer}>
            <Icon name="ios-menu" size={42} color="#fff" />
          </View>
        </TouchableNativeFeedback>

        {backBtnEnabled ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/main-img/logo.png")}
              style={styles.logo}
            />
          </View>
        )}
        <TouchableNativeFeedback
          onPress={() =>
            backBtnEnabled ? navigation.goBack() : reloadWebView()
          }
          useForeground
        >
          <View style={[styles.iconContainer, styles.leftContainer]}>
            <Icon
              name={backBtnEnabled ? "ios-arrow-back" : "ios-repeat"}
              size={backBtnEnabled ? 34 : 42}
              color="#fff"
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 80,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingBottom: 5,
    zIndex: 5,
    paddingTop: StatusBar.currentHeight,
  },

  iconContainer: {
    marginRight: 5,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  leftContainer: {
    marginLeft: 15,
    marginRight: 0,
  },
  logoContainer: {
    width: 95,
    height: 95,
    overflow: "hidden",
    borderColor: Colors.primary,
    borderWidth: 8,
    borderRadius: 95 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "105%",
    height: "105%",
    resizeMode: "cover",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "mix-arab-regular",
    textAlignVertical: "center",
  },
});

export default Header;
