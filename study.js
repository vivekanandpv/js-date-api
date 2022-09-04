const now = new Date(); //  current date time

const newYear = new Date(2022, 0, 1);

const newYearIsBefore = newYear < now; //  also: >, >=, <=

const diff = now - newYear; //  difference in milliseconds; manually convert it to the units required
