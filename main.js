function imgSlider(anything){
    document.querySelector('.marijuana1').src= anything;
}

function changeColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu(){
     var menuToggle = document.querySelector('.mobile');
     var navigation = document.querySelector('.navigation')
     menuToggle.classList.toggle('active')
     navigation.classList.toggle('active')
}