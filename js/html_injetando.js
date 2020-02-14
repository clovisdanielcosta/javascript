function trocar(elemento){
    //Injetando pelo ID (tem que tirar o parâmetro da função)
    // document.getElementById("mousemove").innerHTML = "<h2><b>Obrigado por passar o mouse.</b></h2>";
   //Disparando alerta passando o mouse por cima
    //alert("O texto mudou quando o mouse passou por cima do parágrafo.");
    elemento.innerHTML = "<h2><b>Obrigado por passar o mouse.</b></h2>";
};

// Retorna o valor original do elemento
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
