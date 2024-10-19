const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];        
    }

    return color;
};

let myInterval;

const startChangingColor = function(){

   if(!myInterval)
   {
        myInterval = setInterval(changeBg, 1000);
   }


    function changeBg() {
        document.body.style.backgroundColor = randomColor();
    }

};

const stopChangingColor = function(){
    clearInterval(myInterval);

    // after stop is clicked there is no need of myInterval 
    // so by making it null we will save space

    myInterval = null;

};

document.querySelector('#start').addEventListener('click' , startChangingColor);
document.querySelector('#stop').addEventListener('click' , stopChangingColor);




