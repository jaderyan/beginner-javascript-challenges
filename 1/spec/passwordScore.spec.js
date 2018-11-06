const path = require('path');
const expect = require('chai').expect;

const {passwordScore} = require('../passwordScore');

describe('passwordScore()', () => {
  it('returns a number', () => {
    expect(passwordScore('')).to.be.a('number');
    expect(passwordScore(1)).to.equal(0);
    expect(passwordScore(true)).to.equal(0);
  });
  it('returns 0 for an invalid input', () => {
    expect(passwordScore(1)).to.equal(0);
    expect(passwordScore(true)).to.equal(0);
  });
  it('returns 1 for a password with less than 4 characters', () => {
    expect(passwordScore('dog')).to.equal(1);
  });
  it('returns 2 for a password which has less than 9 characters', () => {
    expect(passwordScore('hello')).to.equal(2);
  });
  it('returns 3 for a password with more than 8 characters, all letters', () => {
    expect(passwordScore('jaderyaniscool')).to.equal(3);
  });
  it('returns 4 for a password with more than 8 characters, letters and numbers', () => {
    expect(passwordScore('jadeeryan89')).to.equal(4);
  });
  it('returns 5 for a password with more than 8 characters, letters, numbers and special characters', () => {
    expect(passwordScore('jadeeryan89!')).to.equal(5);
  });
  it('returns 6 for a password with more than 12 characters and includes a number', () => {
    expect(passwordScore('thisismypassword1')).to.equal(6);
  });
  it('returns 7 for a password with more than 8 characters and includes letters, numbers and special characters', () => {
    expect(passwordScore('bobbobbob1!2@3#')).to.equal(7);
    expect(passwordScore('bobb!2@3#obbob1')).to.equal(7);
  })
});