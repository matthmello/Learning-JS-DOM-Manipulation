//  (EVENT LISTENERS)

const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const boxes = document.querySelectorAll('.boxes')
const title = document.querySelector('#main-heading');

let clicked = true
let mouseover = true


// Add event listener com a função dentro
btn2.addEventListener("click", () => {   
    if(clicked == true){
        title.style.color = 'rgb(0, 302, 302)';
        title.style.boxShadow = '0 0 10px white';
        title.style.borderRadius = '10px';
        title.style.transition = '1s';
        clicked = false
    } else {
        title.style.color = 'white'
        title.style.boxShadow = 'none'
        title.style.transition = '1s';
        clicked = true
    }
});


// Função para mudar o background das boxes
const changeBoxesColor = () => {
    if (mouseover == true) {
        for(i=0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = 'rgb(16, 65, 83)';
            boxes[i].style.boxShadow = '0 0 10px white';
            boxes[i].style.transition = '1s';
            mouseover = false }
        } else {
        for(i=0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = 'transparent';
            boxes[i].style.boxShadow = 'none';
            mouseover = true }
        }
}

// Add event listener com click puxando a função de mudar cor
btn3.addEventListener("mouseover", changeBoxesColor)
btn3.addEventListener("mouseout", changeBoxesColor)
