function makeupper(str){
  return str.toUpperCase();
}

function reverseString(str){
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinarray = reverseArray.join("");
  return joinarray;
}

function calculate (str,callback){

  return makeupper(str), reverseString(str);
}

console.log(calculate("ramesh",makeupper));
console.log(calculate("hello",reverseString));