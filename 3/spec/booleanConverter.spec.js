const path = require("path");
const expect = require("chai").expect;

const { booleanConverter } = require("../booleanConverter");

describe("booleanConverter", function() {
  it('when passed true returns "Yes"', () => {
    expect(booleanConverter(true)).to.equal("Yes");
  });
  it('when passed false returns "No"', () => {
    expect(booleanConverter(false)).to.equal("No");
  });
});
