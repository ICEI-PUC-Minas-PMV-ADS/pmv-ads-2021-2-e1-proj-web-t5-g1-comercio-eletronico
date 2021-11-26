   //INSERIR PRODUTOS NA PAGINA INDEX-JSON.HTML

   var prods = '';
   for (i=0; i < produtos.dados.length; i++) {
       prods += `<p class= "produto-item">
       <img src="${produtos.dados[i].imagem}" alt="${produtos.dados[i].titulo}" class="foto">  <br> 
       ${produtos.dados[i].titulo} <br> 
       R$${produtos.dados[i].preco},00 <br>
   
       <a key="${produtos.dados[i].id}" href="#" class="detalhes"> <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/detalhes.png" alt="ver detalhes do produto" width="24" height="24"> </a>
       
       <a key="${produtos.dados[i].id}" href="#" class="adicionar-produto"> <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/adicionar-carrinho.png" alt="adicionar ao carrinho" width="24" height="24"> </a>`;   
   }
   document.getElementById('ofertas').innerHTML = prods
   
  //ATUALIZAR CARRINHO NA PAGINA INDEX-JSON.HTML
 
 let carts = document.querySelectorAll('.adicionar-produto')

 for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(produtos.dados[i]);
    totalCost(produtos.dados[i]);
  })
 }
 
 function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
 
  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
 }
 
 
 function cartNumbers(produtos) {
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
 
    if(productNumbers) {
       localStorage.setItem('cartNumbers', productNumbers + 1);
       document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
       localStorage.setItem('cartNumbers', 1);
       document.querySelector('.cart span').textContent = 1;
    }
    setItems(produtos);
 }
 
 
 function setItems(produtos) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  
  if(cartItems != null) {
    if(cartItems[produtos.titulo] == undefined) {
        cartItems = {
          ...cartItems,
          [produtos.titulo]: produtos
        }
    }
    cartItems[produtos.titulo].quantidade += 1;
  } else {
    produtos.quantidade = 1;
    cartItems = {
        [produtos.titulo]: produtos
    }
  }
  localStorage.setItem("productsInCart", JSON.stringify 
  (cartItems));
 }
 
 function totalCost(produtos) {
    //console.log("The product price is", produtos.preco);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
 
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + produtos.preco);
    } else {
        localStorage.setItem("totalCost", produtos.preco);
    }  
 }


 // pagina finalizacao da compra
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products-container");


  console.log(cartItems);
  if ( cartItems && productContainer ) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(produtos => {
        productContainer.innerHTML += 
        `
        <div class="product">
          <img src="./images/${produtos.titulo}.jpg">  
          <span>${produtos.titulo}</span>
         
        </div>
        `
    });
    
            mmnm,nmn,mn,mn,mn,mn            
  }

}

 onLoadCartNumbers();
 displayCart();
 
 
 /*  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/src/close.png" alt="botao close"  width="24" height="24"> */
  
 
 