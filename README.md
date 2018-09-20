# Utilisation de gulp pour compiler le SASS

## Installer Node.js sur sa machine. 
Le projet nécessite d'installer Node.js, disponible ici : https://nodejs.org/en/download/
Pour vérifier que Node est bien installé il faut lancer la commande suivante dans le terminal :
```
npm -v
```
Ce qui devrait retourner la version de Node installée.

## Installer les dépendances npm

Les dépendences Node nécessaires pour faire fonctionner Gulp sont déclarées dans le fichier 'package.json'.
Il faut cependant les installer en local. Naviguez à la racine du projet et lancer la commande :
```
MAC: sudo npm install --unsafe-perm=true --allow-root
WINDOWS: npm install
LINUX: npm install
```

### Lancer gulp

Une fois les dépendances installées, on peut compiler notre sass via les commandes définies dans le fichier 'gulpfile.js'.
Pour Compiler le sass une seule fois :
```
gulp sass
```
Pour compiler les sass à chaque modification effectuée :
```
gulp watch
```