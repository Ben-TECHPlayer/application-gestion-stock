import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useProduitStore } from "../../store/ProduitStore";

export default function FormulaireAjoutProduit() {

  const navigation = useNavigation();
  const [nom, setNom] = useState("");
  const [categorie, setCategorie] = useState("");
  const [reference, setReference] = useState("");
  const [seuil, setSeuil] = useState("");
  const [quantite, setQuantite] = useState("");
  const [description, setDescription] = useState("");

  const ajouterProduit = useProduitStore((state) => state.ajouterProduit);

  const creerProduit = () => {
    const produit = {
      nom,
      categorie,
      reference,
      description,
      seuil: Number(seuil),
      quantite: Number(quantite),
      dateMiseAJour: new Date().toISOString(),
    };

    ajouterProduit(produit);

    navigation.navigate("HomeTabs", {
      screen: "Home",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Formulaire de création de produits</Text>
      <View style={styles.containerInputsForm}>
        {/* 
            (nom, référence, catégorie, quantité initiale, seuil d'alerte)
        */}
        <TextInput 
          style={styles.inputForm} 
          value={nom}
          onChangeText={setNom}
          placeholder="Le nom du produit" 
        />

        <TextInput
          style={styles.inputForm}
          value={reference}
          onChangeText={(text) => setReference(text.replace(/[^a-zA-Z0-9]/g, "").toUpperCase())}
          autoCapitalize="characters"
          placeholder="La référence du produit"
        />

        <TextInput
          style={styles.inputForm}
          value={categorie}
          onChangeText={setCategorie}
          placeholder="La catégorie du produit"
        />

        <TextInput
          style={styles.inputForm}
          value={description}
          onChangeText={setDescription}
          placeholder="La description du produit"
        />

        <TextInput
          style={styles.inputForm}
          value={quantite}
          onChangeText={(text) => setQuantite(text.replace(/[^0-9]/g, ""))}
          placeholder="La quantité initiale du produit"
        />

        <TextInput
          style={styles.inputForm}
          value={seuil}
          onChangeText={(text) => setSeuil(text.replace(/[^0-9]/g, ""))}
          placeholder="Le seuil d'alerte du produit"
        />
        <Pressable style={styles.button} onPress={creerProduit} >
          <Text style={styles.textButton}>Créer le produit</Text>
        </Pressable>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 34,
    fontFamily: "Samsung Sharp Sans",
    textAlign: "center",
  },
  containerInputsForm: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "lime",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    width: "150%",
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
  },
  inputForm: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 10,
    width: "150%",
  },
});
