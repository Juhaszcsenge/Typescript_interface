
 //mindent egy fájlba kellet írnom, mert végül így sikerült futtatnom a kódott helyesen

let lista  = [];
let nev = (document.getElementById('nev')as HTMLInputElement);
let kor = (document.getElementById('kor')as HTMLInputElement);
let meret = (document.getElementById('meret')as HTMLInputElement);
let arany = (document.getElementById('arany')as HTMLInputElement);

let hibamezo = (document.getElementById('hiba') as HTMLInputElement);

let jelenlegiEv : Number = new Date().getFullYear()

function nevcheck(nev : string) : boolean  {
    let reg = new RegExp('^[a-zA-Z ]*$')
    if (nev.length >= 1 && nev != "" && reg.test(nev))  {
        return true;
    }
    return false;
}

//itt az osztály

class Planet implements CelestialBody{
    name: string;
    age: number;
    size : number;
    waterContent : number;

    constructor(name: string, age: number, size: number, waterContent: number){
        this.name = name;
        this.age = age;
        this.size = size;
        this.waterContent = waterContent;


    };

//itt az interface

}
interface CelestialBody{
    name : string;
    age : number;
    size : number;
}


function meretCheck(meret : number) : boolean{
    if (meret >= 1500 && meret  != null ) {
        return true;
    }
    return false;
}

function korCheck(kor : number) : boolean{
    if (kor >= 0 && kor != null){
        return true;
    }
    return false;
}

function aranyCheck(arany : number) : boolean{
    if(arany >= 0 && arany <= 100 ){
        return true;
    }
    return false;
}

function EmtyAllFields(){
    nev.value= " ";
    kor.value = " ";
    meret.value = " ";
    arany.value = " ";
    hibamezo.textContent = "";
}
function calc(){

}

function checkAll(){
    if(nevcheck(nev.value) && korCheck(parseInt(kor.value)) && meretCheck(parseInt(meret.value)) && aranyCheck(parseInt(arany.value))){
        lista.push(new Planet(nev.value, parseInt(kor.value), parseInt(meret.value), parseInt(arany.value)))
        EmtyAllFields();
    }
    
    
        else{
        hibamezo.textContent = ""
        console.log("Nem jó")
        if(!nevcheck(nev.value))
        {
            hibamezo.textContent = "A név csak  ABC-t és szóközöket tartalmazhat"
        }
        else if(!korCheck(parseInt(kor.value))){
            hibamezo.textContent = "Az életkor pozitív kell hogy legyen"
        }
        else if(!meretCheck(parseInt(meret.value))){
            hibamezo.textContent = "Az átmérő minimum 1500 lehet "
        }
        else if(!aranyCheck(parseInt(arany.value))){
            hibamezo.textContent =" A víz felülett aránya"
        }
    }

}
document.addEventListener("DOMContentLoaded", () =>{
    console.log('Kiiratas');
    document.getElementById("submit")!.addEventListener('click', () => {
        console.log(nevcheck(nev.value))
        checkAll();
    })
})