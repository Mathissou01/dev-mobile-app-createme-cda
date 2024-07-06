import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Offers = ({ items }) => {
  const navigation = useNavigation();
  const goToProducts = (productId): void => {
    navigation.navigate("Product", { product_id: productId });
  };

  return (
    <View style={styles.container}>
      {items?.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.offerContainer}
          onPress={() => goToProducts(item.id)}
        >
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.product_image }} style={styles.image} />
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.name}>{item.product_name}</Text>
            <Text style={styles.category}>{item.category.name}</Text>
            <Text style={styles.price}>{item.buying_price} €</Text>
            <Text style={styles.difficulty}>
              {item.difficulty}
              <Ionicons name="star" size={10} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  offerContainer: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    width: "100%",
    height: 150, // augmenter la hauteur pour rendre l'image plus visible
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  itemDetails: {
    textAlign: "left",
    alignItems: "flex-start",
    backgroundColor: "#ef233b8d",
    borderRadius: 20,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 15,
  },
  name: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  category: {
    textAlign: "left",
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  price: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  difficulty: {
    textAlign: "left",
    fontSize: 14,
    color: "#000",
  },
});
