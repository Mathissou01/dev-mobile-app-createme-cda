import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "../../components/Themed";
import { ThemeContext } from "../../hooks/useColorScheme";
import { type LabelData } from "../../types";
import styles from "./FormTemplateStyle.js";
import { colors } from "../../config/styles/01-settings/_colors";

const LabelTemplate = ({ name, required, isDefault }: LabelData): React.JSX.Element => {
  const themeContext = useContext(ThemeContext);

  const [randomWidth, setRandomWidth] = useState(30);
  // Keep same size after render
  useEffect(() => {
    setRandomWidth(30 + Math.random() * 10);
  }, []);

  // Conditionally set the backgroundColor of progressBarStyle.line
  const lineBackgroundColor = isDefault ?? false ? "#21a5ff" : themeContext?.colors?.primary;

  return (
    <View style={styles.containerLabel}>
      <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
        <Text style={styles.labelText} darkColor={colors.gray300} lightColor={colors.black}>{name}</Text>
        {required && <Text style={styles.requiredAsterisk} darkColor={colors.primaryColorDark} lightColor={colors.primaryColor}>*</Text>}
      </View>
      <View style={[styles.line, { width: randomWidth, backgroundColor: lineBackgroundColor }]} />
    </View>
  );
};

export default LabelTemplate;
