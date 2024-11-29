# Ultimate Team Builder Application

 ![App Screenshot](./assets/images/mockup.png)
 ![App Screenshot](./assets/images/mockup2.png)


Une application interactive pour créer, personnaliser et gérer une équipe FUT (Ultimate Team). L'accent est mis sur une interface utilisateur dynamique, la gestion des données via `localStorage` et une expérience immersive pour les utilisateurs. 

## 🚀 Fonctionnalités Clés

### 1. **Création et Gestion de Joueurs**
- Formulaire permettant l'ajout de joueurs avec des champs pour : 
  - Nom
  - Position
  - Note
  - Statistiques et autres détails pertinents
- Ajout, modification et suppression des joueurs via une interface conviviale.

### 2. **Positionnement selon la Formation Tactique**
- Respect des formations prédéfinies (`4-3-3`).
- Placement automatique des joueurs dans des postes adaptés (e.g., `LWF`, `CF`, `AMF`).
- Gestion stricte du maximum de **11 joueurs sur le terrain**, avec des réserves disponibles.

### 3. **Calcul Dynamique de la Chimie**
- Calcul automatique basé sur :
  - Position correcte.
  - Liens entre joueurs (club, championnat, nationalité).
- Score total normalisé entre 0 et 100.
- Visualisation des liaisons fortes/faibles entre joueurs.

### 4. **Sauvegarde et Chargement des Données**
- Utilisation de `localStorage` pour :
  - Sauvegarder les équipes et formations configurées.
  - Charger automatiquement les données sauvegardées lors de l'ouverture.

### 5. **Interface Interactive**
- **Drag & Drop** pour réorganiser les joueurs.
- Mise à jour dynamique de la disposition des joueurs lors d’un changement de formation.
- Adaptation aux tailles d’écran (responsive design).

## 🌟 Bonus
- Changement dynamique de formation.
- Gestion des cartes des joueurs avec affichage interactif.

## 🛠️ Technologies Requises
- **HTML**
- **CSS** (Framework Tailwind)
- **JavaScript Vanilla** (DOM natif)

## 📚 User Stories

### 1. **Création d'une Équipe**
- **En tant qu'utilisateur**, je souhaite ajouter des joueurs via un formulaire dynamique avec un maximum de 11 joueurs actifs.
- Critères d'acceptation :
  - Formulaire avec validation pour chaque champ.
  - Modification ou suppression des joueurs via l'interface.

### 2. **Gestion des Formations**
- **En tant qu'utilisateur**, je souhaite choisir une formation tactique et voir le positionnement des joueurs ajusté.
- Critères d'acceptation :
  - Sélection entre formations prédéfinies (`4-3-3`).
  - Postes et positions mis à jour automatiquement.

### 3. **Calcul de la Chimie**
- **En tant qu'utilisateur**, je souhaite voir un score de chimie pour optimiser mon équipe.
- Critères d'acceptation :
  - Score mis à jour dynamiquement.
  - Liaisons visuelles entre joueurs (fortes/faibles).

### 4. **Sauvegarde Automatique**
- **En tant qu'utilisateur**, je souhaite que mes équipes et formations soient sauvegardées automatiquement.
- Critères d'acceptation :
  - Données stockées localement.
  - Chargement des données à l’ouverture de l’application.

### 5. **Formulaire Dynamique**
- **En tant qu'utilisateur**, je souhaite ajouter ou modifier des joueurs directement via l'interface.
- Critères d'acceptation :
  - Interface ajustée pour un nombre dynamique de joueurs.

## 📦 Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Yassir-Zbida/FUT-Champions
