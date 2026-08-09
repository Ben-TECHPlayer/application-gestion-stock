import { SafeAreaView, Pressable, TextInput, StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useProduitStore } from "../../store/ProduitStore";

export default function Home() {
  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // }

  const [searchQuery, setSearchQuery] = useState("");

  const produits = useProduitStore((state) => state.produits);

  const navigation = useNavigation();
  
  const selectionnerProduit = useProduitStore(
    (state) => state.selectionnerProduit
  );

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
          <Pressable
            key={produit.reference}
            style={styles.containerProduit}
            onPress={() => {
              selectionnerProduit(produit);
              navigation.navigate("DetailsProduit");
            }}
          >
            <View style={styles.infoProduit}>
              <Text>{produit.nom}</Text>
              <Text>Catégorie : {produit.categorie}</Text>
            </View>

            <View style={styles.stockProduit}>
              <Text>Quantité : {produit.quantite}</Text>

              <Text>
                {produit.quantite === 0
                  ? "🔴 Rupture"
                  : produit.quantite <= produit.seuil
                  ? "🟡 Faible"
                  : "🟢 Normal"}
              </Text>

              <Text>Seuil : {produit.seuil}</Text>
            </View>
          </Pressable>
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
    flexDirection: "column",
  },
  inputSearch: {
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 16,
    padding: 10,
    width: "100%",
  },
});
