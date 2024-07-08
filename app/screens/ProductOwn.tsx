import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Navbar from "@components/Navbar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

// Mock data for the product
const data = {
  product_name: "Lanterne en bois",
  product_image: "https://example.com/image1.jpg",
  difficulty: 4,
  description:
    "Ajoutez une touche magique à vos décorations de Noël avec la Lanterne de Noël. Cette lanterne exquise diffuse une lumière douce et chaleureuse grâce à son design élégant et festif. Parfaite pour éclairer vos soirées d'hiver et créer une atmosphère accueillante, elle est dotée d'un motif détaillé inspiré des fêtes. Fabriquée avec des matériaux de haute qualité, cette lanterne est non seulement décorative mais aussi durable, garantissant une utilisation saison après saison. Offrez-vous ou offrez à vos proches cette Lanterne de Noël et transformez votre intérieur en un havre de paix illuminé de la magie des fêtes.",
};

const ProductOwn = () => {
  const navigation = useNavigation();

  const handleOpenNotice = () => {
    // Naviguez vers la page 'Step' lorsque le bouton est pressé
    navigation.navigate("Favorites");
  };

  const handleOpenAR = () => {
    // Naviguez vers la page 'Step' lorsque le bouton est pressé
    navigation.navigate("CameraPage");
  };

  return (
    <View style={styles.container}>
      <Navbar title="Product" showBack={true} />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollInnerContainer}
      >
        <Image
          source={{ uri: "https://i.ibb.co/981rQzp/IMG-1445.png" }}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <View style={styles.detailsRow}>
            <Text style={styles.productName}>{data.product_name}</Text>
            <TouchableOpacity onPress={handleOpenAR}>
              <Ionicons name="camera-sharp" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingRow}>
            {Array.from({ length: data.difficulty }).map((_, index) => (
              <Ionicons
                name="star"
                size={20}
                color="black"
                style={styles.starIcon}
                key={index}
              />
            ))}
          </View>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleOpenNotice}>
          <Image
            source={require("../../assets/shopping-bag.png")}
            style={styles.shoppingBagIcon}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Ouvrir la notice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductOwn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    marginTop: 20,
    marginBottom: 10,
    width: "45%",
    height: "auto",
    aspectRatio: 2 / 3,
    alignSelf: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollInnerContainer: {
    paddingBottom: 30,
  },
  contentContainer: {
    paddingHorizontal: 25,
  },
  productName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  ratingRow: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: "row",
  },
  starIcon: {
    marginRight: 5,
  },
  colorTitle: {
    fontSize: 13,
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
  },
  colorsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorContainer: {
    marginRight: 12,
  },
  activeColorContainer: {
    padding: 3,
    backgroundColor: "white",
    borderRadius: 16,
    elevation: 2,
  },
  colorDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  description: {
    fontSize: 13,
    fontWeight: "500",
    marginVertical: 24,
    color: "#3F3F3F",
    lineHeight: 25,
  },
  buttonContainer: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  shoppingBagIcon: {
    width: 12,
    height: 17,
    tintColor: "white",
    marginRight: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
