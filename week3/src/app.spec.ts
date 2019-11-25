import 'mocha';
import { expect } from 'chai';
import { Cupid } from './app';

describe('Test for app.ts', () => {
    const cupid = new Cupid('user.cupid', ['women'], 2000);

    it("should output Cupid's username", () => {
            expect(cupid.username).to.be.equal('user.cupid')
        });

    it("should output Cupid's interested in", () => {
            expect(cupid.interestedIn).to.eql(['women']);
        });     

    it("should output Cupid's active status", () => {
        cupid.status.then((status: boolean) => {
            expect(status).to.be.true;
        });
    });
});
