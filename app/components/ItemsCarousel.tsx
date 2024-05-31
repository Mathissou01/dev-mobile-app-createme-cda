import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

const ItemsCarousel = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Appel de la fonction fetchProducts depuis les props
    fetchProducts();
  }, []); // Supprimez fetchProducts du tableau de dépendances

  console.log("products", products);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Product")}
        style={[styles.item, { backgroundColor: item.color }]}
      >
        <View style={styles.itemHeader}>
          {item.isNew ? <Text style={styles.headerText}>New</Text> : <View />}
          <TouchableOpacity>
            <Ionicon
              name={item.isLiked ? "heart" : "heart-outline"}
              size={18}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: item.product_image }} style={styles.itemImage} />
        <Text style={styles.title}>{item.product_name}</Text>
        <Text style={styles.price}>${item.buying_price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemsCarousel);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  item: {
    flex: 1, // Pour occuper la moitié de l'écran
    padding: 15,
    borderRadius: 15,
    margin: 5, // Ajout de la marge entre les éléments de la grille
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 12,
  },
  itemImage: {
    width: "100%", // Pour occuper toute la largeur du conteneur
    height: "auto",
    aspectRatio: 2 / 3,
    alignSelf: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 13,
    fontWeight: "500",
    color: "#ACB1BE",
    marginTop: 3,
  },
});
