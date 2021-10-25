# 7. Programação de Funcionalidades

<p align="justify">As telas a seguir apresentam algumas funcionalidades que foram desenvolvidas para o projeto, bem como a URL de acesso e as respectivas orientações para utilização.</p>

## 7.1 Homepage

A tela inicial do site é composta por 4 estruturas:

* Cabeçalho
* Menu de categorias
* Apresentação das ofertas
* Rodapé
<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/Index.png?raw=true" alt="Homepage">
</p>
<p align="center">Figura 22 - Homepage</p>
<br>
<p align="justify">O cabeçalho do site apresenta o elemento visual da marca, no canto superior esquerdo. Ao clicar sob a logomarca, o usuário é redirecionado diretamente para a tela inicial. Ao lado do campo para pesquisa são apresentados alguns elementos de iconografia que possuem a função de ancorar suas respectivas páginas. O item "Entrar" direciona o usuário para a tela de login, utilizando a mesma aba do navegador. Ao clicar em "Lista de Favoritos" sem realizar o cadastro ou login prévio, o usuário também é direcionado para a tela de login.</p>

<p align="justify">Abaixo do elemento visual é disponibilizado um menu responsivo para apresentação das categorias disponíveis no site. Ao clicar uma vez no ícone do elemento, o menu de categorias é apresentado ao usuário. Ao clicar novamente o menu é compilado.</p>

<p align="justify">A apresentação das ofertas é feita de forma centralizada na página. São apresentados cards com as ofertas e cada card possue como elementos de composição os seguintes itens: imagem do produto, descrição do produto e preço.</p>

<p align="justify">No rodapé são disponibilizados alguns elementos de hipermídia para acionamento. O item "Saiba mais sobre o movimento Slow Fashion no mundo" habilita uma nova página web que direciona o usuário para o endereço <https://slowfashion.global/movement>. O item "Home" direciona para a tela inicial e o item "Login" para a tela de cadastro. Já o item "Moda Green" tem a função de redirecionar para o topo da página. </p>

* **Requisitos atendidos**:

  - **Requisito Funcional-10:** - O site deve possuir um campo para pesquisa de produtos conforme a palavra-chave inserida e demais filtros de pesquisa definidos pelo consumidor: categoria, preço (máximo e mínimo), gênero, tamanho, tipo de material e certificações.
  
* **Artefatos da funcionalidade**:
  
  - index.html
  - style.css
  - logo3.png
  - loupe.png
  - love.png
  - login.png
  - carrinho.png
  - ofertas.png
  
* **Instruções de acesso**:
  
<p align="justify">Acesse a URL INSERIR URL em um navegador de internet.</p>

## 7.2 Tela de cadastro e login

<p align="justify">A tela de cadastro e login é composta por 3 blocos principais:</p>

* Cabeçalho
* Área para login
* Área para cadastro
<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/Cadastro%20de%20novos%20usu%C3%A1rios.PNG?raw=true" alt="Cadastro de novos usuários">
</p>
<p align="center">Figura 23 - Tela de cadastro de novos usuários</p>
<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/Login%20de%20usu%C3%A1rio.PNG?raw=true" alt="Login de uusário">
</p>
<p align="center">Figura 24 - Tela de login de usuário</p>
<br>
<p align="justify">O cabeçalho na tela de cadastro e login segue a mesma especificação detalhada no item anterior.</p>

<p align="justify">Na área para acesso dos usuários já cadastrados, quando a opção "Acessar" é acionada são disponibilizados dois campos de formulário para preenchimento: E-mail e Senha. Há, ainda, a apresentação dos botões "Entrar" e "Acessar conta de vendedor".</p>

<p align="justify">Na área para cadastro de novos usuários, quando a opção "Prosseguir" é acionada são disponibilizados três campos de formulário para preenchimento: Nome, E-mail e Senha. Há, ainda, a apresentação dos botões "Cadastra-se" e "Sou vendedor".</p>

* **Requisitos atendidos**:

  - **Requisito Funcional-1:** - O site deve permitir que os empreendedores realizem o seu cadastro de usuário no site com os seguintes campos: nome de usuário, nome da empresa, e-mail, telefone, CNPJ, endereço.
  - **Requisito Funcional-8:** - O site deve permitir que os consumidores realizem o seu cadastro de usuário no site com os seguintes campos: nome, gênero, endereço e data de aniversário.
  - **Requisito Funcional-9:** - O site deverá permitir ao usuário (empreendedor e consumidor) realizar o login com nome de usuário ou e-mail e senha.
  
* **Artefatos da funcionalidade**:

  - tela-login.html
  - tela-login.css
  - script.js
  - logo3.png
  - loupe.png
  - love.png
  - login.png
  - carrinho.png
  
 * **Instruções de acesso**:
 
 <p align="justify">Acesse a URL INSERIR URL em um navegador de internet. Clique no item "Entrar" disponível no cabeçalho da página.
 

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
