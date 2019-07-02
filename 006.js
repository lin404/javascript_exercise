/** Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// use object
var twoSum = function(nums, target) {
    let map = {};
    for(let i=0; i < nums.length; i++){
        let item = target - nums[i];
        if(map[item]!==undefined){
            return [map[item], i];
        }
        map[nums[i]] = i;
    }
};

// use Map()
var twoSum2 = function(nums, target) {
    var map = new Map();
    for(let i=0; i < nums.length; i++){
        let item = target - nums[i];
        if(map.has(item)){
            return [map.get(item), i];
        }
        map.set(nums[i],i);
    }
};

var twoSum1 = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        let item = target - nums[i];
        for (let j = i; j<nums.length; j++){
            if(item === nums[j]){
                return [i,j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));