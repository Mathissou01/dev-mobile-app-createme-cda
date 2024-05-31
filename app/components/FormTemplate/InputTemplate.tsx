import React, { useContext, useEffect, useState } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { TextInput } from "../Themed";
import { type InputData } from "../../types";
import { ThemeContext } from "../../hooks/useColorScheme";
import { colors } from "../../config/styles/01-settings/_colors";
import {
  EyeOnIcon,
  EyeOffIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  AboutIcon,
  SearchIcon,
} from "../IconComponent";
import styles from "./FormTemplateStyle.js";

const InputTemplate = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  showPassword,
  switchPasswordVisibility,
  multiline,
  numberOfLines,
  regex = /(?:)/,
  hasToBeChecked = true,
  editable = true,
  isVerify = true,
  searchInput = false,
}: InputData): React.JSX.Element => {
  const colorTheme = useContext(ThemeContext);

  const [isValid, setIsValid] = useState(false);

  const testRegexp = (toTest: string): boolean => {
    if (Array.isArray(regex)) return !regex.map((reg) => reg.test(toTest)).includes(false);
    else return regex.test(toTest);
  };

  useEffect(() => {
    if (hasToBeChecked) {
      const isEmpty = value.length === 0 || value.trim() === "";
      setIsValid(() => {
        return isEmpty ? false : testRegexp(value);
      });
    } else {
      setIsValid(true);
    }
  }, [value, hasToBeChecked, editable, testRegexp(value)]);

  return (
    <View>
      <TextInput
        lightColor={colors.textDark}
        darkColor={colors.textLight}
        style={[
          styles.inputField,
          {
            borderColor:
              value === "" || !hasToBeChecked || !editable
                ? !isVerify
                  ? "red"
                  : "gray"
                : isValid
                ? colorTheme?.isDark ?? false
                  ? colors.successDark
                  : colors.success
                : colorTheme?.isDark ?? false
                ? colors.errorDark
                : colors.error,
            padding: Platform.OS === "ios" ? 10 : 10,
            paddingHorizontal: Platform.OS === "ios" ? 15 : 15,
            ...(searchInput && {
              paddingLeft: 45,
            }),
            backgroundColor: editable
              ? colorTheme?.isDark ?? false
                ? colors.inputDark
                : colors.white
              : colorTheme?.isDark ?? false
              ? colors.gray800
              : colors.gray200,
            ...(multiline &&
              Platform.OS === "android" && {
                textAlignVertical: "top",
              }),
            ...(multiline &&
              Platform.OS === "ios" && {
                paddingTop: 15,
                minHeight: 15 * 2 + (numberOfLines ?? 1) * 16,
              }),
          },
        ]}
        placeholderTextColor={colorTheme?.isDark ?? false ? colors.textDark : colors.textLight}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={!(showPassword ?? false) && secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
      />
      <View
        style={[
          styles.iconContainer,
          {
            right: Platform.OS === "ios" ? (secureTextEntry ? 60 : 15) : secureTextEntry ? 60 : 20,
            top: Platform.OS === "ios" ? 10 : 14,
          },
        ]}
      >
        {editable ? (
          hasToBeChecked &&
          value !== "" && (
            <View style={styles.validIcon}>
              {isValid ? (
                <CheckCircleIcon
                  size={22}
                  color={colorTheme?.isDark ?? false ? colors.successDark : colors.success}
                />
              ) : (
                <AboutIcon
                  size={22}
                  color={colorTheme?.isDark ?? false ? colors.errorDark : colors.error}
                />
              )}
            </View>
          )
        ) : (
          <View style={styles.validIcon}>
            {value.length > 0 ? (
              <CheckCircleIcon
                size={22}
                color={colorTheme?.isDark ?? false ? colors.successDark : colors.success}
              />
            ) : (
              <CloseCircleIcon
                size={22}
                color={colorTheme?.isDark ?? false ? colors.errorDark : colors.error}
              />
            )}
          </View>
        )}
      </View>

      {secureTextEntry && (
        <View
          style={[
            styles.icon,
            { borderLeftColor: colorTheme?.isDark ?? false ? colors.white : colors.black },
          ]}
        >
          <TouchableOpacity
            onPress={switchPasswordVisibility}
            hitSlop={{ left: 15, right: 15, top: 15, bottom: 15 }}
          >
            {showPassword ?? false ? (
              <EyeOnIcon
                size={22}
                color={colorTheme?.isDark ?? false ? `${colors.textDark}D4` : "#666"}
              />
            ) : (
              <EyeOffIcon
                size={22}
                color={colorTheme?.isDark ?? false ? `${colors.textDark}D4` : "#666"}
              />
            )}
          </TouchableOpacity>
        </View>
      )}

      {searchInput && (
        <View style={styles.iconSearch}>
          <SearchIcon
            size={22}
            color={colorTheme?.isDark ?? false ? `${colors.textDark}D4` : "#666"}
          />
        </View>
      )}
    </View>
  );
};

export default InputTemplate;
