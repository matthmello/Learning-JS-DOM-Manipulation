// DOM Manipulation

// Event Propagation

window.addEventListener("click", function(){
    console.log('Window');
}, false); // For Default every addeventlistener is false
          // It makes the propagation desc 
          // In this case false would start from button and end in window
document.addEventListener("click", function(){
    console.log('Document');
}, false); // Being true the propagation will start from window and 
          // End in button
document.querySelector(".div2").addEventListener
("click", function (e){
//    e.stopPropagation() // By doing this I'm stopping the propagation in div2
    console.log("DIV 2")
}, false);

document.querySelector(".div1").addEventListener
("click", function (){
    console.log("DIV 1")
}, {once: true}); //By doing this Im making it's propagation appears only 
//one time, second time I click it won't appear anymore

document.querySelector("button").addEventListener
("click", function (e){  //e = event object
//    e.preventDefault() //If the button were <a> it would fix the error
    console.log(e.target.innerText = 'Clicked!');  
}, false);               // target = the element the event is on 