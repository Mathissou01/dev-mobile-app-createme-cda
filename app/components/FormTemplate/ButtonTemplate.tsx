import React, { useEffect, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
import { type ButtonData } from "../../types";
import { startBlinkAnimation } from "../../utils/AnimationLib";
import { CheckIcon } from "../IconComponent";
import styles from "./FormTemplateStyle.js";

const ButtonTemplate = ({ isFormValid, handleSubmit }: ButtonData): React.JSX.Element => {
  const [blinkAnimation] = useState(new Animated.Value(0.5));

  useEffect(() => {
    if (!isFormValid) {
      blinkAnimation.setValue(0.5);
    } else {
      startBlinkAnimation(blinkAnimation, 0.5);
    }
  }, [isFormValid]);

  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={!isFormValid}>
      <Animated.View style={{ opacity: blinkAnimation }}>
        <CheckIcon size={25} color="white" />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ButtonTemplate;
