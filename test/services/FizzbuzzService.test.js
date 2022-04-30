const FizzbuzzService = require('./../../lib/services/FizzbuzzService');

describe('Test FizzBuzz Service', () => { 
    test('Test triker= 1', () => { 
        const explorer1 = {name: "Explorer1", score: 1}        
        const explorerTrickScore = FizzbuzzService.ApplyValidationInExplorer(explorer1);     
        expect(explorerTrickScore).toEqual({name: "Explorer1", score: 1, trick: 1});
    });
});