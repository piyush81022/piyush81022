const userDetails = { name: { first: "Kapil", last: "Raghuwanshi", },
 jobTitle: "JS Instructor@Almabetter.com",
  email: { work: "kapil@google.com", personal: "", },
 status: { isOnline: true, isVerified: false, } }
//  Use the object given here as the database object.
//  Update the userDetails object with your details. Keep the status property same as this.
//  Add new status property isProMember to the new object and set it to false.
//  console log resultant object
//{ name: { first: 'John', last: 'Snow' }, jobTitle: 'JS Instructor@Almabetter.com', email: { work: 'kapil@google.com', personal: '' },
// status: { isOnline: true, isVerified: false }, isProMember: false }
userDetails.name["first"]="john";
userDetails.name["last"]="Snow";
userDetails["isProMember"]="false";
console.log(userDetails);




