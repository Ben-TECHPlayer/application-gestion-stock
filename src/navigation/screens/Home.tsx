import { SafeAreaView, TextInput, StyleSheet, Text, ScrollView } from "react-native";
import { useState } from "react";
import AffichageListeProduits from "../../components/AffichageListeProduits";

export default function Home() {
  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // }

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.inputSearch}
        placeholder="Rechercher"
        // clearButtonMode="always"
        // autoCapitalize="none"
        // autoCorrect={false}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <Text style={styles.text}>Liste des produits</Text>
      
      <AffichageListeProduits />
    </SafeAreaView>
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
  inputSearch: {
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 16,
    padding: 10,
    width: "100%",
  },
});
