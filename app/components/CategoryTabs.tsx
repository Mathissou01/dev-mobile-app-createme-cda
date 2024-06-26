import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const categories = ["Tous", "Saisons", "Mes meubles"];

const CategoryTabs = ({ selectedCategory, onSelect }) => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => {
        const isSelected = category === selectedCategory;
        return (
          <View key={index} style={styles.categoryContainer}>
            <TouchableOpacity onPress={() => onSelect(category)}>
              <Text style={styles.category}>{category}</Text>
            </TouchableOpacity>
            {isSelected && <View style={styles.selectedIndicator} />}
          </View>
        );
      })}
    </View>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginRight: 40,
  },
  category: {
    fontSize: 18,
    fontWeight: "500",
    backgroundColor: "transparent",
    color: "black",
  },
  selectedIndicator: {
    width: 12,
    height: 3,
    backgroundColor: "black",
    borderRadius: 3,
  },
});
