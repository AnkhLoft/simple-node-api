// The logic for the peDo problem
/**
 * @description [Program to solve the peDo problem]
 * Print the numbers from 1 to 100. For multiples
 * of 3, print the word 'Pé' instead of the number. For multiples of 5, print
 * the word 'Do' instead of the number. For multiples of both 3 and 5, print 'PéDo'.
 * @param {number} min 
 * @param {number} max 
 * @return {*array} 
 */
module.exports = printPedo = (min, max) => {
    const result = [];

    for (let i = min; i <= max; i++) {
        // If the number is multiple of 5 and 3 
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('PéDo');
        }
        // If the number is multiple of 3
        else if (i % 3 === 0) {
            result.push('Pé');
        }
        // if the number is multiple of 5
        else if (i % 5 === 0) {
            result.push('Do');
        }
        // if is neither multiple of 5 or 3 just add the number 
        else {
            result.push(i);
        }
    }

    return result;
};