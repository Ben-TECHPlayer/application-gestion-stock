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
};

export const useProduitStore = create<ProduitStore>((set) => ({
  produits: [],

  ajouterProduit: (produit) =>
    set((state) => ({
      produits: [...state.produits, produit],
    })),
}));