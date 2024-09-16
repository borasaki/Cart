function discount() {
    let d = new Date();
    let minute = d.getMinutes()
    var banner = document.createElement("div");
    banner.classList.add("banner")
    var container = document.querySelector(".container");
    container.appendChild(banner);
    banner.style.color = '#867287';
    banner.style.backgroundColor = '#e7dbe8';
    banner.style.borderRadius = '4px';
    banner.style.width = '25%';
    banner.style.height = '32px';
    banner.style.padding = '8px';
    banner.style.borderLeft = '8px solid #5c465f';

    if (minute % 2 == 0) {
        banner.innerHTML = "No discounts right now!";
    }
    else {
        banner.innerHTML = "There is a " + value.toFixed(2) + "% discount right now!";
    }
    setTimeout(fade, 5000);
}

function fade() {
    let banner = document.querySelector(".banner");
    banner.style.display = 'none'
}