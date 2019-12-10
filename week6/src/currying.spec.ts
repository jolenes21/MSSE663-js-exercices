import { expect } from 'chai';
import 'mocha';
import { curryMe, curryMe2, doMath2, blackBelts, blackBelts2, allNinjas, ninjasOneStatus, ninjasOneStatus2, ninjasOne, ninjasTwoStatus2, ninjasTwoStatus, ninjasTwo } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    expect(curryMe2('a')('b')('c')).to.be.eql(curryMe('a','b','c'));
  });

  it('#2 should output the same result as the original function', () => {
    expect(doMath2(1)(2)(3)).to.eql(0);
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    expect(blackBelts2(allNinjas)).to.be.eql(blackBelts(allNinjas));
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    expect(ninjasOneStatus2(ninjasOne)).to.be.eql(ninjasOneStatus(ninjasOne)),
    expect(ninjasTwoStatus2(ninjasTwo)).to.be.eql(ninjasTwoStatus(ninjasTwo))
  });
});
