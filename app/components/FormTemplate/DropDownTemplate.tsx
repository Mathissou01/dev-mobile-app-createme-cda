import React, { type Dispatch, type SetStateAction, useContext } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { colors } from "../../config/styles/01-settings/_colors";
import { type DropDownData } from "../../types";
import { ThemeContext } from "../../hooks/useColorScheme";
import styles from "./FormTemplateStyle.js";

const DropDownTemplate = ({
  modalTitle,
  placeholder,
  open,
  value,
  items,
  setOpen,
  setValue,
  isValid,
  setIsValid = () => {},
  translation = {},
  multiple = false,
  isModal = false,
}: DropDownData<string | null>): React.JSX.Element => {
  const colorTheme = useContext(ThemeContext);

  const handleValueChange: Dispatch<SetStateAction<string[] | null>> = (
    itemValue: SetStateAction<string[] | null>
  ) => {
    if (multiple) {
      const selectedValue = typeof itemValue === "function" ? itemValue() : itemValue;

      const formattedValue = Array.isArray(selectedValue) ? selectedValue : [selectedValue];

      let updatedValue;

      if (multiple) {
        const isItemSelected = value.includes(formattedValue[0]);

        if (isItemSelected) {
          updatedValue = value.filter((item) => item !== formattedValue[0]);
        } else {
          updatedValue = [...value, ...formattedValue];
        }

        setIsValid(updatedValue !== null && updatedValue.length > 0);
      } else {
        updatedValue = formattedValue;
        setIsValid(formattedValue !== null && formattedValue.length > 0);
      }

      setValue(updatedValue);
    } else {
      const selectedValue = typeof itemValue === "function" ? itemValue() : itemValue;
      setValue(selectedValue);
      if (selectedValue && selectedValue.length > 0) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  };

  // Theme color
  const dropdownTheme = colorTheme?.isDark ?? false ? "DARK" : "LIGHT";

  const isValueSelected = multiple
    ? value != null && value.length > 0
    : value !== null && value !== "";

  // DropdowPicker placeholder properties
  DropDownPicker.setLanguage("FR");
  DropDownPicker.addTranslation("FR", {
    PLACEHOLDER: "Sélectionnez un élément",
    SEARCH_PLACEHOLDER: "Chercher un formulaire...",
    SELECTED_ITEMS_COUNT_TEXT: {
      1: "Un formulaire sélectionné",
      n: "{count} formulaires sélectionné",
    },
    NOTHING_TO_SHOW: "Aucun formulaire n'est actuellement disponible !",
    ...translation,
  });

  return (
    <DropDownPicker
      style={[
        styles.dropDown,
        {
          paddingHorizontal: 20,
          paddingVertical: 5,
          fontFamily: "Raleway-Regular",
          ...(isValid === false && { borderColor: "red" }),
          ...((isValueSelected ?? false) && {
            borderColor: colorTheme?.isDark ?? false ? colors.successDark : colors.success,
          }),
        },
      ]}
      modalTitle={modalTitle}
      placeholder={placeholder}
      open={open}
      value={value}
      items={items}
      theme={dropdownTheme}
      setOpen={setOpen}
      setValue={handleValueChange}
      mode="BADGE"
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      modalProps={{
        animationType: "slide",
      }}
      listMode={isModal ? "MODAL" : "SCROLLVIEW"}
      placeholderStyle={{
        ...(isValid === false && { color: "red" }),
      }}
      multiple={multiple}
      customItemLabelStyle={{
        fontFamily: "Raleway-Regular",
      }}
      textStyle={{
        fontFamily: "Raleway-Regular",
      }}
      searchTextInputStyle={{
        fontFamily: "Raleway-Regular",
      }}
      listChildLabelStyle={{
        fontFamily: "Raleway-Regular",
      }}
      listParentLabelStyle={{
        fontFamily: "Raleway-Regular",
      }}
      listItemLabelStyle={{
        fontFamily: "Raleway-Regular",
      }}
      selectedItemLabelStyle={{
        fontFamily: "Raleway-Regular",
      }}
      listMessageTextStyle={{
        fontFamily: "Raleway-Regular",
        textAlign: "center",
      }}
      listItemContainerStyle={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        height: null,
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}
      itemSeparator={true}
      itemSeparatorStyle={{ backgroundColor: colorTheme?.colors.primaryLight }}
    />
  );
};

export default DropDownTemplate;
