// Declaração das variáveis

var btnAcessar = document.querySelector("#acessar");
var btnProsseguir = document.querySelector("#prosseguir");

var body = document.querySelector("body");

let nome = document.querySelector('#inputNome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#inputEmail')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#inputSenha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let ConfirmSenha = document.querySelector('#inputConfirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

// Validações do formulário de cadastro

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        nome.setAttribute('style', 'border: 2px solid #FF0000')
        nome.setAttribute('placeholder', 'Insira no mínimo 3 caracteres')
        validNome = false
    } else{
        nome.setAttribute('style', 'border: 2px solid #20B2AA')
        validNome = true
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.includes ("@")){
        email.setAttribute('style', 'border: 2px solid #20B2AA')
        validEmail = true
    } else{
        email.setAttribute('style', 'border: 2px solid #FF0000')
        email.setAttribute('placeholder', 'Insira um e-mail válido')
        validEmail = false
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length < 6){
        senha.setAttribute('style', 'border: 2px solid #FF0000')
        senha.setAttribute('placeholder', 'A senha deve conter no mínimo 6 dígitos')
        validSenha = false
    } else{
        senha.setAttribute('style', 'border: 2px solid #20B2AA')
        validSenha = true
    }
})

ConfirmSenha.addEventListener('keyup', ()=>{
    if(ConfirmSenha.value != senha.value){
        ConfirmSenha.setAttribute('style', 'border: 2px solid #FF0000')
        ConfirmSenha.setAttribute('placeholder', 'As senhas não conferem')
        validConfirmSenha = false
    } else{
        ConfirmSenha.setAttribute('style', 'border: 2px solid #20B2AA')
        validConfirmSenha = true
    }
})

// Validação do botão 'Cadastra-se'

function cadastrar(){

    if(validNome && validEmail && validSenha && validConfirmSenha == true){
        
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                emailCad: email.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucess.setAttribute('style','display: block')
        msgSucess.innerHTML='Cadastrando usuário...'
        msgError.innerHTML=''
        msgError.setAttribute('style','display: none')
        
        setTimeout(()=>{
            window.location.href = 'tela-login.html'
        }, 15000)

        

    } else{
        msgError.setAttribute('style','display: block')
        msgError.innerHTML='Preencha todos os campos corretamente antes de cadastrar'
        msgSucess.innerHTML=''
        msgSucess.setAttribute('style','display: none')
    }
}

// Botão 'Acessar'

btnAcessar.addEventListener("click", function () {
   body.className = "acessar-js"; 
})

// Botão 'Prosseguir'

btnProsseguir.addEventListener("click", function () {
    body.className = "prosseguir-js";
})
