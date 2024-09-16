function getMin() {
    let d = new Date();
    let min = d.getMinutes();
    let hMin = d.getHours() * 60;
    let tMin = min+hMin;
    return tMin;
}
function getPower() {
    return power;
}

function lum() {
    let rMin = getMin()/100;
    let y = 50 * (Math.E ** ((-1 * (rMin - 7.2) ** 8) / 10000))
    return y;
}

let daylight = 0;
function brightness(power = false, sun = false) {

    let tone = document.querySelectorAll(".floor, .window, .desk, .monitor .stand, .monitor .mouse, .monitor .keeb, .legleft, .legright, .bedframe, .books");

    if (power == true && daylight < 80) {
        for (let i = 0; i < tone.length; i++) {
            tone[i].style.filter = "brightness(80%)";
        }

        daylight = 80;
    }
    else if (power == false && sun) {
        let dim = 50;
        dim += lum();

        for (let i = 0; i < tone.length; i++) {
            tone[i].style.filter = "brightness(" + dim + "%)";
        }

        daylight = dim;
    }
    else if (power == false && sun == false) {
        let dim = 50;
        dim += lum();

        for (let i = 0; i < tone.length; i++) {
            tone[i].style.filter = "brightness(" + dim + "%)";
        }

        daylight = dim;
    }
    else if (power && sun) {
        //pass
    }

    if (daylight < 70) {
        let screen = document.querySelector('.screen');
        screen.style.boxShadow = "-12px 8px 80px 16px #EEEEFF";
    }
    
}

let tick = true; 
function time24() {
    let d = new Date();
    if(tick) {
        document.getElementById('time').innerHTML = d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes();
        tick = false;
    }
    else {
        document.getElementById('time').innerHTML = d.getHours() + ' ' + (d.getMinutes()<10?'0':'') + d.getMinutes();
        tick = true
    }
    setTimeout(time24, 1000);
}

function sundial() {
    let d = new Date();

    let world = document.querySelector(".world");
    let dial = (getMin() / 1440) * 360;
    world.style.transform = "rotate(" + dial + "deg)";

    brightness(getPower(), sun = true);

    setTimeout(sundial, 60000);
}


let power = false; 
function light() {
    let bulb = document.querySelector(".bulb");
    if (power == false) {
        power = true;

        bulb.style.backgroundColor = "rgb(255, 253, 130)";
        bulb.style.filter = "brightness(100%)";
        bulb.style.boxShadow = "0 0 2px 64px rgba(255, 253, 130, .4)";

        brightness(getPower());

        let screen = document.querySelector('.screen');
        screen.style.boxShadow = "";
    }
    else {
        power = false;

        bulb.style.backgroundColor = "white";
        bulb.style.filter = "brightness(80%)";
        bulb.style.boxShadow = "";

        brightness(getPower());

        let screen = document.querySelector('.screen');
        screen.style.boxShadow = "-12px 8px 80px 16px #EEEEFF";
    }
    

}