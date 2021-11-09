// Visualizzare in pagina 5 numeri casuali. => arrey => ciclo while
// Da lì parte un timer di 30 secondi. => setTimeout
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). => promt dentro un for
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 

let numVisible = document.getElementById("container");
let numSolution = document.getElementById("prova");

const randomNum = [];

//creo 5 numeri casuali tutti diversi tra loro
while (randomNum.length < 5){

    const num = Math.floor(Math.random() * 100) + 1;
    let found = randomNum.includes(num);
    if(found === false){
        randomNum.push(num);
    }
    
}

//stampo questi numeri in pagina
randomNum.forEach((numPc) => {
    numVisible.innerHTML += `
        
        <div class="numbers">
            <span>
                ${numPc}
            </span>
        </div>  
        
    `
});

console.log(randomNum);


//creo una funzione che mi faccia apparire 5 promt chiedendo all'utente il numero 
setTimeout(numberTime, 30000);




//funzioni
function numberTime() {

    const selectNum = [];
    //inserisco nell'arrey i numeri uguali
    for(let i = 0; i < 5; i++) {
        let num = parseInt(prompt("scrivi un numero"));
        let sameNum = randomNum.includes(num);
        if(sameNum === true){
            selectNum.push(num)
        }  
    }

    //se nell'arrey ci sono i numeri li stampo come risultati
    let pcAndUser = randomNum.includes(selectNum);
    selectNum.forEach((numUser) => {

        if(pcAndUser === false){

            numSolution.innerHTML += `
            
                <span class="num">
                        ${numUser}
                </span>
                
            `
        }  
    });

    

    console.log(selectNum);
}