// @ts-nocheck
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  Linking,
  Share,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Icon from "react-native-ionicons";
import { AdMobBanner } from "expo-ads-admob";

//Screens
import Home from "../screens/Home";
import DateConverter from "../screens/DateConverter";
import About from "../screens/About";

//Assets
import Colors from "../assets/Colors";

//Config
import {
  BANNER_UNIT_ID_ANDROID,
  BANNER_TEST_ID_ANDROID,
  BANNER_UNIT_ID_IOS,
  BANNER_TEST_ID_IOS,
  SHARE_APP_TEXT,
  APP_NAME,
  GOOGLE_PLAY_URL,
  APP_STORE_URL,
} from "../../config";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="Home"
        drawerPosition="right"
        drawerStyle={{
          width: "74%",
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="DateConverter" component={DateConverter} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const CustomDrawer = (props) => {
  //Share App Function
  const shareApp = async () => {
    try {
      await Share.share({
        message: SHARE_APP_TEXT,
      });
    } catch (e) {
      alert(e.message);
    }
  };

  //Rate App Function
  const rateApp = () => {
    const url = Platform.OS === "ios" ? APP_STORE_URL : GOOGLE_PLAY_URL;

    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.contaienr}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/main-img/logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.appName}>{APP_NAME}</Text>
      <View style={styles.btnsContainer}>
        <TouchableNativeFeedback
          onPress={() => props.navigation.navigate("Home", { reload: true })}
          useForeground
        >
          <View style={styles.btn}>
            <View style={styles.iconContainer}>
              <Icon name="ios-home" size={30} color={Colors.primary} />
            </View>
            <Text style={styles.btnText}>الرئيسية</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => props.navigation.navigate("DateConverter")}
          useForeground
        >
          <View style={styles.btn}>
            <View style={styles.iconContainer}>
              <Icon name="ios-calendar" size={30} color={Colors.primary} />
            </View>
            <Text style={styles.btnText}>محول التاريخ</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => props.navigation.navigate("About")}
          useForeground
        >
          <View style={styles.btn}>
            <View style={styles.iconContainer}>
              <Icon
                name="ios-information-circle-outline"
                size={30}
                color={Colors.primary}
              />
            </View>
            <Text style={styles.btnText}>عن التطبيق</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={rateApp} useForeground>
          <View style={styles.btn}>
            <View style={styles.iconContainer}>
              <Icon name="ios-star" size={30} color={Colors.primary} />
            </View>
            <Text style={styles.btnText}>تقييم التطبيق</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={shareApp} useForeground>
          <View style={styles.btn}>
            <View style={styles.iconContainer}>
              <Icon name="share" size={30} color={Colors.primary} />
            </View>
            <Text style={styles.btnText}>مشاركة التطبيق</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <AdMobBanner
        bannerSize="mediumRectangle"
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
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  contaienr: {},
  logoContainer: {
    width: 180,
    height: 180,
    paddingHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appName: {
    fontSize: 26,
    fontFamily: "mix-arab-bold",
    textAlign: "center",
  },
  btnsContainer: {
    marginTop: 40,
  },
  btn: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 8,
    padding: 12,
    overflow: "hidden",
    flexDirection: "row-reverse",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: "#ddd",
  },
  btnText: {
    fontSize: 20,
    fontFamily: "mix-arab-regular",
  },
  iconContainer: {
    marginStart: 12,
  },
});

export default DrawerNavigation;
