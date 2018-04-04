function add(a, b) {
  return a + b;
}
console.log(add(1,3));

var toAdd = [9, 5];
console.log(add(...toAdd))

// ... is the spread operatior
// it can be used with objects and arrays

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];

var final = [-1, ...groupA, ...groupB];
console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
