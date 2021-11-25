
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
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product">
          <span class="material-icons-outlined">close</span>
        `
    });
    
    
  }

}

 onLoadCartNumbers();
 displayCart();
 
 
 
  
 
 