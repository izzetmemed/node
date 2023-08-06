// function findOutlier(integers){
//     let odd=integers.filter(x=>x=Math.abs(x) % 2===1);
//     let even=integers.filter(x=>x=Math.abs(x) % 2===0);
//     let all = [odd, even];
//     let outlier = all.find(y => y.length === 1);
//     return outlier[0];
//   }
//   console.log(findOutlier([0, 1, 2]));
//   findOutlier([1, 2, 3]);
//   findOutlier([2,6,8,10,3]);
//   findOutlier([0,0,3,0,0]);
// function likes(names) {
// let massage;
// switch (names.length){
//   case 0:
//   massage="no one";
//   break;
//   case 1:
//   massage=names[0];
//   break;
//   case 2:
//   massage=names[0]+" and "+names[1];
//   break;
//   case 3:
//   massage=names[0]+", "+names[1]+" and "+names[2];
//   break;
//   case 4:
//   massage=names[0]+", "+names[1]+" and 2 others";
//   break;
//   default:
//     massage=names[0]+", "+names[1]+" and "+(names.length-2)+" others";
// }
// if(names.length<2){
//  return massage+" likes this";
// }else{
//   return massage+" like this";
// }

// }
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max','Max','Max','Max','Max']));
function incrementString(strng) {
 if( isNumber(strng[strng.length-1])){
  return strng.concat("1");
 }
 else{
  return strng.replace(strng[strng.length-1],strng[strng.length-1]+1);
 }
 function isNumber(value){ 
  if(typeof value === 'number'){
    return true
  }else{
    return false;
  }
}
}
console.log(incrementString("foobar000"));
console.log(incrementString("foobar999"));
console.log(incrementString("foobar00999"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar1"));
console.log(incrementString("1"));