/*
var nome = "Clóvis Daniel";
var idade = 47;
var idade2 = 13;
var frase = "Japão é o melhor time do mundo";

alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(idade);
console.log(frase);
console.log(frase.replace("Japão", "Ibis"));
alert(frase.replace("Japão", "Rede"));
alert(frase.toUpperCase());
alert(idade * idade2);
*/

/*
var lista = ["Maçã", "Pêra", "Laranja"];
console.log(lista.length);
console.log(lista);
lista.push("Uva");
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));
lista.pop();
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista[1]); 
alert(lista[1]);
*/

//Dicionário
/*
var fruta = {nome:"Maçã", cor:"Vermelha"};
console.log(fruta);
alert(fruta.cor);
*/

/*
//Lista de Dicionários
var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

//Blocos condicionais
/*
var idade = prompt("Qual a sua idade?");

if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert ("Menor de Idade");
};
*/

/*
//Laços de Repetição
var count = 0;

while (count <= 5){
    console.log(count);
    count = count + 1;
};
console.log("");

count = -3;
while (count <= 5){
    console.log(count);
    count++;
};

var cont;

for(cont=0; cont <= 5; cont++){
    alert(cont);
};
*/

/*
//Trabalhando com datas
var d = new Date();

alert(d);
alert(d.getMonth() + 1);
alert(d.getDay());
alert(d.getFullYear());
alert(d.getHours());
alert(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
*/

/*
//Funções
function soma(n1, n2){
    return n1 + n2;
};

alert(soma(10, 91));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
};

alert(setReplace("Vai que é tua Júlio César!", "Júlio César", "Tafarel"));

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

idade = prompt("Qual a sua idade?");
alert("Validar: "+ validarIdade(idade));    
*/

//Uso de Elementos do HTML com JavaScript
function clicou(){
    alert("Obrigado por clicar aqui.");
    //Injetando conteúdo HTML pelo JavaScript
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
};

function redirecionar(){
    window.open("https://www.jw.org/pt/");//Nova janela
    window.location.href = "https://www.jw.org/pt/"; //Na mesma janela
};

function trocar(elemento){
    //Injetando pelo ID (tem que tirar o parâmetro da função)
    // document.getElementById("mousemove").innerHTML = "<h2><b>Obrigado por passar o mouse.</b></h2>";
   //Disparando alerta passando o mouse por cima
    //alert("O texto mudou quando o mouse passou por cima do parágrafo.");
    elemento.innerHTML = "<h2><b>Obrigado por passar o mouse.</b></h2>";
};

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
}; 

function load(){
    alert("Página carregada.");
};

function mudar(elemento){
    console.log(elemento.value);
};


























































