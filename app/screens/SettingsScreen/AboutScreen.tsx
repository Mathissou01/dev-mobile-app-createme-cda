import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "../../components/Themed";
import { type ContentItem, type ContentType, type Props } from "../../types";
import { Entypo } from "@expo/vector-icons";
import { ThemeContext } from "../../hooks/useColorScheme";
import { hexToRgbA } from "../../utils/hexToRgbA";
import { colors } from "../../config/styles/01-settings/_colors";
import styles from "./AboutScreenStyle.js";

export default function AboutScreen({ navigation }: Props): React.JSX.Element {
  const themeColor = useContext(ThemeContext);

  const contentTypes: ContentItem[] = [
    {
      id: 1,
      name: "Politique de confidentialité",
      contentType: "confidentialityPolicy",
    },
    {
      id: 2,
      name: "Conditions d'utilisation",
      contentType: "thermOfUsePolicy",
    },
    {
      id: 3,
      name: "Mentions légales",
      contentType: "legalMentionPolicy",
    },
    {
      id: 4,
      name: "Règlement FR & UE",
      contentType: "EuropeanReglementationPolicy",
    },
  ];

  const navigateToContent = (contentType: ContentType): void => {
    navigation.navigate("ContentPolicyScreen", { contentType });
  };

  const renderCategoryList = (item: ContentItem): React.JSX.Element => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigateToContent(item.contentType);
        }}
      >
        <View
          style={[
            styles.blockParameter,
            {
              borderColor:
                themeColor?.isDark ?? false
                  ? hexToRgbA(colors.white, 0.07)
                  : colors.gray200,
            },
          ]}
          darkColor={hexToRgbA(colors.white, 0.07)}
          lightColor={colors.white}
        >
          <Text
            style={[{ marginLeft: 10 }, styles.text]}
            darkColor={colors.textDark}
            lightColor={colors.textLight}
          >
            {item.name}
          </Text>
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              alignItems: "flex-end",
            }}
          >
            <Entypo
              name="chevron-right"
              size={20}
              style={[
                styles.icon,
                {
                  color:
                    themeColor?.isDark ?? false
                      ? hexToRgbA(colors.white, 0.5)
                      : colors.black,
                  backgroundColor:
                    themeColor?.isDark ?? false
                      ? hexToRgbA(colors.white, 0.16)
                      : colors.gray200,
                },
              ]}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            themeColor?.isDark ?? false
              ? colors.backgroundDark
              : colors.backgroundDefault,
        },
      ]}
    >
      <View style={{ backgroundColor: "transparent" }}>
        <FlatList
          scrollEnabled={false}
          data={contentTypes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderCategoryList(item)}
        />
      </View>
    </SafeAreaView>
  );
}
