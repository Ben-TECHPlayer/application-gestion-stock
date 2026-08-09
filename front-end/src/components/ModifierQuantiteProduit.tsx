import { StyleSheet, Text, View, Pressable } from "react-native";
import { useProduitStore } from "../store/ProduitStore";

export default function ModifierQuantiteProduit() {

  const produit = useProduitStore(
    (state) => state.produitSelectionne
  );

  const modifierQuantite = useProduitStore(
    (state) => state.modifierQuantite
  );

  if (!produit) {
    return (
      <View>
        <Text>Aucun produit sélectionné.</Text>
      </View>
    );
  }

  return (
        <View style={styles.viewButton}>
            <Pressable
              style={styles.button}
              onPress={() =>
                modifierQuantite(
                  produit.reference,
                  produit.quantite + 1
                  )
              }
            >
                <Text style={styles.textButton}>+</Text>
            </Pressable>
            <Pressable
              style={styles.button}
                onPress={() =>
                  modifierQuantite(
                  produit.reference,
                  Math.max(0, produit.quantite - 1)
                  )
              }
            >
                <Text style={styles.textButton}>-</Text>
            </Pressable>
        </View>
        
  );
}

const styles = StyleSheet.create({
  viewButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  button: {
    backgroundColor: "lime",
    padding: 4,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: 800,
  },
});
