import { SafeAreaView, TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import AffichageListeProduits from "../../components/AffichageListeProduits";
import { useProduitStore } from "../../store/ProduitStore";

export default function Home() {

  const [searchQuery, setSearchQuery] = useState("");
  const [categorieSelectionnee, setCategorieSelectionnee] = useState("");
  const [filtreOuvert, setFiltreOuvert] = useState(false);

  const produits = useProduitStore((state) => state.produits);

  const categories = [...new Set(produits.map((produit) => produit.categorie))];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filtres}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Rechercher"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <Pressable
          style={styles.boutonFiltre}
          onPress={() => setFiltreOuvert(!filtreOuvert)}
        >
          <Text>
            {categorieSelectionnee || "Catégorie"} ▼
          </Text>
        </Pressable>
      </View>

      {filtreOuvert && (
        <View style={styles.listeCategories}>
          <Pressable
            onPress={() => {
              setCategorieSelectionnee("");
              setFiltreOuvert(false);
            }}
          >
            <Text style={styles.categorie}>Toutes</Text>
          </Pressable>

          {categories.map((categorie) => (
            <Pressable
              key={categorie}
              onPress={() => {
                setCategorieSelectionnee(categorie);
                setFiltreOuvert(false);
              }}
            >
              <Text style={styles.categorie}>{categorie}</Text>
            </Pressable>
          ))}
        </View>
      )}
      
      <Text style={styles.text}>Liste des produits</Text>
      
      <AffichageListeProduits searchQuery={searchQuery} categorieSelectionnee={categorieSelectionnee} />
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
  inputSearch: {
    backgroundColor: "white",
    borderRadius: 8,
    flex: 1,
    padding: 10,
    marginRight: 10,
  },
  filtres: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  boutonFiltre: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
  },
  listeCategories: {
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 5,
    padding: 10,
    alignItems: "flex-end",
  },

  categorie: {
    padding: 10,
  },
});
