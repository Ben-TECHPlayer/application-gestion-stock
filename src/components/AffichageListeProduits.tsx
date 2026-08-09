import { Pressable, StyleSheet, Text, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useProduitStore } from "../store/ProduitStore";

export default function AffichageListeProduits() {

  const produits = useProduitStore((state) => state.produits);

  const navigation = useNavigation();
  
  const selectionnerProduit = useProduitStore(
    (state) => state.selectionnerProduit
  );

  return (
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
    borderColor: "black",
    borderWidth: 1,
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
