var prompt = require("prompt-sync")();

const newsPaperSubscriptionPrice = [
  {
    id: 1,
    name: "TOI",
    price: [3, 3, 3, 3, 3, 5, 6],
  },
  {
    id: 2,
    name: "Hindu",
    price: [2.5, 2.5, 2.5, 2.5, 2.5, 4, 4],
  },
  {
    id: 3,
    name: "ET",
    price: [4, 4, 4, 4, 4, 4, 10],
  },
  {
    id: 4,
    name: "BM",
    price: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
  },
  {
    id: 4,
    name: "HT",
    price: [2, 2, 2, 2, 2, 4, 4],
  },
];

var weekelyBudget = prompt("Enter your weekly budget:");

var resultArray = [];

for (var i = 0; i < newsPaperSubscriptionPrice.length; i++) {
  // start
  let newsPaper1Price = 0;
  let newsPaper2Price = 0;
  for (var j = 0; j < newsPaperSubscriptionPrice[i].price.length; j++) {
    newsPaper1Price = newsPaper1Price + newsPaperSubscriptionPrice[i].price[j];
  }
  // Start
  for (var k = i + 1; k < newsPaperSubscriptionPrice.length; k++) {
    for (var l = 0; l < newsPaperSubscriptionPrice[k].price.length; l++) {
      newsPaper2Price =
        newsPaper2Price + newsPaperSubscriptionPrice[k].price[l];
    }
    if (newsPaper1Price + newsPaper2Price <= weekelyBudget) {
      var name1 = newsPaperSubscriptionPrice[i].name;
      var name2 = newsPaperSubscriptionPrice[k].name;
      resultArray.push({
        name1,
        name2,
      });
    }
    newsPaper2Price = 0;
  }
  newsPaper1Price = 0;
}

console.log(resultArray);
