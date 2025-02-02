'use strict';

var transliteration = exports;

transliteration.crh = {};

transliteration.crh.fromCyrillic = function(text) {
    return transliterate(text, require('./cyr2crh'));
};

transliteration.crh.toCyrillic = function(text) {
    return transliterate(text, require('./crh2cyr'));
};

transliteration.crh.fromFirstLatin = function(text) {
    return transliterate(text, require('./firstlatin2crh'));
};

transliteration.crh.toFirstLatin = function(text) {
    return transliterate(text, require('./crh2firstlatin'));
};

function transliterate(text, reMap) {
    text = ' ' + text + ' ';

    for (var i in reMap) {
        text = text.replace(reMap[i][0], reMap[i][1]);
    }

    return text.substring(1, text.length - 1);
}
