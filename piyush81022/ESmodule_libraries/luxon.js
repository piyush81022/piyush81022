//luxon
const {DateTime}=require("luxon");
const now =DateTime.now();
//console.log(now);
//dt =DateTime.now().toString();
//console.log(dt)
//console.log(now.zoneName);
 //console.log(now.daysInMonth);
 newDate=now.minus({days:52});
 fiveho=now.plus({hour:5})
 const dt = DateTime.now();
 const time1=DateTime.fromISO()
 dt.set({hour: 3}).hour
  x=fiveho.toString();
 console.log(dt);//five houe latter time is\
 //var dt = DateTime.now();
var f = {month: 'long', day: 'numeric'};
dt.setLocale('fr').toLocaleString(f) //=> '14 septembre'
dt.setLocale('en-GB').toLocaleString(f) //=> '14 September'
dt.setLocale('en-US').toLocaleString(f) 
DateTime.now().setZone("America/Los_Angeles")
console.log(DateTime)


