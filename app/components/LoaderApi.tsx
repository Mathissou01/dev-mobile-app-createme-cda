import React, { useContext } from "react";
import { Modal, StyleSheet } from "react-native";
import { View } from "@components/Themed";
import LottieView from "lottie-react-native";
import { ThemeContext } from "@hooks/useColorScheme";

const LoaderApi = ({
  visible = true,
}: {
  visible?: boolean;
}): React.JSX.Element => {
  const colorTheme = useContext(ThemeContext);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <LottieView
            source={require("../../assets/json/loader.json")}
            autoPlay
            loop
            height={250}
            width={250}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "100%",
    height: 300,
  },
});

export default LoaderApi;
