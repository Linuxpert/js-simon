// Visualizzare in pagina 5 numeri casuali. => arrey => ciclo while
// Da lì parte un timer di 30 secondi. => setTimeout
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const randomNum = [];

while (randomNum.length < 5){

    const num = Math.floor(Math.random() * 100) + 1;
    let found = randomNum.includes(num);
    if(found === false){
        randomNum.push(num);
    }
    
}

console.log(randomNum);

const selectNum = [];

setTimeout(numberTime, 3000);

console.log(selectNum);



//funzioni
function numberTime() {
    for(let i = 0; i < 6; i++) {
        let num = parseInt(prompt("scrivi un numero"));
        let sameNum = randomNum.includes(num);
        if(sameNum === true){
            selectNum.push(num)
        }
    }
}