import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { Text, View } from "../../components/Themed";
import { type DateTimePickerType } from "../../types";
import { ThemeContext } from "../../hooks/useColorScheme";
import { colors } from "../../config/styles/01-settings/_colors";
import { CalendarIcon } from "../IconComponent";
import styles from "./DateTimePickerTemplateStyle.js";

export default function DateTimePickerTemplate({
  date,
  setDate,
}: DateTimePickerType): React.JSX.Element {
  const placeholder = "Choisissez une date";
  const [open, setOpen] = useState(false);

  const colorTheme = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => {
        setOpen(true);
      }}
    >
      <DatePicker
        theme={"light"}
        modal
        open={open}
        date={date instanceof Date ? date : new Date(date)}
        mode="date"
        locale={"fr"}
        title={"Date de naissance"}
        cancelText="Annuler"
        confirmText="Confirmer"
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <View
        style={[
          styles.containerDateBtn,
          { backgroundColor: colorTheme?.isDark ?? false ? colors.inputDark : colors.white },
        ]}
      >
        <Text>
          {(date instanceof Date ? date?.toLocaleDateString("fr-FR") : date) ?? placeholder}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setOpen(true);
          }}
        >
          <CalendarIcon
            size={24}
            color={colorTheme?.isDark ?? false ? colors.white : colors.black}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
