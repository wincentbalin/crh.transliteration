const assert = require('chai').assert;
const fs = require('fs');
const transliteration = require('../lib/transliteration.crh');
const textLat = fs.readFileSync('test/text.crh.md', 'utf8');
const textCyr = fs.readFileSync('test/text.crh-RU.md', 'utf8');

describe('transliteration.crh', function() {
    it('fromCyrillic(), crh-RU to crh', function() {
        assert.equal(textLat, transliteration.crh.fromCyrillic(textCyr));
    });

    it('toCyrillic(), crh to crh-RU', function() {
        assert.equal(textCyr, transliteration.crh.toCyrillic(textLat));
    });
});
