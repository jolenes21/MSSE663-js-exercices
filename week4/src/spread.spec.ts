import { expect } from 'chai';
import 'mocha';
import { newNumbers } from './spread';
import { newContenders } from './spread';
import { newPersons } from './spread';
import { newUpdates } from './spread';

describe('Test for spread.ts', () => {
    it("should output array [1,2,3,4,5]", () => {
        expect(newNumbers).to.be.eql([1,2,3,4,5])
    });

    it("should output array [ 'first', 'first', 'second', 'third', 'fourth', 'fifth' ]", () => {
        expect(newContenders).to.be.eql([ 'first', 'first', 'second', 'third', 'fourth', 'fifth' ])
    });

    it("should output objects { man: 'Bob', boy: 'Kyle' }", () => {
        expect(newPersons).to.be.equal({ man: 'Bob', boy: 'Kyle' })
    });

    it("should output values [{ id: 0, task: 'Do the thing' },{ id: 1, task: 'Do the other thing... again' },{ id: 2, task: 'Do the last thing'}]", () => {      
        expect(newUpdates).to.be.eql([
            { id: 0, task: 'Do the thing' },
            { id: 1, task: 'Do the other thing... again' },
            { id: 2, task: 'Do the last thing' }
          ])
    });
});