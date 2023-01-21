// DOM Manipulation


//              (STYLING ELEMENTS)

// getElementById()

//const title = document.getElementById('main-heading');
// console.log(title)

// title.style.color = 'blue';

// getElementsByClassName()

// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems)

// for(i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = 'blue'
//     listItems[i].style.backgroundColor = 'lightblue'
// }

// getElementsByTagName()

// const lists = document.getElementsByTagName('li');
// console.log(lists)

// for(i = 0; i < lists.length; i++) {
//     lists[i].style.color = 'blue'
//     lists[i].style.backgroundColor = 'lightblue'
// }

// querySelector()

// const container = document.querySelector('div'); //this will get the first div
// console.log(container)                           //if we had more divs, we would use querySelectorAll()


// const title = document.querySelector('#main-heading');
// console.log(title)

// title.style.color = 'lightblue';

// querySelectorAll()

// const containers = document.querySelectorAll('div');
// console.log(containers)

//_____________________________________________________________________________________

//              (CREATING ELEMENTS)

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

//_____________________________________________________________________________________

//              Adding Elements

// ul.append(li)

//              Removing Elements

// li.remove();

//_____________________________________________________________________________________

//              (MODIFYING THE THEXT)

// const firstItem = document.querySelector('.list-items');

// 3 Types of show in window
// console.log(firstItem.innerText);
// console.log(firstItem.textContent);
// console.log(firstItem.innerHTML);

// li.innerText = 'X-men'

//_____________________________________________________________________________________

//              (MODIFYING CLASSES & ATTRIBUTES)

// Inserindo um atributo 'id' (pode criar um novo, ou inserir em um já existente)
// li.setAttribute('id', 'main-heading');  

// Removendo o atributo 'id'
// li.removeAttribute('id');

// Descobrindo o atributo de uma variável, pode ser id ou class, caso nao tiver retornará null
// console.log(firstItem.getAttribute('class'))

// _____________________________________________________________________________________

// Inserindo um atributo 'class' (pode criar um novo, ou inserir em um já existente)
// li.classList.add('list-items')

// Removendo um atributo 'class'
// li.classList.remove('list-items')

// Retorna true ou false caso a variável possua a class ''
// console.log(li.classList.contains('list-items'))

//_____________________________________________________________________________________