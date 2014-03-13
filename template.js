/**
 * @file      template.js
 * @brief     Chargement/Compilation des templates Handlebars
 * @details
 * Ce module est developpe sous la forme d'un plugin requirejs (voir http://requirejs.org/docs/plugins.html)
 * Pour information: Le plugin handlebars ne compile le template qu'à la première utilisation de ce dernier et non
 * lors de l'appel de la fonction "compile".
 *
 * Exemple d'utilisation
 * - Utilisation du plugin
 * @code
 * require(['template!mon_template.hdb'], function (monTemplate) {});
 * @endcode
 * - Ici, le fichier "mon_template.hdb" va etre charge et compile avec le moteur de template Handlebars.
 * @licence MIT
 */
define([], function () {
    "use strict";

    return {
        load: function (name, require, load, config) {
            require(['handlebars', 'text!' + name], function (Handlebars, file) {
                // Retourne un objet vide lors du build avec r.js car Handlebars n'est pas compatible non-browser
                // (voir http://requirejs.org/docs/plugins.html#names)
                if (config.isBuild) {
                    load();
                    return;
                }

                load(Handlebars.compile(file));
            });
        }
    };
});
