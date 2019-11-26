import { expect } from "chai";
import "mocha";
import { newNumbers, originalNumbers } from "./spread";
import { newContenders, originalContenders } from "./spread";
import { newPersons, originalPersons } from "./spread";
import { newUpdates, originalUpdates, update, data } from "./spread";

describe("Test for spread.ts", () => {
  it("should output array [1,2,3,4,5]", () => {
    expect(newNumbers).to.be.eql(originalNumbers);
  });

  it("should output array [ ['first'], 'first', 'second', 'third', 'fourth', 'fifth' ]", () => {
    expect(newContenders.length).to.be.eql(originalContenders + 1);
  });

  it("should output objects { man: 'Bob', boy: 'Kyle' }", () => {
    expect(newPersons).to.be.eql(originalPersons);
  });

  it("should output values [{ id: 0, task: 'Do the thing' },{ id: 1, task: 'Do the other thing... again' },{ id: 2, task: 'Do the last thing'}]", () => {
    expect(newUpdates(update, ...data)).to.be.eql(originalUpdates);
  });
});
