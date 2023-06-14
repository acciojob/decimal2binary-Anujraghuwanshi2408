// function threeSum(arr, target) {
// // write your code here
	
  
// }
 let s = "";
function number(n){
	while(n>0){
		s += n%2;
		n = parseInt(n/2);
	}
// 	return s;
}
  number(n);
  
  let ans = ""
	for(let i=s.length-1; i>=0; i--){
	  ans += s[i];
	}
console.log(ans);
// module.exports = threeSum;
