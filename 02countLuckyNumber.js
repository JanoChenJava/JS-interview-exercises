//find the total number of 'lucky number':number between a and b, contains 6 or 8, excludes 6&8, for example, a=55,b=69 =>56,58,66=>output: 3

var dataset = [2,2,4,2,6,2,4,7,8];
var search = 9;

var count = dataset.reduce(function(n, val) {
    return n + (val === search);
}, 0);

console.log(count);



var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);