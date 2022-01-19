// Inputs de donde se toman los datos
const inpBD = document.querySelector('#inpBD');
const inpDB = document.querySelector('#inpDB');

// Botones
const btnBD = document.querySelector('#btnBD');
const btnDB = document.querySelector('#btnDB');

// Inputs donde se muestran los datos
const boxBD = document.querySelector('#boxBD');
const boxDB = document.querySelector('#boxDB');



// Carga los eventos y funciones al dar click sobre los botones
cargaEventListeners();
function cargaEventListeners() {
    btnBD.addEventListener('click', validarBin);
    btnDB.addEventListener('click', DToB)
}


// Valida si el número es binario
function validarBin() {
    let patern = /^[01]+$/;
    let numberBinToDec = inpBD.value;
    let checkNumb = new RegExp(patern);
    
    if(checkNumb.test(numberBinToDec)){
        convertBinToDec(numberBinToDec);
    } else {
        alert('El número ingresado no es binario');
        inpBD.value = "";
    }
}


// Convierte de binario a decimal
function convertBinToDec(numberBinToDec){
    const arr = [...`${numberBinToDec}`].map(n => parseInt(n));
    arr.reverse();
    const base = 2;
    let   suma = 0;
    let   formula = 0;

    for (let i = 0; i < arr.length; i++) {
        formula = Math.pow(base, i) * arr[i];
        suma += formula;
    }

    boxBD.value = suma;

    // Limpia los imputs después de 3 segundos
    setTimeout(() => {
        boxBD.value = "";
        inpBD.value = "";
    }, 3000);

}


// Convierte de decimal a binario
function DToB() { 
    let numberDecToBin = inpDB.value;
    const base = 2;
    const arr = [];
    let residuo,
        resultado
    
    while (numberDecToBin >= base) {    
        resultado = Math.floor(numberDecToBin / base);
        residuo = numberDecToBin % base;
        arr.push(residuo);
        numberDecToBin = resultado;
    }
    arr.push(resultado)

    boxDB.value = arr.reverse().join("");

    // Limpia los imputs después de 3 segundos
    setTimeout(() => {
        inpDB.value = "";
        boxDB.value = "";
    }, 3000);
}


