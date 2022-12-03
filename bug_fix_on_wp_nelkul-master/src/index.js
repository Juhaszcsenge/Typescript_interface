"use strict";
 
let lista = [];
let nev = document.getElementById('nev');
let kor = document.getElementById('kor');
let meret = document.getElementById('meret');
let arany = document.getElementById('arany');
let hibamezo = document.getElementById('hiba');
let jelenlegiEv = new Date().getFullYear();
function nevcheck(nev) {
    let reg = new RegExp('^[a-zA-Z ]*$');
    if (nev.length >= 1 && nev != "" && reg.test(nev)) {
        return true;
    }
    return false;
}
//itt az osztályod 
class Planet {
    constructor(name, age, size, waterContent) {
        this.name = name;
        this.age = age;
        this.size = size;
        this.waterContent = waterContent;
    }
    ;
}
function meretCheck(meret) {
    if (meret >= 1500 && meret != null) {
        return true;
    }
    return false;
}
function korCheck(kor) {
    if (kor >= 0 && kor != null) {
        return true;
    }
    return false;
}
function aranyCheck(arany) {
    if (arany >= 0 && arany <= 100) {
        return true;
    }
    return false;
}
function EmtyAllFields() {
    nev.value = " ";
    kor.value = " ";
    meret.value = " ";
    arany.value = " ";
    hibamezo.textContent = "";
}
function calc() {
}
function checkAll() {
    if (nevcheck(nev.value) && korCheck(parseInt(kor.value)) && meretCheck(parseInt(meret.value)) && aranyCheck(parseInt(arany.value))) {
        lista.push(new Planet(nev.value, parseInt(kor.value), parseInt(meret.value), parseInt(arany.value)));
        EmtyAllFields();
    }
    else {
        hibamezo.textContent = "";
        console.log("Nem jó");
        if (!nevcheck(nev.value)) {
            hibamezo.textContent = "A név csak  ABC-t és szóközöket tartalmazhat";
        }
        else if (!korCheck(parseInt(kor.value))) {
            hibamezo.textContent = "Az életkor pozitív kell hogy legyen";
        }
        else if (!meretCheck(parseInt(meret.value))) {
            hibamezo.textContent = "Az átmérő minimum 1500 lehet ";
        }
        else if (!aranyCheck(parseInt(arany.value))) {
            hibamezo.textContent = " A víz felülett aránya";
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    console.log('Kiirtas');
    document.getElementById("submit").addEventListener('click', () => {
        console.log(nevcheck(nev.value));
        checkAll();
    });
});
