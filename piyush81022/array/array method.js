
let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];
let ages = [4, 9, 16, 25, 36, 49,45,46,4707];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); // 2

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]

// filter an array
const adults = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(adults); // [25, 36, 49]

//map a function to an array
const ages_sqrt = ages.map(Math.sqrt);
console.log(ages_sqrt); // [2, 3, 4, 5, 6, 7,6.7082, 6.78 ,]
