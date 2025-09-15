# Calculateur de Moyennes Universitaires

Une application web pour calculer vos moyennes par UE (Unité d'Enseignement) et votre moyenne générale de semestre.

## Fonctionnalités

- **Calcul automatique** : Moyennes par UE et moyenne générale du semestre
- **Gestion multi-semestres** : Basculez facilement entre différents semestres
- **Personnalisation complète** : Modifiez les UE, matières et coefficients
- **Sauvegarde automatique** : Vos données sont conservées dans le navigateur
- **Export PDF** : Générez un relevé de notes
- **Interface moderne** : Deux thèmes au choix
- **Responsive** : Compatible mobile et desktop

## Installation

### Prérequis
- Un navigateur web
- Un serveur web local (optionnel, mais recommandé)

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/Acelyamhrr/calcul-notes.git
   cd calculateur-moyennes-universitaires
   ```

2. **Lancer l'application**
   
   **Option 1 : Serveur local simple**
   ```bash
   python -m http.server 8000
   # ou
   python3 -m http.server 8000
   ```
   
   **Option 2 : Avec Node.js**
   ```bash
   npx http-server
   ```
   
   **Option 3 : Ouvrir directement**
   Ouvrez simplement `index.html` dans votre navigateur

3. **Accéder à l'application**
   Rendez-vous sur `http://localhost:8000` (ou ouvrez directement le fichier HTML)

## Personnalisation

### Thèmes
- **Élégant** : Design sobre
- **Vibrant** : Couleurs vives et dynamiques

### Modification des données
1. Cliquez sur "Personnaliser" dans l'interface
2. Modifiez les noms des UE, ajoutez/supprimez des matières
3. Ajustez les coefficients selon vos besoins
4. Sauvegardez vos modifications

## Utilisation

1. **Sélectionner un semestre** : Cliquez sur les boutons de semestre en haut
2. **Saisir les notes** : Entrez vos notes dans les champs correspondants (0-20)
3. **Voir les résultats** : Les moyennes se calculent automatiquement
4. **Exporter** : Générez un PDF de votre relevé de notes

### Calcul des moyennes
- **Moyenne UE** : Moyenne pondérée des matières de l'UE
- **Moyenne générale** : Moyenne arithmétique des moyennes d'UE

## Gestion des données

L'application utilise le localStorage du navigateur pour sauvegarder :
- Les notes saisies
- Les configurations personnalisées
- Les préférences de thème

**Note** : Les données sont stockées localement et ne sont pas partagées.

## TODO

- [ ] Ajout de graphiques statistiques
- [ ] Export en formats Excel/CSV
- [ ] Système de notifications
- [ ] Mode sombre avancé
- [ ] Calcul de moyennes sur plusieurs semestres
- [ ] Système de backup/restore


## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

- [Font Awesome](https://fontawesome.com/) pour les icônes
- [jsPDF](https://github.com/MrRio/jsPDF) pour la génération PDF
- La communauté open source pour l'inspiration

---
