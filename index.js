// Your code goes here

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//   });

// //this console log will log before the one in the DOM event listener
// console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );


//Replace original content text with this content text once the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    let newText = document.getElementById("text");
    
    newText.innerHTML = "This is really cool!" ;
  });


