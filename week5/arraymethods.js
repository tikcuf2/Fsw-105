var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
//console.log ("vegetables", vegetables);

fruit.shift()
//console.log ("fruit", fruit);

var indexOforange = fruit.indexOf("orange")
fruit.indexOf("orange")
//console.log ("find orange: " + indexOforange);

fruit.push(indexOforange);
//console.log (fruit.push(indexOforange));

//console.log(vegetables.length);

vegetables.push(vegetables.length);

var food = fruit.concat(vegetables);
    //console.log(food);
  
food.splice(4,2) 
    //console.log(food);

food.reverse()
    //console.log(food);

console.log(food.toString());





