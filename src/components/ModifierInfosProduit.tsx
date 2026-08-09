import { StyleSheet, Text, View, TextInput } from "react-native";
import { useProduitStore } from "../store/ProduitStore";
import { useState } from "react";

export default function ModifierInfosProduit() {

  const produit = useProduitStore(
    (state) => state.produitSelectionne
  );

  const modeDetails = useProduitStore(
  (state) => state.modeDetails
);

const modifierProduit = useProduitStore(
  (state) => state.modifierProduit
);

const [nom, setNom] = useState("");
const [categorie, setCategorie] = useState("");
const [seuil, setSeuil] = useState("");
const [quantite, setQuantite] = useState("");

//   const modifierQuantite = useProduitStore(
//   (state) => state.modifierQuantite
// );

  if (!produit) {
    return (
      <View>
        <Text>Aucun produit sélectionné.</Text>
      </View>
    );
  }

  return (
  <View style={styles.containerDetailsProduit}>
    {modeDetails === "modification" ? (
      <View>
        <TextInput
          value={nom}
          onChangeText={setNom}
          placeholder="Nom"
        />

        <TextInput
          value={categorie}
          onChangeText={setCategorie}
          placeholder="Catégorie"
        />

        <TextInput
          value={seuil}
          onChangeText={setSeuil}
          placeholder="Seuil"
          keyboardType="numeric"
        />

        <TextInput
          value={quantite}
          onChangeText={setQuantite}
          placeholder="Quantité"
          keyboardType="numeric"
        />
      </View>
    ) : (
      <View>
        <Text>Référence : {produit.reference}</Text>
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
      </View>
    )}
  </View>
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
  containerDetailsProduit: {
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
