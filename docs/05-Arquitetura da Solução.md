# 5. Arquitetura da Solução

<p align="justify">Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.</p>

## 5.1 Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura 16.

<p align="center">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/diagramadecomponentes.png?raw=true" alt="Diagrama de Componentes">
</p>
<p align="center">Figura 16- Arquitetura da Solução</p>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas do site** - Conjunto de arquivos HTML, CSS e JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON.  
      - Cadastros - criar as bases do relacionamento com o cliente e a fidelização.
      - Produtos - armazenar os itens vendidos no site.
      - Favoritos - lista de produtos favoritos mantidos para comprar posteriormente
   - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador, será feita na plataforma GitHub Pages.

> **Links Úteis**:
> - [Whimsical](https://whimsical.com/)

## 5.2 Tecnologias Utilizadas

<p align="justify">As linguagens utilizadas para solução do problema são: HTML, CSS, JavaScript. Durante o desenvolvimento serão priorizadas o uso de ferramentas alternativas gratuitas de tecnologia, dentre elas: Trello, Marvel APP e WorkSpace. A hospedagem do site será feita através do GitHub Pages.
A seguinte imagem mostra a interação do usuário com o sistema, por onde ela passa até retornar uma resposta ao usuário.</p>

<p align="center">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/intera%C3%A7%C3%A3odousiario.png?raw=true" alt="Intereção do Usuario">
</p>
<p align="center">Figura 17 - Interação do usuário com o sistema</p>

## 5.3 Hospedagem

<p align="justify">O site utiliza a plataforma do GitHub Pages como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL: https://marialuizalacerda.github.io/modagreen/</p>

<p align="justify">A publicação do site no GitHub Pages é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço: https://github.com/marialuizalacerda/modagreen.git</p>

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
