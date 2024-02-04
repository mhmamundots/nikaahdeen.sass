'use strict';

/*
const now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.toISOString());

const future = new Date(2090, 5, 30, 15, 40, 55);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());

console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());

console.log(future.toISOString());

console.log(future.getTime());
console.log(new Date(3802498855000));

future.setFullYear(2050);
future.setMonth(4);

console.log(future);
*/

// International date time formation
const now = new Date();

/*
const timezoneNames = [
  'short',
  'long',
  'shortOffset',
  'longOffset',
  'shortGeneric',
  'longGeneric'
];

for (const zoneName of timezoneNames) {
}
*/

const options = {
  weekday: 'short', // e.g. - narrow(T for both Thursday and Tuesday)/short(Thu)/long(Thursday)
  year: 'numeric', // e.g. - numeric / 2-digit
  month: 'long', // e.g. - numeric(3) / 2-digit(03) / long(February) / short(Feb) / narrow(F)
  day: 'numeric', // e.g. - numeric / 2-digit
  hour: 'numeric', // e.g. - numeric / 2-digit
  minute: 'numeric', // e.g. - numeric / 2-digit
  second: 'numeric', // e.g. - numeric / 2-digit

  hour12: true, // e.g. - false / true

  timeZone: 'Asia/Dhaka', // e.g. - Australia/Sydney / America/Los_Angeles
  timeZoneName: 'short' // e.g. - long(Bangladesh Standard Time) / short(BST, GMT+6) / shortOffset(GMT+6) / longOffset(GMT+6:00) / shortGeneric(BT, Dhaka) / longGeneric(Bangladesh Time, Dhaka)
};

const locale = navigator.language;

console.log(new Intl.DateTimeFormat(locale, options).format(now));

// International number formation
const number = 6849856435;

const localeLang = navigator.language;
const numOptions = {
  style: 'currency', // e.g. - decimal()[default] / currency / percent / unit
  currency: 'BDT', // e.g. - symbol()[default] / name / code / narrowSymbol
  useGrouping: false
  //   unit: 'short' // e.g. - short(l)[default] / narrow(l) / long(litres)
};

console.log(new Intl.NumberFormat(localeLang, numOptions).format(number));

// Asyncronus way
/*
setTimeout(
  (ing1, ing2, ing3) => {
    console.log(
      `Here is your delicious Pizza with ${ing1}, ${ing2}, and ${ing3}🍕!`
    );
  },
  5000,
  'Olives',
  'Spnics',
  'Capcicum'
);
*/

const ingredients = ['olives', 'spinach', 'capcicum'];
/*
setTimeout(
    (ing1, ing2, ing3) => {
        console.log(
      `Here is your delicious Pizza with ${ing1}, ${ing2}, and ${ing3}🍕!`
    );
  },
  5000,
  ingredients[0],
  ingredients[1],
  ingredients[2]
);
*/

const pizzaTime = setTimeout(
  (ing1, ing2, ing3) => {
    console.log(
      `Here is your delicious Pizza with ${ing1}, ${ing2}, and ${ing3} 🍕!`
    );
  },
  5000,
  ...ingredients
);

if (ingredients.includes('spinach')) clearTimeout(pizzaTime);

// Selectors
const pageTimer = document.querySelector('.page__timer');

// Countdown timer
// const productLunch = new Date('April 5, 2024 12:00:00').getTime();
const productLunch = new Date('Mar 7, 2024 12:00:00').getTime();
console.log(productLunch);

const countdownTimer = () => {
  const now = new Date().getTime();

  const remainingTime = productLunch - now;

  if (remainingTime > 0) {
    // Days calculation
    let days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
    // if (days < 10) days = days.toString().padStart(2, 0);
    days = days.toString().padStart(2, 0);

    // Hours calculation
    let hours = Math.floor(
      (remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    hours = hours.toString().padStart(2, 0);

    // Minutes calculation
    let minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    minutes = minutes.toString().padStart(2, 0);

    // Seconds calculation
    let seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
    seconds = seconds.toString().padStart(2, 0);

    const htmlCode = `
        <div class="page__time">
            <h3 class="page__number">${days}</h3>
            <p class="page__text">Days</p>
            </div>
            <span class="page__colon">:</span>
            <div class="page__time">
            <h3 class="page__number">${hours}</h3>
            <p class="page__text">Hours</p>
            </div>
            <span class="page__colon">:</span>
            <div class="page__time">
            <h3 class="page__number">${minutes}</h3>
            <p class="page__text">Minutes</p>
            </div>
            <span class="page__colon">:</span>
            <div class="page__time">
            <h3 class="page__number">${seconds}</h3>
            <p class="page__text">Seconds</p>
            </div>
        `;
    pageTimer.innerHTML = htmlCode;
  }
};

// Set countdown timer
setInterval(countdownTimer, 1000);
