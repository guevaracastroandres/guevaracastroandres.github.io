const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Aaturday",
]

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "September",
    "October",
    "November",
    "December"
]

const todasydate = new Date();
const dayName = dayName[todasydate.getDay()];
const monthName = months [getMonth()];
const year = todasydate.getFullYear;
const currentdate = dayName + ", "  +  todasydate.getDate() + " " + monthName +", " +todasydate.getFullYear();

document.getElementBy('currentdate').textContent = currentdate;