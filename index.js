/* interactive navbar*/

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu"); 

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
))

/* show & hide map function */
const buttons = document.querySelectorAll(".mapbutton");
const maps = document.querySelectorAll(".map");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        maps[index].classList.toggle("active");
    });
});

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      if (button.textContent === "Show on map") {
        button.textContent = "Hide map";
      } else {
        button.textContent = "Show on map";
      }
      
    });
  });
