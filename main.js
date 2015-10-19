/*!
 * Brackets MODO language extension.
 * Adds support for MODO file extensions.
 * © 2015, Adam OHern, MIT License
 * https://github.com/adamohern/brackets-for-modo
 */

define(function (require, exports, module) {
    "use strict";
    var LanguageManager = brackets.getModule("language/LanguageManager");
    var language = LanguageManager.getLanguage("xml");
    language.addFileExtension("cfg");
});