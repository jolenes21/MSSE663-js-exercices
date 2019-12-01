import { expect } from 'chai';
import 'mocha';
import { object, nestedObject, newObject, welcome } from "./object-destructuring";

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    expect(Object.keys(object).length).to.be.equal(2)
  });

  it('#2 should have a variable for every property in the given nested object', () => {
    expect(Object.keys(nestedObject).length).to.be.equal(3)
  });

  it('#3 should create a new object given the destrutured variables from the nested object', () => {
    expect(newObject).to.be.eql(nestedObject)
  });

  it('#4 should construct a statement from the given object', () => {
    expect(welcome).to.be.eql({ greeting: 'hello', name: 'taylor' })
  });
});
