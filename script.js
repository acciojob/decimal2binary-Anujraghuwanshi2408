// function threeSum(arr, target) {
// // write your code here
	
  
// }
 let s = "";
function number(n){
	while(n>0){
		s += n%2;
		n = parseInt(n/2);
	}
	console.log(s);
}
module.exports = threeSum;
