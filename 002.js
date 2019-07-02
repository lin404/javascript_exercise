/** Subset sum problem
 * The subset sum problem is an important problem in computer science. 
 * Below we'll provide a simple algorithm for solving this problem. 
 * The challenge is to determine if there is some subset of numbers in an array 
 * that can sum up to some number S. 
 * These algorithms can both be implemented to solve Array Addition I and Array Addition.
********************************************************************* */ 
/** Simple (Naive) solution 
 * The algorithm for the exponential time, naive solution, is as follows: 
 * First we will generate every possible set (the power set), 
 * and then check if the sum of any of these sets equals the sum S
 * arr = [1, 2, 3]
 * sum = 5
 * All possible sets:
[]
[1]
[2]
[3]
[1, 2]
[1, 3]
[2, 3]
[1, 2, 3]
 * We can see that we can get a sum of 5 by adding the elements in the set [2, 3]
 ********************************************************************* */ 
function ArrayAdditionI(arr) {
  
    // get largest number and remove it from array
    var sum = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(sum), 1);
    
    // power set
    var sets = [[]];
  
    // generate the power set and for each new set
    // check if the temporary sum equals our sum above
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0, len = sets.length; j < len; j++) {
        var temp = sets[j].concat(arr[i]);
        console.log(temp);
        sets.push(temp);
        var s = temp.reduce(function(p, c) { return p + c; });
        if (s === sum) { return "true"; }
      }
    }
    
    return "false";
           
  }
     
  ArrayAdditionI([1,2,3]);    