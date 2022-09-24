let person = {name: 'John', JobTitle: 'Developer', email:
 'almabetter.com',isVerified : false}
// Print only the name and the verified status of the person. (Read operation)
// Change the isVerified status to true. (Update operation)
// Remove the property name and add two new properties firstName and lastName (Delete operation)
// Print the final object person.

person["firstName"]="john"
person["lastName"]="Snow"

console.log(person.name,person.isVerified)
person["isVerified"]="true"
delete person.name;
console.log(person)




