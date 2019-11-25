import { expect } from 'chai';
import 'mocha';
import { source } from './observable';

describe('Test for observable.ts', () => {
    it("should output all gender type", () => {
        source.subscribe(list => expect(list).to.eql(["male","female","non-binary"]))
    });
});
