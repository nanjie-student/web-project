"use strict";
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// (function(){
//     const buttonEl = document.querySelector("button");
//     const demoEl = document.querySelector(".demo");

    
//     buttonEl.addEventListener("click", function(){
//         demoEl.classList.toggle("active");
//         console.log("wow!I asked you not to touch");
//     });
// })();