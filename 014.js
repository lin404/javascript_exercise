// if there are pair number their sum is equal to given number
// [1,2,3,9] sum=8 No
// [1,2,4,4] sum=8 Yes

// lookup -> new Set()
function equalToSum3(array, sum) {
    const mySet = new Set();
    for (let arr of array) {
        if (mySet.has(sum - arr)) {
            return true
        } else {
            mySet.add(arr);
        }
    }

    return false
}

function equalToSum2(array, sum) {

    let map = {}
    for (let arr of array) {
        if ((sum - arr) in map) {
            return true
        } else {
            map[arr] = arr
        }
    }

    return false
}

function equalToSum(array, sum) {
    const { performance } = require('perf_hooks');
    var t1 = performance.now()
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++)
            if (array[i] + array[j] === sum) {
                var t2 = performance.now()
                console.log(t2 - t1)
                return true
            }
    }

    return false
}

const array = [1, 2, 4]
const sum = 8
console.log(equalToSum(array, sum))
console.log(equalToSum2(array, sum))
console.log(equalToSum3(array, sum))