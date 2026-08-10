# Application de gestion de stock

## Partie front-end 

### Comment démarrer le projet React Native intégrant React Navigation

1. Créer le projet React Native npx create-expo-app@latest --template react-navigation/template.
2. Installer les dépendances : npm install.
3. Exécuter l'application : npx run start ou npm run ios/android.

J'ai choisi de faire le projet Expo Go plutôt que CLI car c'est plus facile à prendre en main, il n'est pas forcément nécessaire d'utiliser CLI pour ce projet, et c'est aussi que comme c'est intégré, on a pas besoin de tout configurer à la main.

### Versionning régulier

Par ailleurs, j'ai eu un problème : Au début, j'ai mis en place un versioning régulier dans Git en créant des branches Git spécifiques à sa fonctionnalité, sauf que quand j'avais lancer un projet, je ne savais pas que c'était un projet Expo Router, donc j'ai du créer un autre projet qui prend le template React Navigatio pour résoudre le problème au niveau du cahier des charges, sauf que ça a cassé le rythme sur le versioning régulier Git avec les branches Git, mais je le fais quand même dans la branche main.

### Fonctionnalités principales

On a quatre écrans : la page d'accueil(index.tsx), la page de détails(DetailsProduit.tsx), la page de création de produit incluant son formulaire(FormulaireAjoutProduit.tsx), et la page où j'ai crée un tableau de bord(TableauBord.tsx).

- Page d'accueil : Cette page va afficher la liste des produits qu'on aura créé depuis le formulaire de création de produits, dans lequel j'ai mis en place un système de recherche via la barre de recherche, et aussi un système de filtres par catégorie.


- Page de détails : Cette page va afficher les informations importantes du produit qu'on aura cliqué parmi les produits créés.



- Page de création de produit : Cette page va me permettre créer un produit, pour cela on remplit les informations dans le formulaire.

- Page de tableau de bord : Cette page constitue le tableau de bord qui affichera le nombre total de produits, le nombre de produits en stock limité et le nombre de produits en rupture, selon les produits créés de manière dynamique.

Pourquoi j'ai choisi useState et Zustand pour la gestion d'état ?
- J'ai choisi useState car cela me parait le plus simple à utiliser, me permet aussi de gérer les états sur une page, et Zustand car cela me parait de gérer dynamiquement les états de deux pages différentes.

D'ailleurs j'ai aussi mis les captures d'écran montrant les fonctionnalités principales dans le dossier src/assets/captures-ecran.

## Partie back-end

## Comment démarrer le projet Node.js avec Express

Pourquoi j'ai choisi Node.js avec Express pour le back-end ?
- J'ai choisi Node.js et Express car je veux rester dans l'écosystème TypeScript, vu qu'ils sont issus de cet écosystème.

Pourquoi j'ai choisi MongoDB pour la base de données ?
- J'ai choisi MongoDB car cela est simple à prendre en main, 

1. Installer Node.js : npm init -y, cela va créer package.json
2. Créer le fichier server.js pour tester : pour cela on met l’instruction suivante console.log('Serveur lancé');
3.	On exécute : node server.js
4.	Créer ces dossiers depuis le dossier back-end, src puis dans le dossier src, créer les répertoires models, routes, config et controllers
5.	Installer le framework Express : npm install express
6.	Lancer un serveur http basique puis exécuter pour tester : node server.js
7.	Créer produitRoutes.js dans src/routes puis produitController.js dans src/controllers
8.	Installer les variables d’environnement : npm install dotenv
9.	Ajouter require('dotenv').config(); au fichier server.js
10.	Installer MongoDB : npm install mongoose
11.	Créer un fichier database.js dans src/config pour mettre en place la connexion à la base de données
12.	Ajouter dans .env : MONGO_URI=mongodb://localhost:3000/back-end
13.	Activer la connexion grâce à server.js en ajoutant la connexion à la base de données
14.	Créer Produit.js dans src/models
15.	Faire une vraie requête MongoDB dans src/controller/userController.js 
16.	Dans src/routes/produitRoutes.js, ajouter les routes pour créer un produit
17.	Installer MongoDB Community Server pour la base de données, et MongoDB Compass pour voir ma base et mes produits
18.	Créer le dossier src/middleware et src/services
