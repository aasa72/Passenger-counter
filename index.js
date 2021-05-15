let counter = 0
let counterInc = document.getElementById("counter-el")
let saveEl = document.getElementById("save-el")

//function to increment counter by one and print to html
function increment() {
  counter += 1                     
  counterInc.textContent = counter
}

//function to save count, print to html and reset counter
function save() {
  let saveStr = counter + " - "      
  
  saveEl.textContent += saveStr   
      
  counterInc.textContent = 0    
  counter = 0               
}