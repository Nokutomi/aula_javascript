

function clicou(){
    document.getElementById("agradecimento").innerHTML="Obrigado por clicar";
}

function redirecionar(){
    window.open("https://github.com/Nokutomi/aula_javascript");
    // window.location.href = "https://github.com/Nokutomi/aula_javascript"
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Frase trocada, seu lindo!";
    elemento.innerHTML = "Frase trocada, seu lindo!";

}

function voltatroca(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


// function clicou(){
//     alert("Obrigado por clicar!");
// }


// function validaIdade(idade){
//     var validar;
//     if (idade>=18) {
//         validar = true;
//     } else {
//         validar = false;
//     } 
//     return validar;
// }

// idade = prompt("Qual a sua idade?");
// alert(validaIdade(idade));

// function soma(n1, n2) {
//     return n1 + n2;
// }
// alert(soma(5, 10));

// var d = new Date();
// // alert(d.getMonth()+1);
// alert(d.getDate());


// var count = 0;
// for (count = 0; count<=5; count++){
//     console.log(count)
// }

// var count = 0;
// while (count < 5) {
//     console.log(count);
//     count++;
// };

// var idade = prompt("Qual a sua idade: ")
// if (idade >= 18){
//     alert("Maior de idade");
// }else{
//     alert("Menor de idade");
// };


// var frutas = 
// [
//     {nome:"maca", cor:"vermelha"}, 
//     {nome:"uva", cor:"roxa"}
// ];

// console.log(frutas[0].nome);
// alert(frutas[1].cor);


// var fruta = {nome:"maca", cor:"vermelha"};
// console.log(fruta.nome);
// alert(fruta.cor);

// var lista = ["maca", "pera", "laranja"];
// lista.push("uva");
// lista.pop()
// console.log(lista.reverse());
// console.log(lista.toString()[0]);
// console.log(lista.join(" - "));



// var nome = "Nathan Kutomi";
// var idade = 29;
// var idade2 = 10;
// var frase = "Japao eh o melhor time do mundo";
// // alert(nome + " tem " + idade + " anos.");
// // alert(idade+idade2);
// console.log(nome);
// console.log(idade + idade2)
// console.log(frase.replace("Japao", "Brasil"));
// // alert(frase.replace("Japao", "Brasil"));