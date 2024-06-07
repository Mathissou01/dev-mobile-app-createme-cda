import React from "react";
import { View, Text } from "@/components/Themed";
import styles from "./ModelStepStyle";

const ModalStep = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

export default ModalStep;
