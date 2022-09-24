const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
 const  filter=inputWords.filter(word=>word.length>6);

 console.log(filter);
//const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];
// The new array should rename the 'name' key to 'hero'.
// The 'name' key should not appear in the new array.
// The new array should have a new key added called (id).
// The key 'id' should be based on the index.

const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];
const arr = heros.map((hero, index) => {
    return { id: index, hero: hero.name }
});
console.log(arr);


