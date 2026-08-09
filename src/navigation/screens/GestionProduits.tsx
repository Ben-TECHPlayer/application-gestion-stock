import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GestionProduits() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Que voulez-vous faire ?</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("FormulaireAjoutProduit")}
      >
        <Text style={styles.textButton}>Ajouter un produit</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Modifier un produit</Text>
      </Pressable>
      {/* <Pressable style={styles.button}>
        <Text style={styles.textButton}>Supprimer un produit</Text>
      </Pressable> */}
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
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
  },
});
