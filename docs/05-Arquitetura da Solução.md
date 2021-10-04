# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura 1.

![Diagrama de Componentes](/docs/diagramadecomponentes.png)
<center>Figura 1- Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de produtos apresentados  
     - **Preferidas** - lista de produtos favoritos mantidos para comprar posteriormente 
 - **News API** - plataforma que permite o acesso aos produtos exibidos no site
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

=======
>>>>>>> 862cfc69e8a69ab3d7f12f93ebbc083b50243835
## Tecnologias Utilizadas

As linguagens utilizadas para solução do problema são: HTML, CSS, JavaScript. Durante o desenvolvimento serão priorizadas alternativas gratuitas de tecnologia, dentre elas: Trello, Marvel APP e WorkSpace. A hospedagem do site será feita através da plataforma heroku.
A seguinte imagem mostra a interação do usuário com o sistema, por onde ela passa até retornar uma resposta ao usuário: 

![](/docs/interaçãodousiario.png)
Figura 2 - Interação do usuário com o sistema

## Hospedagem

O site utiliza a plataforma do Heroku como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL: 
https://modagreen.herokuapp.com

A publicação do site no Heroku é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço:

https://git.heroku.com/modagreen.git 

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
