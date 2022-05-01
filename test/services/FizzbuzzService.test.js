const FizzbuzzService = require('./../../lib/services/FizzbuzzService');

describe('Test FizzBuzz Service', () => { 
    test('Test triker= 1', () => { 
        const explorer1 = {name: "Explorer1", score: 1}        
        const explorerTrickScore = FizzbuzzService.ApplyValidationInExplorer(explorer1);     
        expect(explorerTrickScore).toEqual({name: "Explorer1", score: 1, trick: 1});
    });

    test('Cuando el score sea divisible entre 3 ,tricke: FIZZ ', () => { 
        const explorer3 = {name: "Explorer3", score: 3}
        const explorerTrickeFizz = FizzbuzzService.ApplyValidationInExplorer(explorer3)

        expect(explorerTrickeFizz).toEqual({name: "Explorer3", score: 3, trick: "FIZZ"})
    });

});