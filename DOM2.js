//              (TRAVERSIN THE DOM)


//              (PARENT NODE TRAVERSAL)

//let ul = document.querySelector('ul');

// Mostra o Pai do ul, que nesse caso é a div class="container"
// console.log(ul.parentNode);
// console.log(ul.parentElement);

// Mostra o Avô do ul, que nesse caso é o Body

// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)

// Qual a diferença entre o parentNode e o parentElement?

// const html = document.documentElement;
// Nesse caso ele mostrará o #document que é o pai do HTML
// console.log(html.parentNode)

// Nesse caso ele retornará como null
// console.log(html.parentElement)

// Os dois são praticamente a mesma coisa dentro do DOM, porém utilizar o parentNode


//              (CHILD NODE TRAVERSAL)

// Mostrará todos os nodes inclusive texts e li
// console.log(ul.childNodes);

// Mostrará a quantidade de filhos que esse ul possui, nesse caso '5' elementos li
// console.log(ul.childElementCount);

// Mostrará todas os lis dentro do ul
// console.log(ul.children);

// Mostrará o primeiro node
// console.log(ul.firstChild);
// Mostrará o ultimo node
// console.log(ul.lastChild);
// Ambos serão text pois o ul começa com text e termina com text

// Mudará a cor do node 1 que é o segundo da lista
// ul.childNodes[1].style.color = 'lightblue';

// Mostrará o primeiro elemento inteiro

//  console.log(ul.firstElementChild)

// Mostrará o ultimo elemento inteiro

//  console.log(ul.lastElementChild)


//              (SIBLING NODE TRAVERSAL)        

// let ul = document.querySelector('ul');
// const div = document.querySelector('div');

// Nesse caso mostrará o irmão acima do ul, que no caso é o h1 que está no mesmo nível
// console.log(ul.previousElementSibling)
// Nesse caso mostrará o irmão abaixo do ul, que nesse caso é null pois não há nenhum após
// console.log(ul.nextElementSibling)
