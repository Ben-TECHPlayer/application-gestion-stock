import { createBottomTabNavigator } from "expo-router/build/react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../app/index";
// import DetailsProduit from "../app/detailsProduit";
import GestionProduits from "../app/gestionProduits";
// import TableauBord from "../app/tableauBord";

// const Stack = createNativeStackNavigator();
const menuNavigation = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <menuNavigation.Navigator initialRouteName="Accueil">
      <menuNavigation.Screen name="Accueil" component={HomeScreen} />

      <menuNavigation.Screen
        name="Gestion de produits"
        component={GestionProduits}
      />

      {/* <menuNavigation.Screen
        name="Détails de produits"
        component={DetailsProduit}
      />
      <menuNavigation.Screen name="Tableau de bord" component={TableauBord} /> */}
    </menuNavigation.Navigator>
  );
}
