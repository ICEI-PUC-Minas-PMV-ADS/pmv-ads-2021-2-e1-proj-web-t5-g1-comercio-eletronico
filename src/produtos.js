var produtos = {
  dados: [
    {   
        id: 0,
        titulo: 'Blusa Trees Masculina',
        descricao: 'Blusa Lançamento feito em malha de algodao de ótima qualidade, ideal para você!',
        imagem: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta.jpg',
        categoria: 'Blusas',
        preco: 89,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,

    }, {
        id: 1,
        titulo: 'Bolsa de Lona Feminina',
        descricao: 'Bolsa Feminina Lançamento feito em lona reforçada de ótima qualidade. Com fechamento em zíper e dois modos de uso (mão e transversal), prática e ideal para você!',
        imagem: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta%202.jpg',
        categoria: 'Bolsas',
        preco: 129,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,

    }, {
        id: 2,
        titulo: 'Blusa de Algodão Orgânico',
        descricao: 'Camiseta cor cinza com estampa exclusiva da marca. Composta de malha de algodao organico.',
        imagem: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta%203.jpg', 
        categoria: 'Bolsas',
        preco: 115,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,
    }, {
        id: 3,
        titulo: 'Short Vintage Feminina',
        imagem:'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta%205.jpg',
        descricao: 'Short Jeans feminino, confortável e se molda muito bem ao corpo',
        categoria: 'Shorts',
        preco: 120,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,
    }, {
        id: 4,
        titulo: 'Bolsa Pinturas de Obras',
        imagem:'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta%204.jpg',
        descricao: 'Bolsa linda com pinturas, que pode ser usada no ombro ou transversalmente. É Resistente, proporcionando Durabilidade.',
        categoria: 'Bolsas',
        preco: 55,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,
    }, {
        id: 5,
        titulo: 'Moleton Harry Potter',
        imagem:'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/Oferta%206.jpg',
        descricao: 'Blusa de moletom masculina básico em modelagem comfort, manha de algodao organico.',
        categoria: 'Moleton',
        preco: 159,
        tamanhos: ['P', 'M', 'G'],
        quantidade: 0,
        
    },
    
  ],
}

   //INSERIR PRODUTOS NA PAGINA INDEX-JSON.HTML

   var prods = '';
   for (i=0; i < produtos.dados.length; i++) {
       prods += `<p class= "produto-item">
       <img src="${produtos.dados[i].imagem}" alt="${produtos.dados[i].titulo}" class="foto">  <br> 
       ${produtos.dados[i].titulo} <br> 
       R$${produtos.dados[i].preco},00 <br>
   
       <a key="${produtos.dados[i].id}" href="detalhamento-produto.html?id=${produtos.dados[i].id}&imagem=${produtos.dados[i].imagem}
       &titulo=${produtos.dados[i].titulo}&preco=${produtos.dados[i].preco}&descricao=${produtos.dados[i].descricao}" class="detalhes"> <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/detalhes.png" alt="ver detalhes do produto" width="24" height="24"> </a>
       
       <a key="${produtos.dados[i].id}" href="#" class="adicionar-produto"> <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/adicionar-carrinho.png" alt="adicionar ao carrinho" width="24" height="24"> </a>`;   
   }
   document.getElementById('ofertas').innerHTML = prods





// Botão 'Sair'

document.querySelector('#botaosair').addEventListener('click',sair)

function sair(){

    localStorage.removeItem('token')

    window.location.href = 'tela-login.html'
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#userLogado')

logado.innerHTML = 'Olá, ' + userLogado.nome

