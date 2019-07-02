/**
Given an array nums, write a function to move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
    let lastIndex = nums.length-1;
    for(let i=0; i<nums.length; i++){
        if( i <= lastIndex && nums[i] === 0){
            nums.splice(i,1);
            nums.push(0);
            lastIndex --;
            i --;
        }
    }
    return nums;
};

var moveZeroes1 = function(nums) {
    const nonZeroArr = [];
    const zeroArr = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i]===0){
            zeroArr.push(nums[i]);
        }else {
            nonZeroArr.push(nums[i]);
        }
    }
    return nonZeroArr.concat(zeroArr);
};

const nums = [0,1,0,3,12];
console.log(moveZeroes(nums));