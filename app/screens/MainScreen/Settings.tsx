import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ScrollView, Text, View } from "@components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import {
  type elementCategory,
  type itemNavigation,
  type RootTabScreenProps,
} from "../types";
import { colors } from "../../config/styles/01-settings/_colors";
import { ThemeContext } from "@hooks/useColorScheme";
import styles from "./SettingsScreenStyle.js";

export default function Settings({
  navigation,
}: RootTabScreenProps<"ParametersScreen">): React.JSX.Element {
  const themeColor = useContext(ThemeContext);

  const [categoryList] = useState<itemNavigation[]>([
    {
      id: 1,
      name: "Modifier mes informations",
      url: "UserEditScreen",
      category: "contenu",
      nameIcon: "edit",
    },
    {
      id: 2,
      name: "Notifications",
      url: "NotificationScreen",
      category: "préférences",
      nameIcon: "bell",
    },
    {
      id: 3,
      name: "Sécurité",
      url: "SecurityScreen",
      category: "contenu",
      nameIcon: "unlock",
    },
    {
      id: 4,
      name: "Aide",
      url: "HelpScreen",
      category: "informations",
      nameIcon: "message-circle",
    },
    {
      id: 5,
      name: "A propos",
      url: "AboutScreen",
      category: "informations",
      nameIcon: "help-circle",
    },
    {
      id: 6,
      name: "Déconnexion",
      url: "LogOut",
      category: "autre",
      nameIcon: "log-out",
    },
  ]);

  function renderCategoryList(
    item: itemNavigation,
    _index: number
  ): React.JSX.Element {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.url === "LogOut") {
            navigation.reset({
              index: 1,
              routes: [{ name: item.url }],
            });
          } else navigation.navigate(item.url, {});
        }}
      >
        <View
          style={[
            styles.blockParameter,
            {
              borderColor:
                themeColor?.isDark ?? false ? "transparent" : colors.gray200,
            },
          ]}
          darkColor={"rgba(255, 255, 255, 0.07)"}
          lightColor={colors.white}
        >
          <Feather
            name={item.nameIcon}
            size={20}
            style={{
              color:
                themeColor?.isDark ?? false
                  ? colors.textDark
                  : colors.textLight,
            }}
          />
          <Text
            lightColor={colors.textLight}
            darkColor={colors.textDark}
            style={[{ marginLeft: 10 }, styles.subCategory]}
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
                      ? "rgba(255, 255, 255, 0.5)"
                      : colors.black,
                  backgroundColor:
                    themeColor?.isDark ?? false
                      ? "rgba(255, 255, 255, 0.16)"
                      : colors.gray200,
                },
              ]}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const categories = categoryList.reduce((element: elementCategory, item) => {
    if (item.category !== undefined) {
      if (element[item.category] === undefined) {
        element[item.category] = [];
      }
      element[item.category].push(item);
    }
    return element;
  }, {});

  return (
    <ScrollView
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      lightColor={colors.backgroundDefault}
      darkColor={colors.backgroundDark}
    >
      <SafeAreaView
        edges={["bottom", "left", "right"]}
        style={[
          styles.container,
          {
            backgroundColor:
              themeColor?.isDark ?? false
                ? colors.backgroundDark
                : colors.backgroundDefault,
            marginTop: 20,
          },
        ]}
      >
        {Object.keys(categories).map((category, index) => {
          return (
            <View key={index} style={{ backgroundColor: "transparent" }}>
              <View style={styles.titleCategory}>
                <Text
                  style={styles.textCategory}
                  lightColor={colors.textLight}
                  darkColor={colors.textDark}
                >
                  {category}
                </Text>
              </View>
              <FlatList
                scrollEnabled={false}
                data={categories[category]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) =>
                  renderCategoryList(item, index)
                }
              />
            </View>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
}
