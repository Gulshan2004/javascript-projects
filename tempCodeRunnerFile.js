//  function single(nums){
//     return 2*nums;
// }
// console.log(single(2))

// const double = (nums) => 2*nums;
// console.log(double(3));

a=[1,2]
b=[...a,3,4]
console.log(b)

function sumall(...nums){
   return nums.reduce((total,n)=> total + n,0);
}
console.log(sumall(1,2,3,4))