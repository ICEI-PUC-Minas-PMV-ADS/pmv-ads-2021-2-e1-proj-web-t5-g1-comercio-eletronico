
var btnAcessar = document.querySelector("#acessar");
var btnProsseguir = document.querySelector("#prosseguir");

var body = document.querySelector("body");


btnAcessar.addEventListener("click", function () {
   body.className = "acessar-js"; 
});

btnProsseguir.addEventListener("click", function () {
    body.className = "prosseguir-js";
})