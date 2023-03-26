//Task 2 - sub task 1 - complete - the following code between the ticks satisfies Task 2 sub task 1 ✅
//Just remove the // to see the code in action

//In the task-2 index.html, there is a p tag (with an id of count) that displays a count. 
//Ensure the count displays 0 when the page loads 
//then, using setInterval, have it increment by 1 every second.

// set the initial count to 0
// let count = document.getElementById('count').innerHTML = 0;

// Increment the count every second  

// setInterval(function(){
//     let count = document.getElementById('count');
//     count.innerHTML = parseInt(count.innerHTML) + 1;    
//}, 1000);   ✅

//Task 2 - sub task 2 - complete ✅

//Stop the count from incrementing after 12 seconds have passed using the clearInterval function. 
//So 12 should be the last count displayed on the page.
//if count is - 12 then go back to zero

let count = document.getElementById('count');
let i = setInterval(function(){
    count.innerHTML = parseInt(count.innerHTML) + 1;
    if(parseInt(count.innerHTML) >= 12) clearInterval(i);
}, 1000);




