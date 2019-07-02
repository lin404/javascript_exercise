// 2 arrays, create a function that let user know weather the these arrays contain any common items
// For example
// const array1 = ['a','b','c','x']
// const array2 = ['z','y','i']
// return false
// const array1 = ['a','b','c','x']
// const array2 = ['z','y','x']
// return true

// more readable
function commonItem3(array1, array2) {
    return array1.some(item => array2.includes(item))
}

// speed is O(n), but space is O(n)
function commonItem2(array1, array2) {

    let map = {}
    for (let arr1 of array1) {
        if (!map[arr1]) {
            map[arr1] = arr1
        }
    }
    for (let arr2 of array2) {
        if (map[arr2]) {
            return true
        }
    }
    return false
}

// speed is O(n^2), but space is O(1)
function commonItem(array1, array2) {
    for (let arr1 of array1) {
        for (let arr2 of array2) {
            if (arr1 === arr2) {
                return true
            }
        }
    }
    return false
}

const array1 = ['a', 'b', 'c', 'x', 'ab']
const array2 = ['z', 'y', 'i']
console.log(commonItem(array1, array2))
console.log(commonItem2(array1, array2))
console.log(commonItem3(array1, array2))