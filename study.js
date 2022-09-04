//  Creating date time object
const d1 = new Date(); //  current date time

const d2 = new Date(2022, 8, 4, 7, 4, 30); //  year, month, day, hour, minute, second; month is 0-11!

const d3 = new Date('2022-09-04'); //  from ISO date string; will add timezone offset to 0:0

const d4 = new Date(1662255417528); //  from milliseconds (from UNIX epoch)

console.log(d1); // for example: Sun Sep 04 2022 07:07:45 GMT+0530 (India Standard Time)

console.log(d1.toDateString()); //  e.g.: Sun Sep 04 2022

console.log(d1.toISOString()); //  e.g.: 2022-09-04T01:41:51.151Z

console.log(d1.toJSON()); //  e.g.: 2022-09-04T01:44:14.595Z

console.log(d1.toLocaleDateString()); //  e.g.: 9/4/2022

console.log(d1.toTimeString()); //  e.g.: 07:11:51 GMT+0530 (India Standard Time)

console.log(d1.toUTCString()); //  e.g.: Sun, 04 Sep 2022 01:41:51 GMT
