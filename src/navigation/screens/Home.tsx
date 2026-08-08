import { SafeAreaView, TextInput, StyleSheet, Text, View, ScrollView } from "react-native";
import { SearchBar } from "react-native-screens";
import { useState } from "react";
import { useProduitStore } from "../../store/ProduitStore";

export default function Home() {
  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // }

  const [searchQuery, setSearchQuery] = useState("");

  // const produit = {
  //   nom: "",
  //   categorie: "",
  //   seuil: 0,
  //   quantite: 0,
  // };

  // const [produits, setProduits] = useState<Produit[]>([]);

  const produits = useProduitStore((state) => state.produits);

  console.log("Produits dans Home :", produits);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Liste des produits</Text>
      <TextInput
        style={styles.inputSearch}
        placeholder="Rechercher"
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        value={searchQuery}
        // onChangeText={(query) => handleSearch(query)}
      />
      {/* 
        <FlatList></FlatList>
      */}
      <ScrollView>
      {produits.map((produit) => (
      <View style={styles.containerProduit} key={produit.reference}>
        <View style={styles.infoProduit}>
          <Text>{produit.nom}</Text>
          <Text>Catégorie : {produit.categorie}</Text>
        </View>
        <View style={styles.stockProduit}>
          <Text>Seuil : {produit.seuil}</Text>
          <Text>Quantité : {produit.quantite}</Text>
        </View>
      </View>
      ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "red",
    fontSize: 34,
    fontFamily: "Samsung Sharp Sans",
    textAlign: "center",
    marginTop: 16,
  },
  containerProduit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    padding: 12,
  },
  infoProduit: {
    display: "flex",
    flexDirection: "column",
  },
  stockProduit: {
    display: "flex",
    flexDirection: "row",
    gap: 32,
  },
  inputSearch: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 16,
    width: "100%",
  },
});
