// Meccanismo del controllo mail


let arrayEmail = ['pincopallo@gmail.com', 'bingobongo@gmail.com', 'mumbojumbo@gmail.com', 'giuseppe@gmail.com'];

const email = prompt('Inserire indirizzo e-mail');



let accesso = document.getElementById('h2email');

let submitButton = document.getElementById('submit');

function displayAccessoConsentito() {
    accesso.innerHTML = '<p>Accesso consentito</p>'
}

function displayAccessoNonConsentito() {
    accesso.innerHTML = '<p>Accesso non consentito</p>'
}



let emailBool = false;

for(i=0; i<arrayEmail.length; i++) {

    if(email === arrayEmail[i]) {
        emailBool = true;
        console.log('Accesso consentito');
        submitButton.addEventListener('click', displayAccessoConsentito);
        break;
    }
}

if(emailBool == false) {
    console.log('Accesso non consentito');
    submitButton.addEventListener('click', displayAccessoNonConsentito);

}





// Meccanismo gioco dei dadi con array


let tu = document.getElementById('h2tu');

let pc = document.getElementById('h2pc');

let giocaButton = document.getElementById('gioca');

let esito = document.getElementById('esito');

function tuPcFunction() {
    const min = Math.ceil(1);
    const max = Math.floor(7);
    let tuNumber = Math.floor(Math.random() * (max - min) + min);
    let pcNumber = Math.floor(Math.random() * (max - min) + min);
    tu.innerHTML = 'Tu: '+ tuNumber;
    pc.innerHTML = 'Pc: '+ pcNumber;

    if(tuNumber > pcNumber) { 
        esito.innerHTML = '<p>Hai vinto!</p>'
    } else if(tuNumber < pcNumber) {
        esito.innerHTML = '<p>Ha vinto il Pc, machines are rising up!!!</p>'
    } else {
        esito.innerHTML = '<p>Pareggio</p>'
    }
}

giocaButton.addEventListener('click', tuPcFunction);