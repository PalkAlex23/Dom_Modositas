/* Mennyi a kutyák életkora? */

export function atlagEletkor(list) {
    let osszEletkor = 0;
    for (let i = 0; i < list.length; i++) {
        osszEletkor += list[i].kor
    }
    let atlag = osszEletkor / list.length
    return atlag
}

export function divElem(list) {
    let txt = ""
    for (let i = 0; i < list.length; i++) {
        txt += `<div class="elem">`
        txt += `<img src="./${list[i].kep}" alt="kutya">`
        txt += `<h3>név: ${list[i].nev}</h3>`
        txt += `<p>kor: ${list[i].kor}</p>`
        txt += `<p>lábak száma: ${list[i].lab}</p>`
        txt += `<p>fajta: ${list[i].fajta}</p>`
        txt += `<button>Kiválaszt</button>`
        txt += `</div>`
    }
    console.log(txt)
    return txt
}