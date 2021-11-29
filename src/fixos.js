var produtosfixos = {
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
    },
  ],
}


   //INSERIR  FIXOS NA PAGINA INDEX-JSON.HTML

   var pfixos = '';
   for (i=0; i < produtosfixos.dados.length; i++) {
        pfixos += `<p class= "produto-fixo">
       <img src="${produtosfixos.dados[i].imagem}" alt="${produtosfixos.dados[i].titulo}" class="foto"  width="220" height="220"> 
       ${produtosfixos.dados[i].titulo} 
       R$${produtosfixos.dados[i].preco},00 <br>
       </p>`;   
   }
   document.getElementById('carrinho-fixo').innerHTML = pfixos





// Botão 'Sair'

document.querySelector('#botaosair').addEventListener('click',sair)

function sair(){

    localStorage.removeItem('token')

    window.location.href = 'tela-login.html'
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#userLogado')

logado.innerHTML = 'Olá, ' + userLogado.nome

