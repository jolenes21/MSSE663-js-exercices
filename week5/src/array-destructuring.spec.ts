import { expect } from 'chai';
import 'mocha';
import { fruits, food, welcome } from "./array-destructuring";

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(fruits.length).to.be.eql(['apple','banana'].length)
  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(food.length).to.be.eql(['apple','banana','chocolate', 'pears', 'oats', 'pizza'].length)
  });

  it('#3 should construct a statement from the given objarrayect', () => {
    expect(welcome).to.be.eql(['hello', 'taylor'])
  });
});
