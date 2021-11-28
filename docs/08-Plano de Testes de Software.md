# 8. Plano de Testes de Software

<p align="justify">Os requisitos necessários para a realização dos cenários de testes são:</p>

- Site publicado na plataforma GitHub Pages
- Navegador de internet
- Definição dos casos de testes a serem executados

<p align="justify">Os testes funcionais a serem realizados no site são descritos a seguir, agrupados por telas.</p>

## 8.1 Tela de cadastro e login

|**Caso de teste**|**CT01 - Efetuar o cadastro de um usuário na seção de cadastro**|
|:---------------:|----------------------------------------------------------------|
|**Requisitos associados**|RF08 - O site deve permitir que os consumidores realizem o seu cadastro de usuário no site com os seguintes campos: nome, gênero, endereço e data de aniversário|
|**Objetivo do teste**| Validar a criação de um usuário no site|
|**Passos**|<ol><li>Acessar o navegador</li><li>Acessar a URL do site</li><li>Acessar a tela de cadastro e login</li><li>Preencher os campos obrigatórios</li><li>Clicar no botão Cadastra-se</li></ol>|
|**Critérios de êxito**|<ul><li>O preenchimento dos campos obrigatórios deve ser validado</li><li>Caso algum campo obrigatório não seja preenchido ou seja preenchido de forma incorreta, o site deve apresentar uma mensagem de erro na tela quando o formulário for enviado</li><li>Após o correto preenchimento dos campos e o envio do formulário pelo usuário, o site deve apresentar uma mensagem de sucesso na tela</li><li>Quando o envio do formulário de cadastro for feito com sucesso, o usuário deve ser registrado no localStorage do navegador na key 'listaUser'</li></ul>

</br>

|**Caso de teste**|**CT02 - Efetuar o login de um usuário na seção de login**|
|:---------------:|----------------------------------------------------------|
|**Requisitos associados**|RF09 - O site deverá permitir ao usuário (empreendedor e consumidor) realizar o login com nome de usuário ou e-mail e senha|
|**Objetivo do teste**| Validar o login de um usuário previamente cadastrado no site|
|**Passos**|<ol><li>Acessar o navegador</li><li>Acessar a URL do site</li><li>Acessar a tela de cadastro e login</li><li>Informar os dados de um usuário previamente cadastrado</li><li>Clicar no botão Entrar</li></ol>|
|**Critérios de êxito**|<ul><li>Caso o usuário ou a senha informados sejam inválidos, o site deve apresentar uma mensagem de erro na tela</li><li>Caso o usuário e a senha informados sejam válidos, o usuário deve ser direcionado para a tela homepage do site</li><li>Quando o login for feito com sucesso, deve ser gerado um registro no localStorage do navegador na key 'userLogado'</li><li>Quando o login for feito com sucesso, deve ser gerado um identificador único atrelado à sessão de login no localStorage do navegador na key 'token'</li><li>Quando o login for feito com sucesso, o nome do usuário deve ser exibido no canto superior direito da tela homepage no formato: Olá, + 'nome do usuário logado'</li></ul>

## 8.2 Tela de detalhamento do produto

|**Caso de teste**|**CT03 - Visualizar os detalhes de um produto em uma nova tela**|
|:---------------:|----------------------------------------------------------|
|**Requisitos associados**|RF25 - O site deve permitir que o consumidor visualize os detalhes de um produto: descrição, fotos, preço, avaliações dos clientes e localização da loja|
|**Objetivo do teste**| Validar o botão do ícone de detalhes e dirigir para a página de detalhamento do produto|
|**Passos**|<ol><li>Acessar o navegador</li><li>Acessar a URL do site</li><li>Acessar a tela de ofertas</li><li>Clicar no ícone de detalhes</li><li>Assim será direcionado para a tela com os detalhes do produto</li></ol>|
|**Critérios de êxito**|<ul><li>Ao clicar no produto na página de ofertas (ícone de detalhes), será aberta a página com o detalhamento do produto. </li></ul>
## 8.3 Tela de ofertas

|**Caso de teste**|**CT04 - Adicionar produtos ao carrinho de compras**|
|:---------------:|----------------------------------------------------------------|
|**Requisitos associados**|RF12- O site deve permitir que o consumidor adicione produtos ao carrinho de compras |
|**Objetivo do teste**| Verificar se os produtos adicionados na tela de ofertas estão sendo adicionados corretamente no carrinho.
Exibir a quantidade total de produtos na tela de ofertas, próxima ao ícone carrinho. |
|**Passos**|<ol><li> Acessar o Navegador</li><li> Acessar a URL do site <</li><li>ADD CONTEUDO DE TERCEIRO PASSO<</li> </ol>|
|**Critérios de êxito**|<ul> <li>  Os produtos devem ser exibidos corretamente e de forma dinâmica no site utilizando JSON para criação da lista de produtos exibidos. Sendo necessários pelo menos 6 produtos sendo apresentados.</li> <li> ADD CONTEUDO PRIMEIRO PARAGRAFO </li> <li> ADD CONTEUDO SEGUNDO PARAGRAFO </li> <li>ADD CONTEUDO TERCEIRO PARAGRAFO</li></ul>

## 8.4 Tela de finalização da compra

|**Caso de teste**|**CT05 -Registar e exibir carrinho de compras ao consumidor**|
|:---------------:|----------------------------------------------------------------|
|**Requisitos associados**|RF13- O site deve registrar a lista de produtos adicionados ao carrinho de compras pelos consumidores |
|**Objetivo do teste**| Registar e exibir a lista de produtos adicionados pelo consumidor ao carrinho em uma nova tela |
|**Passos**|<ol><li> Acessar o Navegador</li> <li>Acessar a URL do site </li><li>Adicionar o produto ao carrinho, ao clicar no icone carrinho abaixo do produto desejado</li> <li> Clicar no icone carrinho no cabecalho da pagina principal</li></ol>|
|**Critérios de êxito**|<ul> <li> O item adicionado deve constar na pagina para o cliente ver. </li> <li> A quantidade de itens deve ser exibida. </li> <li> O valor unitário deve ser exibido. </li> <li>O valor total deve ser exibido.</li></ul>

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
