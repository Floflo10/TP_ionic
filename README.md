# TP Ionic

[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

*Ingésup B3 - Martines Florian*

**IMPORTANT**
La version de NPM utilisée pour le tp est la **5.6.0**. Malgrés cela, des problèmes avec des dépendances peuvent survenir.

## Répartition des "Autre Fonctionnalité"

Les autres fonctionnalités demandées sont réparties dans les pages comme suit:

* Page Home
  * Vibration
  * TextToSpeech
* Page Scanner
  * Toast
* Page Video
  * Toast
  * Shake
  * BarcodeScanner
  * SocialSharing
* Page Gmap
  * GoogleMaps
  * Gyroscope

### Installation:

Pour se rappeler des commandes:

```bash
$ npm install
$ npm cordova platform add android
$ npm cordova run android
```

## Bug Fixe:

**Lors de mon build/run j'obtiens une erreur "Execution failed for task ':mergeDebugResources'."**

C'est un problème qui survient lorsque Cordova ajoute la platforme demandée et que l'installation bloque à " Generating platform resources: X / 18 complete".
Pour régler ce problème voir ci-dessous.

**Que faire lorsque l'installation bloque à " Generating platform resources: X / 18 complete".**

Il existe deux solution:

1. Recommencer jusqu'a ce que les ressources soient correctement générer.
2. Utiliser les ressources présentent sur ce dépot juste aprés l'installation.
