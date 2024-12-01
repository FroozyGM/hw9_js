let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
shoppingList.unshift("вода");
shoppingList.pop();
shoppingList.splice(2, 1, "йогурт", "масло");
console.log(shoppingList);