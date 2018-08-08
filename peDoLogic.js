// The logic for the peDo problem
/**
 * @description [Program to solve the peDo problem]
 * Print the numbers from 1 to 100. For multiples
 * of 3, print the word 'Pé' instead of the number. For multiples of 5, print
 * the word 'Do' instead of the number. For multiples of both 3 and 5, print 'PéDo'.
 * @param {number} min 
 * @param {number} max 
 * @return {*array} 
 * @note for performance reasons ill use [i] notation instead of push
 */
module.exports = printPedo = (min, max) => {
    const result = [];

    for (let i = 0; i < max; min++, i++) {
        // If the number is multiple of 5 and 3 
        if (min % 3 === 0 && min % 5 === 0) {
            result[i] = 'PéDo';
        }
        // If the number is multiple of 3
        else if (min % 3 === 0) {
            result[i] = 'Pé';
        }
        // if the number is multiple of 5
        else if (min % 5 === 0) {
            result[i] = 'Do';
        }
        // if is neither multiple of 5 or 3 just add the number 
        else {
            result[i] = min;
        }
    }

    return result;
};
