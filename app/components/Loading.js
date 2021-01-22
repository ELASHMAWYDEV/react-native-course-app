import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, ActivityIndicator } from "react-native";

//Colors
import Colors from "../assets/Colors";

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setIsVisible(false)}
    >
      <View style={styles.container}>
        <ActivityIndicator size={60} color={Colors.primary} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Loading;
