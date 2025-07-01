let indexValue = 1;
showImage(indexValue);
const izq = document.querySelector(".left");
const dcha = document.querySelector(".right");

izq.addEventListener("click",()=>{
    showImage(indexValue+=-1)
})

dcha.addEventListener("click",()=>{
    showImage(indexValue+=1)
})

let array = document.querySelectorAll(".btn")
    array.forEach((item, index) => {

        item.addEventListener("click", (e) => {
            indexValue = parseInt(e.target.id.substr(-1));
            showImage(indexValue)
        })
    })

function showImage(e){
    var i;
    const img = document.querySelectorAll('.coches');

    const slider = document.querySelectorAll('.btn-slides span');
    if (e > img.length) {
        indexValue = 1
    }
    if (e < 1) {
        indexValue = img.length
    }
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    for (i = 0; i < slider.length; i++) {
        slider[i].style.background = "rgba(255,255,255,0.1)";
    }

    img[indexValue - 1].style.display = "block";
    slider[indexValue - 1].style.background = "white";
};

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    this.classList.toggle('collapsed');
    document.getElementById('navbarNav').classList.toggle('show');
});