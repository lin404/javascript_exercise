/** 

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/

var maxSubArray = function(nums) {
    //check input
    if(nums==null || nums.length==0){
        return 'no num';
    }

    let max = nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i-1]>=0){
            nums[i] += nums[i - 1];
        }
        max = Math.max(max, nums[i]);
    }
    return max;
};

var maxSubArray3 = function(nums) {
    //check input
    if(nums==null || nums.length==0){
        return 'no num';
    }

    let max = nums[0];
    let maxEndingHere=nums[0];
    for(let i=1; i<nums.length; i++){
        maxEndingHere = Math.max(maxEndingHere+nums[i],nums[i]);
        max = Math.max(maxEndingHere, max);
    }
    return max;
};

var maxSubArray2 = function(nums) {
    let max = nums[0];
    for(let i=0; i<nums.length; i++){
        let sum = 0;
        for(let j=i; j<nums.length; j++){    
            sum += nums[j];
            max = Math.max(sum, max);
        }
    }
    return max;
};

var maxSubArray1 = function(nums) {
    const totalArr = [];
    for(let i=0; i<nums.length; i++){
        const arr = [];
        let sum = 0;
        for(let j=i; j<nums.length; j++){
            sum += nums[j];
            arr.push(sum);
        }
        arr.sort(function(a,b) { return a - b; });
        totalArr.push(arr[arr.length-1]);
    }  
    totalArr.sort(function(a,b) { return a - b; });
    console.log(totalArr);
    return totalArr[totalArr.length-1];
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));