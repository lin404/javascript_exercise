//[0,3,4,31] and [4,6,30] to [0,3,4,4,6,30,31]

function mergeSortedArray(arr1, arr2){
    // check input
    if(arr1.length === 0 ){
        return arr2;
    }

    if(arr2.length === 0){
        return arr1;
    }

    const mergedArr = [];
    let i = 0;
    let j = 0;
    
    while(i < arr1.length || j < arr2.length){
        if(arr2[j] === undefined || arr1[i] < arr2[j]){
            mergedArr.push(arr1[i]);
            i ++;
        } else {
            mergedArr.push(arr2[j]);
            j ++;
        }
    }

    return mergedArr;
}

const arr1 = [0,3,4,31];
const arr2 = [0,6,30];
let newArr = mergeSortedArray(arr1,arr2);
console.log(newArr);
