import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useProduitStore } from "../../store/ProduitStore";

export default function DetailsProduit() {

  const produit = useProduitStore(
    (state) => state.produitSelectionne
  );

  const modifierQuantite = useProduitStore(
  (state) => state.modifierQuantite
);

  if (!produit) {
    return (
      <View>
        <Text>Aucun produit sélectionné.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{produit.nom}</Text>

      <View style={styles.containerProduit}>
        <Text>Référence : {produit.reference}</Text>
        {/* <Text>Description : à mettre </Text> */}
        <Text>Catégorie : {produit.categorie}</Text>
        <Text>Quantité en stock : {produit.quantite}</Text>
        <Text>Seuil : {produit.seuil}</Text>

        <Text>
          {produit.quantite === 0
            ? "🔴 Rupture"
            : produit.quantite <= produit.seuil
            ? "🟡 Faible"
            : "🟢 Normal"}
        </Text>
        {/* <Text>Dernière mise à jour : à mettre à l'instant T</Text> */}
        <View style={styles.viewButton}>
            <Pressable
              style={styles.button}
              onPress={() =>
                modifierQuantite(
                  produit.reference,
                  produit.quantite + 1
                  )
              }
            >
                <Text style={styles.textButton}>+</Text>
            </Pressable>
            <Pressable
              style={styles.button}
                onPress={() =>
                  modifierQuantite(
                  produit.reference,
                  Math.max(0, produit.quantite - 1)
                  )
              }
            >
                <Text style={styles.textButton}>-</Text>
            </Pressable>
        </View>
      </View>
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
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    gap: 10,
    // padding: 12,
  },
  viewButton: {
    display: "flex",
    flexDirection: "row",
    gap: "32",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "lime",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
  },
//   infoProduit: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   stockProduit: {
//     display: "flex",
//     flexDirection: "column",
//   },
});
