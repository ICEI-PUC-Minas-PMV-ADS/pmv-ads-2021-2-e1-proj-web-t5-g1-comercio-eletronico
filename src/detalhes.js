// PAGINA DE DETALHAMENTO DO PRODUTO





let detalheProduto = document.querySelectorAll('.detalhes')

for (let i=0; i < detalheProduto.length; i++) {
  detalheProduto[i].addEventListener('click', () => {
   exibirDetalhes(produtos.dados[i]);
  })
}



   


 

 


 

 