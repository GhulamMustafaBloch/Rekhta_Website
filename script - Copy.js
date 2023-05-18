const slides = document.querySelectorAll(".slider");
var counter = 0;
slides.forEach(
    (slider,index)=> {
        slider.style.left = `${index * 100}%`;
console.log(slider)
})

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter*100}%)`
    });
}

function Go_next (){
    counter ++;
    // alert("hello")
    slideImage();
}
function Go_prev(){
    counter --;
    // alert("hello")
    slideImage();
}