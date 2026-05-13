var currentPos = 0;
var track = document.getElementById("mainTrack");

function moveRight() {
    if (currentPos > -400) { // Simple limit for 5 items
        currentPos = currentPos - 100;
        track.style.transform = "translateX(" + currentPos + "%)";
    }
}


function moveLeft() {
    if (currentPos < 0) {
        currentPos = currentPos + 100;
        track.style.transform = "translateX(" + currentPos + "%)";
    }
}


function showTeams() {
    document.getElementById("btnT").classList.add("active");
    document.getElementById("btnD").classList.remove("active");

    track.innerHTML = `
        <div class="item-card"> <h2>RED BULL</h2> <img src="./2026redbullracingcarright.avif" width="150"> </div>
        <div class="item-card"> <h2>FERRARI</h2> <img src="./2026ferraricarright.avif" width="150"> </div>
        <div class="item-card"> <h2>Mercedes</h2> <img src="./2026mercedescarright.avif" width="150"> </div>
        <div class="item-card"> <h2>McLaren</h2> <img src="./2026mclarencarright.avif" width="150"> </div>
        <div class="item-card"> <h2>Aston Martin</h2> <img src="./2026astonmartincarright.avif" width="150"> </div>
        <div class="item-card"> <h2>Alphine</h2> <img src="./2026alpinecarright.avif" width="150"> </div>
        <div class="item-card"> <h2>Audi</h2> <img src="./2026audicarright.avif" width="150"> </div>
        <div class="item-card"> <h2>Cadillac</h2> <img src="./2026cadillaccarright.avif" width="150"> </div>
        <div class="item-card"> <h2>Racing Bulls</h2> <img src="./2026racingbullscarright.avif" width="150"> </div>
        <div class="item-card"> <h2>Haas</h2> <img src="./2026haasf1teamcarright.avif" width="150"> </div>
        <div class="item-card"> <h2>Williams</h2> <img src="./2026williamscarright.avif" width="150 "> </div>
    `;
    currentPos = 0;
    track.style.transform = "translateX(0%)";
}


function showDrivers() {
    document.getElementById("btnD").classList.add("active");
    document.getElementById("btnT").classList.remove("active");

    track.innerHTML = `
        <div class="item-card"> <p>George</p> <h2>RUSSELL</h2> <img src="./george.png" width="150"> </div>
        <div class="item-card"> <p>Andrea</p> <h2>KIMI</h2> <img src="./kimi.png" width="150"> </div>
        <div class="item-card"> <p>Charles</p> <h2>LECLERC</h2> <img src="./charles.png" width="150"> </div>
        <div class="item-card"> <p>Lewis</p> <h2>HAMILTON</h2> <img src="./hamilton.png" width="150"> </div>
        <div class="item-card"> <p>Max</p> <h2>VERSTAPPEN</h2> <img src="./max.png" width="150"> </div>
        <div class="item-card"> <p>Isack</p> <h2>HADJAR</h2> <img src="./isack.png" width="150"> </div>
        <div class="item-card"> <p>Lando</p> <h2>NORRIS</h2> <img src="./lando.png" width="150"> </div>
        <div class="item-card"> <p>Oscar</p> <h2>PIASTRI</h2> <img src="./piastri.png" width="150"> </div>
        <div class="item-card"> <p>Fernando</p> <h2>ALONSO</h2> <img src="./alonso.png" width="150"> </div>
        <div class="item-card"> <p>Lance</p> <h2>STROLL</h2> <img src="./stroll.png" width="150"> </div>
        <div class="item-card"> <p>Valtteri</p> <h2>BOTTAS</h2> <img src="./bottas.png" width="150"> </div>
        <div class="item-card"> <p>Sergio</p> <h2>PEREZ</h2> <img src="./perez.png" width="150"> </div>
        <div class="item-card"> <p>Pierre</p> <h2>GASLY</h2> <img src="./gasly.png" width="150"> </div>   
        <div class="item-card"> <p>Franco</p> <h2>COLAPINTO</h2> <img src="./Franco.png" width="150"> </div> 
        <div class="item-card"> <p>Carlos</p> <h2>SAINZ</h2> <img src="./carlos.png" width="150"> </div> 
        <div class="item-card"> <p>Alexander</p> <h2>ALBON</h2> <img src="./albon.png" width="150"> </div> 
        <div class="item-card"> <p>Liam</p> <h2>LAWSON</h2> <img src="./liam.png" width="150"> </div> 
        <div class="item-card"> <p>Arvid</p> <h2>LINBLAD</h2> <img src="./linblad.png" width="150"> </div> 
        <div class="item-card"> <p>Esteban</p> <h2>OCON</h2> <img src="./ocon.png" width="150"> </div> 
        <div class="item-card"> <p>Oliver</p> <h2>BEARMAN</h2> <img src="./haas.png" width="150"> </div> 
        <div class="item-card"> <p>Nico</p> <h2>HULKENBERG</h2> <img src="./hulkenberg.png" width="150"> </div> 
        <div class="item-card"> <p>Gabriel</p> <h2>BORTOLETO</h2> <img src="./bortoleto.png" width="150"> </div> 
        
    `;   
    currentPos = 0;
    track.style.transform = "translateX(0%)";
}