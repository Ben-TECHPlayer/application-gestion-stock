import { StyleSheet, Text, View } from "react-native";

export default function TableauBord() {

    // 1. Données pour le tableau (3 lignes) et le graphique
    const data = [
        { id: '1', label: 'Nombre total de produits', valeur: 40 },
        { id: '2', label: 'Nombre de produits en rupture', valeur: 85 },
        { id: '3', label: 'Nombre de produits en stock faible', valeur: 60 },
    ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tableau de bord</Text>
        {/* --- LE TABLEAU (3 LIGNES) --- */}
      <View style={styles.table}>
        {/* En-tête */}
        <View style={[styles.row, styles.header]}>
          <Text style={[styles.cell, styles.headerText]}>Filtre</Text>
          <Text style={[styles.cell, styles.headerText]}>Nombre</Text>
        </View>
        {/* Les 3 lignes de données */}
        {data.map((item) => (
          <View key={item.id} style={styles.row}>
            <Text style={[styles.cell, styles.headerText]}>{item.label}</Text>
            <Text style={styles.cell}>{item.valeur}</Text>
          </View>
        ))}
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
//   Tableau
title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  table: { marginTop: 16, borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, overflow: 'hidden' },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#e0e0e0', paddingVertical: 12 },
  header: { backgroundColor: '#f7f9fa' },
  cell: { flex: 1, textAlign: 'center', fontSize: 16 },
  headerText: { fontWeight: 'bold', color: '#333' },

});
