const path = require("path");
const expect = require("chai").expect;

const { oppositeNumber } = require("../oppositeNumber");

describe("oppositeNumber()", () => {
  it("when passed a positive number returns it as a negative", () => {
    expect(oppositeNumber(1)).to.equal(-1);
  });
  it("when passed a negative number returns it as a positive", () => {
    expect(oppositeNumber(-65)).to.equal(65);
  });
});
