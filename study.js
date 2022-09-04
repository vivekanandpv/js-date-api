//  Creating date time object
const d1 = new Date(); //  current date time

const year = d1.getFullYear(); //  2022

const month = d1.getMonth(); //  8 for september!

const date = d1.getDate(); //  date of the month (1-31)

const hour = d1.getHours(); //  0-23

const minutes = d1.getMinutes(); //  0-59

const seconds = d1.getSeconds(); //  0-59

const milliseconds = d1.getMilliseconds(); //  0-999

const millisecondsFromEpoch = d1.getTime(); //  WARNING! milliseconds from UNIX epoch!

const dayOfWeek = d1.getDay(); //  0-6 [Sun-Sat]
