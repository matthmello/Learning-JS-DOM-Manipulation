// Reveal Event

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content')

let clicked = true

function revealContent() {
    if (clicked == true){
        hiddenContent.style.display = 'flex';
        revealBtn.style.width = '25%';
        clicked = false
    }   else {
        hiddenContent.style.display = 'none';
        revealBtn.style.width = '100%';
        clicked = true
    }
}

revealBtn.addEventListener("click", revealContent)