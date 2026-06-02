const title = document.getElementById("main-title");
 const form = document.getElementById("item-form");

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);


 // CHANGE TITLE
    title.textContent = "Learning the DOM";

    // FORM SUBMIT EVENT
    const input = document.getElementById("item-input");
    const list = document.getElementById("item-list");


    form.addEventListener("submit", function(event) {
      event.preventDefault(); //prevent form from submitting and refreshing the page
    });




      

       form.addEventListener("submit", function(event) {
      const inputValue = input.value;
       });


      // Create new li
      newItem = document.createElement("li");
       form.addEventListener("submit", function(event) {
      const newItem = document.createElement("li");
       });

      // Add bootstrap class
      form.addEventListener("submit", function(event) {
      newItem.className = "list-group-item";
         });    

      // Add text

      form.addEventListener("submit", function(event) {
      newItem.textContent = inputValue;
         });

      // Append to list
    
      form.addEventListener("submit", function(event) {
      list.appendChild(newItem);
      });


      // Clear input
         form.addEventListener("submit", function(event) {
      input.value = "";
         });

     //Transversing the dom



         console.log(list.firstChild);

         console.log(list.lastChild);
    

         console.log(list.childNodes);

        
console.log(list.children);

console.log(list.firstElementChild);


const firstItem = document.querySelector(".list-group-item");
const mainTitle = document.querySelector("#main-title");
const listItem = document.querySelector("li");



//changing all items color to red using a query selector all
    const allItems = document.querySelectorAll(".list-group-item");
allItems.forEach(item => {
  item.style.color = "red";
});



const item = document.querySelector(".list-group-item");

console.log(item.parentElement);



