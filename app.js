const data = require('./data.json');

//The full dataset:
// console.log(data);

// Step One: use a map function on the full dataset to retrieve these properties - balance, name, and company, plus add a new property: balanceInEuros.

console.log(
  data
    .map((i) => `balance: ${i.balance}, name: ${i.name}, company: ${i.company}`)
    .map((j) => j.split(', ').map((j) => j.split(': ')))
    .map((k) => Object.fromEntries(k))
    .map((l) =>
      Object.assign(l, {
        balanceInEuros: (
          l.balance.slice(1, l.balance.length).replace(/,/g, '') * 1.41544
        ).toFixed(2),
      })
    )
);

// Step Two: use a map function to the full dataset to retrive the index of the objects whose tags include "mollit"

data.map((i) =>
  i.tags.includes('mollit') ? console.log(data.indexOf(i)) : null
);

//Step Three: use a forEach function on the full dataset to retrieve the names of the objects which have 2 or more friends
data.forEach((i) => (i.friends.length >= 2 ? console.log(i.name) : null));

//Step Four: use a reduce function on the full dataset to find the total balance of all active users (isActive = true).
console.log(
  '$' +
    data
      .filter((i) => i.isActive)
      .map((i) => +i.balance.slice(1, i.length).replace(/,/g, ''))
      .reduce((a, b) => a + b)
      .toFixed(2)
);
