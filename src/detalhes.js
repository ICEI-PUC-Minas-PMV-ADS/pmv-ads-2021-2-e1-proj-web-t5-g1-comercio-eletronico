// PAGINA DE DETALHAMENTO DO PRODUTO





let detalheProduto = document.querySelectorAll('.detalhes')

for (let i=0; i < detalheProduto.length; i++) {
  detalheProduto[i].addEventListener('click', () => {
   exibirDetalhes(produtos.dados[i]);
  })
}


function exibirDetalhes() {
    

    let detalheProduto = localStorage.getItem('detalheProduto')
    detalheProduto = JSON.parse(mostraConteudo);
    let mostraConteudo = localStorage.getItem('detalheProduto');

    if (detalhamentoProduto == null) {
    mostraConteudo = '';
        Object.values(detalheProduto).map(produtos => {
                mostraConteudo.innerHTML += `
                <div class="imagem-produto">
                    <img src="${produtos.imagem}" alt="${produtos.titulo}" width="160" height="160" class="foto-produto-detalhe"> <br> 
                    <span> ${produtos.titulo} </span>
                </div>
                <div class="preco-produto">  R$${produtos.preco},00 </div>
                <div class="detalhes-produto"> 
                    <span>${produtos.descricao}</span>
                </div>
                `;
        });
    }
  
    document.querySelector('.detalhes-produto').innerHTML = mostraConteudo
}

       
   


 

 


 

 