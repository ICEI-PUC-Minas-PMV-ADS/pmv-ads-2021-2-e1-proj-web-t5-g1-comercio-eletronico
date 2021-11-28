# 9. Registro de Testes de Software

<p align="justify">Os requisitos necessários para a documentação dos cenários de testes são:</p>

- Site publicado na plataforma GitHub Pages
- Navegador de internet
- Definição dos casos de testes a serem executados
- Execução dos cenários propostos

Os registros de testes realizados no site são evidenciados a seguir, agrupados por telas.

## 9.1 Tela de cadastro e login

### 9.1.1 CT01 - Efetuar o cadastro de um usuário na seção de cadastro

**Critério de êxito:** O preenchimento dos campos obrigatórios deve ser validado

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%201.png?raw=true" alt="Evidência de teste 1 - Tela de cadastro">
</p>
<p align="center">Figura 25 - Evidência de teste 1 - Tela de cadastro</p>

</br>

**Critério de êxito:** Caso algum campo obrigatório não seja preenchido ou seja preenchido de forma incorreta, o site deve apresentar uma mensagem de erro na tela quando o formulário for enviado

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%202.png?raw=true" alt="Evidência de teste 2 - Tela de cadastro">
</p>
<p align="center">Figura 26 - Evidência de teste 2 - Tela de cadastro</p>

</br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%203..png?raw=true" alt="Evidência de teste 3 - Tela de cadastro">
</p>
<p align="center">Figura 27 - Evidência de teste 3 - Tela de cadastro</p>

</br>

**Critério de êxito:** Após o correto preenchimento dos campos e o envio do formulário pelo usuário, o site deve apresentar uma mensagem de sucesso na tela

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%204.png?raw=true" alt="Evidência de teste 4 - Tela de cadastro">
</p>
<p align="center">Figura 28 - Evidência de teste 4 - Tela de cadastro</p>

</br>

**Critério de êxito:** Quando o envio do formulário de cadastro for feito com sucesso, o usuário deve ser registrado no localStorage do navegador na key 'listaUser'

<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/EVT%205.png?raw=true?raw=true" alt="Evidência de teste 5 - Tela de cadastro">
</p>
<p align="center">Figura 29 - Evidência de teste 5 - Tela de cadastro</p>

</br>

### 9.1.2 CT02 - Efetuar o login de um usuário na seção de login

**Critério de êxito:** Caso o usuário ou a senha informados sejam inválidos, o site deve apresentar uma mensagem de erro na tela

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%206.png?raw=true" alt="Evidência de teste 1 - Tela de login">
</p>
<p align="center">Figura 30 - Evidência de teste 1 - Tela de login</p>

</br>

**Critério de êxito:** Caso o usuário e a senha informados sejam válidos, o usuário deve ser direcionado para a tela homepage do site

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%207.png?raw=true" alt="Evidência de teste 2 - Tela de login">
</p>
<p align="center">Figura 31 - Evidência de teste 2 - Tela de login</p>

</br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%208.png?raw=true" alt="Evidência de teste 3 - Tela de login">
</p>
<p align="center">Figura 32 - Evidência de teste 3 - Tela de login</p>

</br>

**Critério de êxito:** Quando o login for feito com sucesso, deve ser gerado um registro no localStorage do navegador na key 'userLogado'

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%209.png?raw=true" alt="Evidência de teste 4 - Tela de login">
</p>
<p align="center">Figura 33 - Evidência de teste 4 - Tela de login</p>

</br>

**Critério de êxito:** Quando o login for feito com sucesso, deve ser gerado um identificador único atrelado à sessão de login no localStorage do navegador na key 'token'

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%2010.png?raw=true" alt="Evidência de teste 5 - Tela de login">
</p>
<p align="center">Figura 34 - Evidência de teste 5 - Tela de login</p>

</br>

**Critério de êxito:** Quando o login for feito com sucesso, o nome do usuário deve ser exibido no canto superior direito da tela homepage no formato: Olá, + 'nome do usuário logado'

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%2011..png?raw=true" alt="Evidência de teste 6 - Tela de login">
</p>
<p align="center">Figura 35 - Evidência de teste 6 - Tela de login</p>

</br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/main/docs/img/EVT%2012.png?raw=true" alt="Evidência de teste 7 - Tela de login">
</p>
<p align="center">Figura 36 - Evidência de teste 7 - Tela de login</p>

<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/src/validacaocarrinho.png?raw=true" alt="Evidência de teste 7 - Tela de login">
</p>
<p align="center">Figura 37 - Evidência de teste 8 - Tela finazlização de compra</p>

</br>

## 9.2 Tela de detalhamento do produto
### 9.2.1 CT03 - Visualizar os detalhes de um produto em uma nova tela



## 9.3 Tela de ofertas 
### 9.3.1 CT04 - Adicionar produtos ao carrinho de compras



## 9.4 Tela de finalização da compra 
### 9.4.1 CT05 - Registar e exibir carrinho de compras ao consumidor



> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
