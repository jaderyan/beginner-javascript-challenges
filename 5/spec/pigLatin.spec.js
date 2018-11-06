const path = require("path");
const expect = require("chai").expect;

const { pigLatin } = require("../pigLatin");

describe("pigLatin", function() {
  it('if the string begings with a vowel, add "way" to the end of the string', () => {
    expect(pigLatin("algorithm")).to.equal("algorithmway");
  });
  it('if the string begins with a consonant, it moves it to the end of the word and "ay" is added', function() {
    expect(pigLatin("javascript")).to.equal("avascriptjay");
  });
  it('if the string begins with consecutive consonants, it moves the consonants to the end of the string and adds "ay', () => {
    expect(pigLatin("sheffield")).to.equal("effieldshay");
  });
  it("converts a sentance into pig latin", () => {
    expect(pigLatin("hello there")).to.equal("ellohay erethay");
  });
});
