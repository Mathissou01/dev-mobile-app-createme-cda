import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const Offers = ({ items }) => {
  const navigation = useNavigation();
  const goToProducts = (productId): void => {

    navigation.navigate("Product", { product_id: productId });
  };

  return (
    <View style={styles.container}>
      {items?.map((item, index) => (
        <TouchableOpacity key={index} style={styles.offerContainer} onPress={() => goToProducts(item.id)}>
          <View style={styles.offerDetails}>
            <View
              style={[styles.imageContainer, { backgroundColor: item.color }]}
            >
              <Image
                source={{ uri: item.product_image }}
                style={styles.image}
              />
            </View>
            <View style={styles.itemDetails}>
              <Text style={styles.name}>{item.product_name}</Text>
              <Text style={styles.category}>{item.category.name}</Text>
            </View>
          </View>
          <Text style={styles.price}>{item.buying_price} €</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    marginBottom: 25,
  },
  offerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  price: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
  },
  offerDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 77,
    height: 34,
  },
  imageContainer: {
    paddingVertical: 20,
    borderRadius: 10,
  },
  itemDetails: {
    marginLeft: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
  },
  category: {
    fontSize: 12,
    color: "#ACB1BE",
    fontWeight: "500",
  },
});
