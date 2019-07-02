/**
 * @param {number[]} A
 * @return {number}
 */

const A = [2, 3, 1, 1, 4]

var oddEvenJumps = function (A) {
    let num = 1;
    for (let i = 0; i < A.length - 1; i++) {
        const j = i + 1
        if (A[i] <= A[j]) {

        }
    }
    return num
};

console.log(oddEvenJumps(A))
