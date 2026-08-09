import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useProduitStore } from "../../store/ProduitStore";
import ModifierQuantiteProduit from "../../components/ModifierQuantiteProduit";
import ModifierInfosProduit from "../../components/ModifierInfosProduit";

export default function DetailsProduit() {

  const produit = useProduitStore(
    (state) => state.produitSelectionne
  );

  const modeDetails = useProduitStore(
    (state) => state.modeDetails
  );

  const setModeDetails = useProduitStore(
    (state) => state.setModeDetails
  );

  if (!produit) {
    return (
      <View>
        <Text>Aucun produit sélectionné.</Text>
      </View>
    );
  }

  return (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.text}>{produit.nom}</Text>

    <View style={styles.containerProduit}>
      {modeDetails === "consultation" && (
        <>
          <ModifierInfosProduit />
          <ModifierQuantiteProduit />
        </>
      )}

      {modeDetails === "modification" && (
        <ModifierInfosProduit />
      )}
      <Pressable 
        style={styles.button}
        onPress={() => setModeDetails("modification")}
      >
        <Text style={styles.textButton}>Modifier ce produit</Text>
      </Pressable>
      {/* <Pressable 
        style={styles.button}
      >
        <Text style={styles.textButton}>Supprimer ce produit</Text>
      </Pressable> */}
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
    // width: "100%",
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
