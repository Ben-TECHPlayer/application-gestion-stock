import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
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

const setModeDetails = useProduitStore(
  (state) => state.setModeDetails
);

const [nom, setNom] = useState("");
const [categorie, setCategorie] = useState("");
const [description, setDescription] = useState("");
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
      <View style={styles.textBlocProduit}>
        <TextInput
          style={styles.inputForm}
          value={nom}
          onChangeText={setNom}
          placeholder="Nom"
        />

        <TextInput
          style={styles.inputForm}
          value={categorie}
          onChangeText={setCategorie}
          placeholder="Catégorie"
        />

        <TextInput
          style={styles.inputForm}
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
        />

        <TextInput
          style={styles.inputForm}
          value={quantite}
          onChangeText={(text) => setQuantite(text.replace(/[^0-9]/g, ""))}
          placeholder="Quantité"
        />

        <TextInput
          style={styles.inputForm}
          value={seuil}
          onChangeText={(text) => setSeuil(text.replace(/[^0-9]/g, ""))}
          placeholder="Seuil"
        />

        <Pressable
          style={styles.button}
          onPress={() => {
            modifierProduit(produit.reference, {
              ...produit,
              nom: nom,
              categorie: categorie,
              description: description,
              seuil: Number(seuil),
              quantite: Number(quantite),
            });

            setModeDetails("consultation");
          }}
        >
          <Text style={styles.textButton}>
            Enregistrer les modifications
          </Text>
        </Pressable>
      </View>
    ) : (
      <View style={styles.textBlocProduit}>
        <Text>Référence : {produit.reference}</Text>
        <Text>Catégorie : {produit.categorie}</Text>
        <Text>Descripiton : {produit.description}</Text>
        <Text>Quantité en stock : {produit.quantite}</Text>
        <Text>Seuil : {produit.seuil}</Text>

        <Text>
          {produit.quantite === 0
            ? "🔴 Rupture"
            : produit.quantite <= produit.seuil
            ? "🟡 Faible"
            : "🟢 Normal"}
        </Text>
        <Text>
           Dernière mise à jour :{" "}
            {new Date(produit.dateMiseAJour).toLocaleString("fr-FR")}
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
    textAlign: "center",
    marginTop: 16,
  },
  containerDetailsProduit: {
    display: "flex",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    // padding: 12,
  },
  textBlocProduit: {
    gap: 12,
  },
  inputForm: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
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
