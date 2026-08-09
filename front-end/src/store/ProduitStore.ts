import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Produit = {
  nom: string;
  categorie: string;
  reference: string;
  description: string;
  seuil: number;
  quantite: number;
  dateMiseAJour: string;
};

type ProduitStore = {
  produits: Produit[];
  ajouterProduit: (produit: Produit) => void;

  produitSelectionne: Produit | null;
  selectionnerProduit: (produit: Produit) => void;

  modeDetails: "consultation" | "modification";
  setModeDetails: (mode: "consultation" | "modification") => void;

  modifierQuantite: (reference: string, nouvelleQuantite: number) => void;

  modifierProduit: (reference: string, informations: Produit) => void;
};

export const useProduitStore = create<ProduitStore>()(
  persist(
    (set) => ({
      produits: [],

      ajouterProduit: (produit) =>
        set((state) => ({
          produits: [...state.produits, produit],
        })),

      produitSelectionne: null,

      selectionnerProduit: (produit) =>
        set({
          produitSelectionne: produit,
        }),

      modeDetails: "consultation",

      setModeDetails: (mode) =>
        set({
          modeDetails: mode,
        }),

      modifierQuantite: (reference, nouvelleQuantite) =>
        set((state) => {
          const produits = state.produits.map((produit) =>
            produit.reference === reference
              ? { ...produit, quantite: nouvelleQuantite, dateMiseAJour: new Date().toISOString(), }
              : produit
          );

          const produitSelectionne =
            produits.find(
              (produit) => produit.reference === reference
            ) ?? null;

          return {
            produits,
            produitSelectionne,
          };
        }),

      modifierProduit: (reference, informations) =>
        set((state) => {
          const produitModifie = {
            ...informations,
            dateMiseAJour: new Date().toISOString(),
          };

          return {
            produits: state.produits.map((produit) =>
              produit.reference === reference ? produitModifie : produit
            ),

            produitSelectionne:
              state.produitSelectionne?.reference === reference
                ? produitModifie
                : state.produitSelectionne,
          };
        }),
    }),
    {
      name: "produits-stock",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);