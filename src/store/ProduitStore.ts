import { create } from "zustand";

export type Produit = {
  nom: string;
  categorie: string;
  reference: string;
  seuil: number;
  quantite: number;
};

type ProduitStore = {
  produits: Produit[];
  ajouterProduit: (produit: Produit) => void;

  produitSelectionne: Produit | null;
  selectionnerProduit: (produit: Produit) => void;

  modifierQuantite: (reference: string, nouvelleQuantite: number) => void;
};

export const useProduitStore = create<ProduitStore>((set) => ({
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

  modifierQuantite: (reference, nouvelleQuantite) =>
  set((state) => {
    const produits = state.produits.map((produit) =>
      produit.reference === reference
        ? { ...produit, quantite: nouvelleQuantite }
        : produit
    );

    const produitSelectionne = produits.find(
      (produit) => produit.reference === reference
    ) ?? null;

    return {
      produits,
      produitSelectionne,
    };
  }),
}));