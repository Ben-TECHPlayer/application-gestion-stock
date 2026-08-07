import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../app/index";
// import DetailsProduit from "../app/detailsProduit";
import GestionProduits from "../app/gestionProduits";
// import TableauBord from "../app/tableauBord";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MenuNavigation() {
  return (
    <Tab.Navigator initialRouteName="Accueil">
      <Tab.Screen name="Accueil" component={HomeScreen} />

      <Tab.Screen name="GestionProduits" component={GestionProduits} />
    </Tab.Navigator>
  );
}

export default function Layout() {
  return (
    <Stack.Navigator>
      {/* Navigation avec les onglets */}
      <Stack.Screen
        name="Menu"
        component={MenuNavigation}
        options={{ headerShown: false }}
      />

      {/* Écran hors des onglets */}
      <Stack.Screen
        name="FormulaireAjoutProduit"
        component={FormulaireAjoutProduit}
        options={{ title: "Ajouter un produit" }}
      />
    </Stack.Navigator>
  );
}
// export default function TabLayout() {
//   return (
//     <menuNavigation.Navigator initialRouteName="Accueil">
//       <menuNavigation.Screen name="Accueil" component={HomeScreen} />

//       <menuNavigation.Screen
//         name="Gestion de produits"
//         component={GestionProduits}
//       />

//       {/* <menuNavigation.Screen
//         name="Détails de produits"
//         component={DetailsProduit}
//       />
//       <menuNavigation.Screen name="Tableau de bord" component={TableauBord} /> */}
//     </menuNavigation.Navigator>
//   );
// }
