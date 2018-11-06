const path = require("path");
const expect = require("chai").expect;

const { sentenceSmash } = require("../sentenceSmash");

describe("sentenceSmash", function() {
  it('Should return empty string for empty array."', () => {
    expect(sentenceSmash([])).to.equal("");
  });
  it("Should return the word if the array has only one string", () => {
    expect(sentenceSmash(["hello"])).to.equal("hello");
  });
  it("Multiple words should be separated by spaces.", () => {
    expect(sentenceSmash(["hello", "world", "this", "is", "great"])).to.equal(
      "hello world this is great"
    );
  });
});
