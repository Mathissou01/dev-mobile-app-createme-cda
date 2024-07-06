import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Navbar = ({ title, showBack = false }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.navBar}>
      {showBack ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.leftIcon}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.leftIcon}>
          <View style={styles.titleBar}>
            <Image
              source={require("../../assets/menu-icon.png")}
              style={styles.menuIcon}
            />
            <Text style={styles.title2}>REATEME</Text>
          </View>
          <Text style={styles.title2}>Mathis</Text>
        </TouchableOpacity>
      )}
      <View style={styles.centerTitleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.rightIcon}>
        <Image
          source={require("../../assets/shopping-bag.png")}
          style={styles.shoppingBagIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  leftIcon: {
    flex: 1,
  },
  centerTitleContainer: {
    flex: 2,
    alignItems: "center",
  },
  rightIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
  titleBar: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
  },
  menuIcon: {
    width: 16,
    height: 18,
    tintColor: "#EF233C",
  },
  shoppingBagIcon: {
    width: 19,
    height: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
  },
  title2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#EF233C",
  },
});
