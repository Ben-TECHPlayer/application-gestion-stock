import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function FormulaireAjoutProduit() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Formulaire de création de produits</Text>
      <View style={styles.containerInputsForm}>
        {/* 
            (nom, référence, catégorie, quantité initiale, seuil d'alerte)
        */}
        <TextInput style={styles.inputForm} placeholder="Le nom du produit" />
        <TextInput
          style={styles.inputForm}
          placeholder="La référence du produit"
        />
        <TextInput
          style={styles.inputForm}
          placeholder="La catégorie du produit"
        />
        <TextInput
          style={styles.inputForm}
          placeholder="La quantité initiale du produit"
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Le seuil d'alerte du produit"
        />
        <Pressable style={styles.button}>Créer le produit</Pressable>
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
    textAlign: "center",
    color: "white",
    backgroundColor: "lime",
    padding: 10,
    fontSize: 24,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
  },
  inputForm: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
  },
});
