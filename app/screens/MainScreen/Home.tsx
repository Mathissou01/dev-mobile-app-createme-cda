import React, {useState} from "react";
import {RefreshControl, ScrollView, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useGetProductsByCategoryNameQuery, useGetProductsQuery,} from "@/services/products";
import Navbar from "@components/Navbar";
import {View} from "@components/Themed";
import CategoryTabs from "@components/CategoryTabs";
import Offers from "@components/Offers";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("Tous");

    // Utiliser la bonne requête en fonction de la catégorie sélectionnée
    const {data, error, isLoading, refetch} = selectedCategory === "Tous"
        ? useGetProductsQuery()
        : useGetProductsByCategoryNameQuery({categorie_name: "Noel"});


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollInnerContainer}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={refetch}/>
                }
            >
                <Navbar title="Accueil"/>
                <View style={styles.categoriesContainer}>
                    <CategoryTabs
                        selectedCategory={selectedCategory}
                        onSelect={(category: React.SetStateAction<string>) =>
                            setSelectedCategory(category)
                        }
                    />
                </View>
                <View style={styles.offersContainer}>
                    <Offers items={data}/>
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
    },
    scrollInnerContainer: {
        paddingBottom: 70,
    },
    offersContainer: {},
});
