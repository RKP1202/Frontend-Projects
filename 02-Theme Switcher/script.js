const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

console.log(buttons);

buttons.forEach(function (btn) {
    
    btn.addEventListener('click' , function(e){
        body.style.backgroundColor = e.target.id;
    });
    
});

