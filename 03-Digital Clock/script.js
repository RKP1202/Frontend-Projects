const clock = document.getElementById("clock");

// console.log(clock);

let date = new Date();

// console.log(date.toLocaleTimeString());


 setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    document.querySelector("#clock").innerText = date.toLocaleTimeString();

    
 } , 1000);