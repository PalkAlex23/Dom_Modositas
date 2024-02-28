import { KUTYALISTA } from "./adat.js";
import { atlagEletkor, divElem } from "./fuggvenyek.js";

/* Mennyi a kutyák életkora? */

let atlag = atlagEletkor(KUTYALISTA)
let oldalDiv = divElem(KUTYALISTA)

/* Írjuk ki a HTML oldalba, p tagek közé! */

const adatokELEM = document.querySelector('#kutyak')

adatokELEM.innerHTML = `<p>A kuyták átlagéletkora: ${atlag}</p>`
adatokELEM.innerHTML = oldalDiv

/* class névvel megadott elemek elérése */
const kutyaELEMEK = document.getElementsByClassName("elem")
console.log(kutyaELEMEK)
const elsoKutyaKARTYA = kutyaELEMEK[0]
console.log(elsoKutyaKARTYA)

/* querySelectorAll */
const kutyaELEMEK2 = document.querySelectorAll(".kutya")
console.log(kutyaELEMEK2)

/* hogy érem el a második kártya képét? */
const KEPELEMEK = document.querySelectorAll(".elem img")
console.log(KEPELEMEK[1])

/* eseménykezelés */
/* megfogjuk a gombot */
const GOMBELEM = document.querySelectorAll(".elem button")
/* rátesszük az eseménykezelőt */
for (let index = 0; index < KUTYALISTA.length; index++) {
    GOMBELEM[index].addEventListener("click", gombKattintas)
}
/* És meghatározzuk, hogy mit csináljon */

function gombKattintas() {
    alert("Kiválasztottál egy kutyát!")
}