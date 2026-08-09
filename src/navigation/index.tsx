import {
  createBottomTabNavigator,
  createBottomTabScreen,
} from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import { createStaticNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createNativeStackScreen,
} from '@react-navigation/native-stack';
import { Image } from 'react-native';
import home from '../assets/home.png';
import stock from '../assets/stock.png';

import Home from './screens/Home';
import DetailsProduit from './screens/DetailsProduit';
import FormulaireAjoutProduit from './screens/FormulaireAjoutProduit';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: createBottomTabScreen({
      screen: Home,
      options: {
        title: 'Accueil',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={home}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    }),
    FormulaireAjoutProduit: createBottomTabScreen({
      screen: FormulaireAjoutProduit,
      options: {
        title: 'Création de produits',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={stock}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    }),
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: createNativeStackScreen({
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    }),
    DetailsProduit: createNativeStackScreen({
      screen: DetailsProduit,
      options: {
        title: 'Détails du produit',
      }
    }),
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackType = typeof RootStack;

declare module '@react-navigation/native' {
  interface RootNavigator extends RootStackType {}
}
