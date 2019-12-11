import { expect } from 'chai';
import 'mocha';
import { allThings } from './higher-order-funcs'

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {
    expect(allThings).to.be.eql(['thing1', 'thing2'])
  });

  it('#2 should return a single thing from array of things objects after hoisting and currying', () => {
    
  });
});
