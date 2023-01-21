// DOM Manipulation

// Event Delegation

document.querySelector('#sports').addEventListener
('click', function (e) {

    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if(target.matches('li')) { 
        target.style.backgroundColor = 'lightgrey';
    } //The matches() method of the Element interface tests 
      // whether the element would be selected by the specified CSS selector.

}); 

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby'
newSport.setAttribute('id', 'rugby')
sports.append(newSport);

