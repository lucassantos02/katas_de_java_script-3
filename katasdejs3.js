console.log("Atividade 1");


function vowelsCounter(array){

    let result = [];
    for (let i = 0; i < array.length; i++){
        let frutas = array[i];
        let numVowels = 0;
        for (let v = 0; v < frutas.length; v++){
            let frutasVogais = frutas[v].toLowerCase();

            if (frutasVogais == "a") {
                numVowels++;
            } else if (frutasVogais == "e"){
                numVowels++;
            } else if (frutasVogais == "i"){
                numVowels++;
            } else if (frutasVogais == "o"){
                numVowels++;
            } else if (frutasVogais == "u"){
                numVowels++;
            };
        };
        result.push(numVowels);
    };
    return result;
};
console.log(vowelsCounter(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]));


console.log("Atividade 2");

function stringTripletGroup(array){

    let result = [];
    for(let i = 0; i < array.length; i+= 3){
        let letras = array[i];
        let text = "";
        array[i + 1] ;
        array[i + 2];
        text += array[i];
        if(array[i + 1] == undefined){
            text += " ";
        } else {
            text += array[i + 1]
        }
        if(array[i + 2] == undefined){
            text += " ";
        } else {
            text += array[i + 2];
        };

        result.push(text);
    };
    return result;
};
console.log(stringTripletGroup("Os três mosqueteiros"));


console.log("Atividade 3");


function dominantPet(lista){

    let result = "";
    let icolCat = 0;
    let icolDog = 0;
    for (let i = 0; i < lista.length; i++){
        let letras = lista[i];

        if (letras.toLowerCase() == "dog") {
            icolDog++;
        } else if (letras.toLowerCase() == "cat") {
            icolCat++;
        };
    };

    if (icolCat === icolDog) {
        result += (`"DRAW!"`);
    } else if (icolDog > icolCat) {
        result += (`"DOG!"`);
    } else {
        result += (`"CAT!"`);
    };
    return result;
};
console.log(dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"]));


console.log("Atividade 4");


function divisibleList(lista, numero){

    let result = [];
    for (let i = 0; i <= lista.length; i++){
        let numb = lista[i];

        if (numb % numero == 0) {
            result.push(numb);
        };
    };
    return result;
};
console.log(divisibleList([14, 25, 32, 50, 35, 30], 5));


console.log("Atividade 5");


function trustMeOrNot(bool,numero){

    let result = [];
    for (let i = 1; i <= numero; i++){
        let number = i;

        result.push(bool);
    };
    return result;
};
console.log(trustMeOrNot(true, 8));


console.log("Atividade 6");


function changeLampStatus(lista){
    let result = [];
    for (let i = 0; i < lista.length; i++){
        let lampada = lista[i];


        if (lampada == true){
            result.push(false);
        } else {
            result.push(true);
        };
    };
    return result;
};
console.log(changeLampStatus([false, false, true, false, true, true, true]));


console.log("Atividade 7");


function gradeAverage(lista){
    let soma = 0;
    let quantity = 0;
    let result = "";
    for (let i = 0; i < lista.length; i++){
        let notas = lista[i];
        soma += notas;
        quantity++;
    };
    let media = (soma / quantity).toFixed(2);

    if (media >= 0.0 && media <= 10.0){
        result += (`"A media das notas é: ${media} ."`)
    };
    return result;
};
console.log(gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]));