import React, { useState } from "react";
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useGetProductsByCategoryNameQuery,
  useGetProductsQuery,
} from "@/services/products";
import Navbar from "@components/Navbar";
import { View } from "@components/Themed";
import CategoryTabs from "@components/CategoryTabs";
import Offers from "@components/Offers";
import InputTemplate from "@/components/FormTemplate/InputTemplate";
import OffersChristmas from "@/components/OffersChristmas";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Utiliser la bonne requête en fonction de la catégorie sélectionnée
  const { data, error, isLoading, refetch } =
    selectedCategory === "Tous"
      ? useGetProductsQuery()
      : useGetProductsByCategoryNameQuery({ categorie_name: "Noel" });

  const [searchValue, setSearchValue] = useState("");
  const width = Dimensions.get("window").width;

  // Filtrer et trier les produits
  const filteredAndSortedData = data
    ?.filter((product) =>
      product.product_name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => a.product_name.localeCompare(b.product_name));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollInnerContainer}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      >
        <Navbar title="Accueil" />
        <View style={{ marginHorizontal: width * 0.04 }}>
          <InputTemplate
            value={searchValue}
            placeholder="Rechercher..."
            onChangeText={(text) => {
              setSearchValue(text);
            }}
            secureTextEntry={false}
            multiline={false}
            hasToBeChecked={false}
            searchInput={true}
          />
        </View>
        <View style={styles.categoriesContainer}>
          <CategoryTabs
            selectedCategory={selectedCategory}
            onSelect={(category: React.SetStateAction<string>) =>
              setSelectedCategory(category)
            }
          />
        </View>
        <View style={styles.offersContainer}>
          {selectedCategory === "Mes meubles" ? (
            <OffersChristmas />
          ) : (
            <Offers items={filteredAndSortedData} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  categoriesContainer: {
    marginTop: 25,
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  scrollInnerContainer: {
    backgroundColor: "transparent",
    paddingBottom: 70,
  },
  offersContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
