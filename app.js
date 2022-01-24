let card = document.getElementById('card');

document.querySelector('#openRegister').onclick = ()=> {
    card.style.transform = "rotateY(-180deg)";
}

document.querySelector('#openLogin').onclick = ()=> {
    card.style.transform = "rotateY(0deg)";
}

