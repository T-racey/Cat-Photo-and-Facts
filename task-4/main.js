// Bonus Task 1 - complete - ✅ 

//On your HTML page, you will see an input field and an 'Add To List' button. 
//Declare a new variable, importantThings, as an empty array. 
//Using JavaScript, configure the website so that when you write something in the input field and click the Add To List button, a new item is added to the importantThings array.

let importantThings = [];

function addToList() {
  let input = document.getElementById('important-thing').value;
  let priority = document.getElementById('priority').value;
    
  if (typeof input !== 'string') {
    return console.log('A legend requires a string');
  }
    
  importantThings.push({text: input, priority: priority});
  console.log(importantThings);
    
  let ol = document.getElementById('my-list');
  let li = document.createElement('li');
  li.textContent = `Priority ${priority}: ${input}`;
  ol.appendChild(li);
    
  document.getElementById('important-thing').value = "";
  document.getElementById('priority').value = 1;
}
  
function orderList() {
  importantThings.sort(function(a, b) {
    return a.priority - b.priority;
  });
  
  let ol = document.getElementById('my-list');
  ol.innerHTML = '';
  
  for (let i = 0; i < importantThings.length; i++) {
    let li = document.createElement('li');
    li.textContent = `Priority ${importantThings[i].priority}: ${importantThings[i].text}`;
    ol.appendChild(li);
  }
}

document.getElementById('add-to-list').addEventListener('click', addToList);

document.getElementById('order-list').addEventListener('click', orderList);


//write a function which stores new add to list text to the array ✅

//add an event listener which calls the function when the button is clicked ✅

// Bonus Task 2

// As well as adding the item to the in-memory array, now display each added item in an li element within the ordered list.✅

// Bonus Task 3
// Add a new label and input field element to your index.html file. ✅
//This input field represents the priority value of your important thing, and should take in a number. ✅
//Refactor your code so that, when you click your Add To List button, you add an object to your array, rather than a string value. For example: let importantThings = [{text: 'telephone mother', priority: 1}].
✅
// Bonus Task 4 

//Add a new button to your site called Order List. ✅
//When the button is clicked, reorder your list by priority.✅

// Bonus Task 5

// For the makeLegend function from Task 1, refactor it to check that you were handed a string - ✅
//if you weren't, then return 'A legend requires a string'✅


