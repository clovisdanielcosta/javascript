// var validar; ESCOPO GLOBAL DA VARIÁVEL
function validarIdade(idade){

    var validar; //ESCOPO LOCAL DA VARIÁVEL

    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

idade = Math.floor(Math.random() * 25); 

console.log("\nQual a sua idade?");
console.log(`\nMinha idade é: ${idade}`);
console.log("\nValidar: "+ validarIdade(idade));



