## Pig Latin

In this kata you will write a function that translates English strings into Pig Latin.

To translate to [Pig Latin](https://en.wikipedia.org/wiki/Pig_Latin) you take the first consonant (or consecutive consonants) of each word, move it to the end and also append 'ay'. If the word starts with a vowel, just append 'way' at the end.

##### Examples

```javascript
pigLatin("javascript");
// -> 'avascriptjay'
```

```javascript
pigLatin("sheffield");
// -> 'effieldshay'
```

```javascript
pigLatin("algorithm");
// -> algorithmway
```

```javascript
pigLatin("keep on coding");
// -> 'eepkay onway odingcay'
```
