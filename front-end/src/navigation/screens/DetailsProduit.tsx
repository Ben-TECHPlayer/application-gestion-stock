import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useProduitStore } from "../../store/ProduitStore";
import ModifierQuantiteProduit from "../../components/ModifierQuantiteProduit";
import ModifierInfosProduit from "../../components/ModifierInfosProduit";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

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

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (event) => {
      if (modeDetails === "modification") {
        setModeDetails("consultation");
      }
    });

    return unsubscribe;
  }, [navigation, modeDetails]);

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
          
          <Pressable 
            style={styles.button} 
            onPress={() => setModeDetails("modification")} 
          > 
            <Text style={styles.textButton}>Modifier ce produit</Text> 
          </Pressable> 
        </>
      )}
      
      {modeDetails === "modification" && (
        <ModifierInfosProduit />
        
        )}
    </View>
  </ScrollView>
  );
  
  // return (
  //   <ScrollView style={styles.container}>
  //     <Text style={styles.text}>{produit.nom}</Text>

  //     <View style={styles.containerProduit}>
  //       <ModifierInfosProduit />

  //       {modeDetails === "consultation" && (
  //         <ModifierQuantiteProduit />
          
  //       )}
  //     </View>
  //   </ScrollView>
  // );
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
