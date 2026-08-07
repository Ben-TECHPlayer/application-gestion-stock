import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ajouter ou modifier ?</Text>
      <Pressable style={styles.button}>Ajouter un produit</Pressable>
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
