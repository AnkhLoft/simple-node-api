const assert = require('assert');
const pedoLogic = require('../logic/peDoLogic');


describe('pedoLogic', () => {
    it('Should return correct range size', () => {
        const output = pedoLogic(1, 5);
        assert.strictEqual(output.length, 5);
    })

    it('Should return the appropriate results for 1-20', function () {
        var output = pedoLogic(1, 20);
        assert.deepEqual(
            output, [
                1,
                2,
                'Pé',
                4,
                'Do',
                'Pé',
                7,
                8,
                'Pé',
                'Do',
                11,
                'Pé',
                13,
                14,
                'PéDo',
                16, 
                17, 
                'Pé', 
                19, 
                'Do',
            ]
        );
    });


});