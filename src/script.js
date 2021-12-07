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

let emailLogin = document.querySelector('#inputEmailLogin')
let labelEmailLogin = document.querySelector('#labelEmailLogin')

let senhaLogin = document.querySelector('#inputSenhaLogin')
let labelSenhaLogin = document.querySelector('#labelSenhaLogin')

let msgErrorLogin = document.querySelector('#msgErrorLogin')

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

// Validação do botão 'Cadastre-se'

document.querySelector('#botaocad').addEventListener('click',cadastrar)

function cadastrar(e){
    
    e.preventDefault()

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
        msgSucess.innerHTML='Usuário cadastrado com sucesso!'
        msgError.innerHTML=''
        msgError.setAttribute('style','display: none')  
       
    } else{
        msgError.setAttribute('style','display: block')
        msgError.innerHTML='Preencha todos os campos corretamente antes de cadastrar'
        msgSucess.innerHTML=''
        msgSucess.setAttribute('style','display: none')
    }
}

// Autenticação do usuário

document.querySelector('#botaoentrar').addEventListener('click',entrar)

function entrar(e){

    e.preventDefault()

    let listaUserLogin = []

    let userValid = {
        nome: '',
        email:'',
        senha: '',

    }

    listaUserLogin = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUserLogin.forEach((item) => {
        
        if(emailLogin.value == item.emailCad && senhaLogin.value == item.senhaCad){

            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }

        }
    })
        
    if(emailLogin.value == userValid.email && senhaLogin.value == userValid.senha){

        window.location.href = 'index.html'

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))

    } else{

        emailLogin.setAttribute('style', 'border: 2px solid #FF0000')
        senhaLogin.setAttribute('style', 'border: 2px solid #FF0000')
        msgErrorLogin.setAttribute('style', 'display: block')
        msgErrorLogin.innerHTML = 'Usuário ou senha inválidos'
        emailLogin.focus()
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



