# 8. Plano de Testes de Software

<p align="justify">Os requisitos necessários para a realização dos cenários de testes são:</p>

- Site publicado na plataforma Heroku
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
|**Critérios de êxito**|<ul><li>Caso o usuário ou a senha informados sejam inválidos, o site deve apresentar uma mensagem de erro na tela</li><li>Caso o usuário e a senha informados sejam válidos, o site deve direcionar o usuário para a tela homepage do site</li><li>Quando o login for feito com sucesso, deve ser gerado um registro no localStorage do navegador na key 'userLogado'</li><li>Quando o login for feito com sucesso, deve ser gerado um identificador único atrelado à sessão de login no localStorage do navegador na key 'token'</li><li>Quando o login for feito com sucesso, o nome do usuário deve ser exibido no canto superior direito da tela homepage no formato: Olá, + 'nome do usuário logado'</li></ul>



## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
