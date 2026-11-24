IMPORTANT — CHEMINS DES PHOTOS

La capture VS Code semble montrer que les fichiers se trouvent dans un dossier images à l'intérieur d'un autre dossier images.
Le site cherche donc les photos dans :
  images/images/restaurant.jpeg
  images/images/plat1.jpeg
  images/images/plat2.jpeg
  etc.

Si ton organisation est plutôt La Novadine/images/restaurant.jpeg (sans le deuxième dossier images),
remplace dans index.html et script.js le chemin images/images/ par images/.

Les noms visibles sur la capture sont restaurant.jpeg et plat1.jpeg à plat8.jpeg,
ainsi que plat10.jpeg à plat22.jpeg. plat9.jpeg n'était pas visible et n'est pas référencé.

Pour donner un vrai nom et un prix à chaque plat : ouvre script.js et modifie MENU_ITEMS.
Exemple : { id: 1, image: "plat1.jpeg", name: "Poulet braisé", category: "Grillades",
  description: "Poulet accompagné de ...", price: 5000 }
Le prix doit être un nombre, sans espace ni devise. Tant que le prix vaut 0, le bouton d'ajout est désactivé.
