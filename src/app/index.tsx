import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Liste des produits</Text>
      {/* 
        <FlatList></FlatList>
      */}
      <View style={styles.containerProduit}>
        <View style={styles.infoProduit}>
          <Text>Produit</Text>
          <Text>Catégorie</Text>
        </View>
        <View style={styles.stockProduit}>
          <Text>Seuil</Text>
          <Text>Quantité</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 34,
    fontFamily: "Samsung Sharp Sans",
    textAlign: "center",
  },
  containerProduit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // gap: 160,
  },
  infoProduit: {
    display: "flex",
    flexDirection: "column",
  },
  stockProduit: {
    display: "flex",
    flexDirection: "row",
    gap: 32,
  },
});
