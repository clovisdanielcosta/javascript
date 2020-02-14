//Blocos condicionais (para teste do prompt e alert precia do html)

//var idade = prompt("Qual a sua idade?");
var idade = Math.floor(Math.random() * 25);// Gerando idade aleatória
                                                // entre 14 a 25. 
if(idade >= 18){
    console.log(`Maior de Idade: ${idade}`);
    //alert("Maior de Idade");
}else{
    console.log(`Menor de Idade: ${idade}`);
    //alert ("Menor de Idade");
};