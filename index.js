// The 3 lines below declares a variable called btnEl, birthdayEl, resultEl, and
//assigns it the value of the HTML element with an ID of “btn”, “birthday”, “result”.
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// The function calculateAge() first gets the value of the birthdayEl input field
//and stores it in a variable called birthdayValue.
function calculateAge() {
  const birthdayValue = birthdayEl.value;
  //If birthdayValue is an empty string, an alert message pops up asking the user to enter their birthday.
  if (birthdayValue === "") {
    alert("please enter your birthday");
    // If a valid date is entered, the function calls another function called getAge()
    //with birthdayValue as an argument.
  } else {
    const age = getAge(birthdayValue);
    //this information is displayed on the page using JavaScript’s innerText property.
    resultEl.innerText = `you are ${age.years} ${
      age.years > 1 ? "years" : "year"
    } old, ${age.months} ${age.months > 1 ? "months" : "month"} old, ${
      age.days
    } ${age.days > 1 ? "days" : "day"} old, and ${age.hours} ${
      age.hours > 1 ? "hours" : "hour"
    } old`;
  }
}
// The getAge() function calculates the difference between the current date
//and the user’s birthday using JavaScript’s built-in Date() object and returns an object
//containing the user’s age in years, months, days, and hours.
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getMonth())
  ) {
    age--;
  }

  const diffTime = Math.abs(currentDate - birthdayDate);
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * (365 / 12)));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

  return { years: age, months: diffMonths, days: diffDays, hours: diffHours };
}

btnEl.addEventListener("click", calculateAge);

/*

-The getAge() function takes a single argument (birthdayValue) which represents the user’s birthday input.

-The function first creates two new instances of JavaScript’s built-in Date() object: 
 one for today’s date (currentDate) and one for the user’s birthday (birthdayDate).

-It then calculates the user’s age in years by subtracting their birth year from today’s year.

-Next, it calculates how many months have passed since their last birthday by subtracting their 
 birth month from today’s month.

-If today’s date is earlier than their birth month this year 
 (i.e., they haven’t had their birthday yet), then we subtract one from their age to account for this.

-Finally, it calculates how many days and hours have passed since their last birthday 
 using JavaScript’s built-in date methods.
*/
