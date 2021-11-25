var produtos = {
  dados: [
    {   
        id: 0,
        titulo: 'Blusa Trees Masculina',
        descricao: '',
        imagem: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta.jpg',
        categoria: 'Blusas',
        preco: 89,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,

    }, {
        id: 1,
        titulo: 'Bolsa de Lona Feminina',
        descricao: '',
        imagem: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta%202.jpg',
        categoria: 'Bolsas',
        preco: 129,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,

    }, {
        id: 2,
        titulo: 'Blusa de Algodão Orgânico',
        imagem: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta%203.jpg',
        descricao: '',
        categoria: 'Bolsas',
        preco: 115,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,
    }, {
        id: 3,
        titulo: 'Short Vintage Feminina',
        imagem:'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta%205.jpg',
        descricao: '',
        categoria: 'Shorts',
        preco: 120,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,
    }, {
        id: 4,
        titulo: 'Bolsa Pinturas de Obras',
        imagem:'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta%204.jpg',
        descricao: '',
        categoria: 'Bolsas',
        preco: 55,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,
    }, {
        id: 5,
        titulo: 'Moleton Harry Potter',
        imagem:'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta%206.jpg',
        descricao: '',
        categoria: 'Moleton',
        preco: 159,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,
    }
  ],
}



// Carrinho 




// Botão 'Sair'

document.querySelector('#botaosair').addEventListener('click',sair)

function sair(){

    localStorage.removeItem('token')

    window.location.href = 'tela-login.html'
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#userLogado')

logado.innerHTML = 'Olá, ' + userLogado.nome

