import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function GestionProduits({ navigation }) {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Que voulez-vous faire ?</Text>

      <Button
        title="Ajouter un produit"
        style={styles.button}
        onPress={() => navigation.navigate("FormulaireAjoutProduit")}
      ></Button>
      <Pressable style={styles.button}>Modifier un produit</Pressable>
      <Pressable style={styles.button}>Supprimer un produit</Pressable>
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
    color: "white",
    backgroundColor: "#007BFF",
    padding: 10,
    fontSize: 24,
    borderRadius: 8,
  },
});
