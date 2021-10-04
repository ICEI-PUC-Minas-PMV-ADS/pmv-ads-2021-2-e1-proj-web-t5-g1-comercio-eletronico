
# 4. Projeto de Interface

<p align="justify"> O projeto de interface do website Moda Green tem como prioridade oferecer soluções amigáveis e intuitivas aos seus usuários, com foco na agilidade, acessibilidade e usabilidade desta interface. Todas as telas estão projetadas para funcionamento em desktops e dispositivos móveis.
Com o intuito de possuirmos uma boa usabilidade, optamos por um site simples e intuitivo. Para isso, foi criado um padrão de cabeçalho para todas as telas, onde o usuário pode facilmente encontrar e navegar entre as funcionalidades básicas do site como: encontrar produtos, finalizar a compra e efetuar o pagamento. Com exceção dada apenas a pequenas diferenças em relação a tela padrão do empreendedor e a tela padrão do consumidor, que serão explicadas no decorrer deste projeto.
Para uma melhor visualização da apresentação do fluxo de interação de usuários pelas telas, foi necessário separá-los em dois fluxos diferentes: Fluxo do Usuário – Empreendedor e Fluxo do Usuário – Consumidor, visto que estes dois usuários possuem algumas das telas específicas para cada um.
O fluxo de usuários e o detalhamento de suas telas serão apresentados nos próximos tópicos: Fluxo do Usuário e Wireframe.
O wireframe interativo deste projeto pode ser acessado pelo <a href="https://marvelapp.com/prototype/a6bc5j5/screen/82266300"> ambiente MarvelApp do projeto. </a>

 As principais interfaces da plataforma, serão apresentadas a seguir e foram elaboradas de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados na <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>. </p>

## 4.1 Fluxo do Usuário

### 4.1.1 Fluxo do Usuário - Consumidor

<p align="justify"> A imagem a seguir ilustra o fluxo de usuário “consumidor” em nosso site. Assim que o usuário entra no site, ele é apresentado à homepage onde ele tem a opção de fazer login sendo direcionado para outra tela na qual realizará o cadastro de usuário do perfil consumidor. Após fazer o cadastro ele é redirecionado à homepage para visualizar todos os produtos, existem dois modos para apresentação dos produtos, podem ser visualizados por categoria em uma tela ou por loja em outra tela. Ao clicar no produto específico é exibido o detalhamento do item em uma nova tela. O produto pode ser adicionado na lista de favoritos ou no carrinho de compras. Ao clicar no carrinho de compras abrirá uma nova tela onde realizará a conferência do pedido com a lista de produtos, para finalizar a compra abrirá por último a tela de pagamento. Toda vez que clicar na logo em qualquer tela que estiver, será redirecionado para a homepage. </p>

<p align="center">
  <img src="/docs/img/user flow_consumidor_imagem.jpg" alt="Fluxo de telas do usuário - Consumidor">
</p>
<p align="center">Figura 2 - Fluxo de telas do usuário - Consumidor</p>


### 4.1.2 Fluxo do Usuário - Empreendedor

<p align="justify"> O fluxo de telas do Empreendedor, distingue-se das telas do usuário-consumidor pois contém telas específicas para esse usuário que não são acessadas pelos consumidores. Há, no entanto, duas telas que são comuns para ambos perfis de usuários (empreendedor e consumidor): as telas homepage e tela de login.
Dito isso, o fluxo dessas telas se torna um pouco mais simples, pois contém menor quantidade de telas.

Resumidamente, o fluxo de telas do empreendedor segue os seguintes passos:

Caso já estiver cadastrado:
Acesso à tela “homepage”: clicar em [entrar]
Acesso à tela “login”: clicar em [já sou cliente/sou vendedor]
Acesso à tela “Loja do empreendedor”. Nesta tela o usuário é capaz de gerir seus produtos: remover ou editar produtos ou clicar em [adicionar produto] indo para a seguinte tela: “Tela de Cadastro de produto”

Caso o empreendedor não estiver cadastrado:
Acesso à tela “homepage”: clicar em [entrar]
Acesso à tela “login”: clicar em [criar conta/sou vendedor]
Acesso à tela “Cadastro-Empreendedor”. Ao final do cadastro o empreendedor ao clicar em [enviar meus dados] será redirecionado para a área de sua loja.</p>

Abaixo segue a imagem de fluxo do usuário - empreendedor:

<p align="center">
  <img src="/docs/img/user flow empreendedor_imagem.jpg" alt="Fluxo de telas do usuário - Empreendedor">
</p>
<p align="center">Figura 3 - Fluxo de telas do usuário - Empreendedor</p>



## 4.2 Wireframes

### Tela: Homepage

<p align="justify"> A tela de homepage apresenta como conteúdo ao usuário algumas ofertas em destaque. Seguindo a estrutura padrão do site, o cabeçalho apresenta alguns elementos importantes:

> - **Canto superior esquerdo:** elemento de identidade visual da Moda Green.
> - **Posição central:** componente de pesquisa que permite ao usuário inserir palavras chaves para buscar produtos ou lojas específicas.
> - **Canto superior direito:** são apresentados os componentes de lista de favoritos, login e carrinho de compra. Ao clicar em cada uma das opções elencadas, o usuário é redirecionado para a página respectiva da opção selecionada.

O bloco disponibilizado à esquerda apresenta as categorias disponíveis para consulta. Cada elemento deste componente direciona o usuário para a seção correspondente. </p>

<p align="center">

![Tela Homepage](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Homepage.png "Tela Homepage")

</p>

<p align="center">Figura 4 - Tela Homepage</p>


### Tela: Login

<p align="justify"> Na tela de login, além dos elementos padrões do cabeçalho, temos dois blocos principais:

> - **Área para login de usuários já cadastrados:** são solicitadas as informações de e-mail e senha para que o login seja efetuado. O usuário possui disponível também a opção de recuperação de senha.
> - **Área para criação de conta:** são solicitadas as informações de nome, e-mail e senha para que a criação da conta seja efetivada.</p>

<p align="center">                 

![Tela de login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Tela%20de%20login.png?raw=true "Tela de login")

</p>

<p align="center">Figura 5 - Tela de Login</p>



### Tela: Cadastro de Usuário - Perfil do Consumidor

<p align="justify"> Nesta tela, o usuário (consumidor) poderá adicionar e alterar o seu perfil no site, com isso será possível salvar sua lista de favoritos e efetuar a compra no site de forma segura.
Para o cadastro, além do nome, e-mail e senha, já adicionados na página de login, o usuário poderá cadastrar seu endereço de entrega, data de aniversário (para receber promoções e descontos no dia de seu aniversário) e uma breve descrição sobre si mesmo. O consumidor também poderá adicionar uma foto de perfil que será vista no cabeçalho em um ícone ao lado do carrinho de compras.

Nesta tela o empreendedor poderá fazer o seu cadastro. Para isso, será necessário o preenchimento dos campos: nome, nome da loja/empresa, telefone, CNPJ, endereço da empresa e e-mail. Após o cadastro, o empreendedor será direcionado para área de sua loja em uma nova tela: Loja do empreendedor. </p>

<p align="center">
  <img src="/docs/img/tela cadastro usuario imagem.jpg" alt="Tela cadastro do usuário">
</p>
<p align="center">Figura 6 – Tela cadastro do usuário - Consumidor</p>



### Tela: Apresentação dos produtos por loja

<p align="justify"> A tela de apresentação dos produtos por loja apresenta como conteúdo os produtos anunciados pelo empreendedor na sua loja virtual. O usuário visualiza acima dos produtos as informações referentes à loja, como sua identidade visual e as informações de localização. No canto superior direito, há a opção de ordenação do conteúdo apresentado, com as seguintes opções: mais vendidos, maior preço, menor preço e mais bem avaliados.

No bloco à esquerda, o usuário possui algumas opções de filtro de pesquisa, como: tamanho, gênero, preço, tipo de material e certificações.</p>

<p align="center">

![Tela de apresentação dos produtos por loja](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Apresenta%C3%A7%C3%A3o%20de%20produtos%20por%20loja.png?raw=true "Tela de apresentação dos produtos por loja")

</p>

<p align="center">Figura 7 - Tela de apresentação de produtos por loja</p>


### Tela: Apresentação dos produtos por categoria

<p align="justify"> A tela de apresentação dos produtos por categoria apresenta como conteúdo os produtos correspondentes à categoria escolhida pelo usuário. No canto superior direito, há a opção de ordenação do conteúdo apresentado, com as seguintes opções: mais vendidos, maior preço, menor preço e mais bem avaliados.

No bloco à esquerda, o usuário possui algumas opções de filtro de pesquisa, como: tamanho, gênero, preço, tipo de material e certificações.</p>

<p align="center">

 ![Tela de apresentação dos produtos por categoria](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Apresenta%C3%A7%C3%A3o%20de%20produtos%20por%20categoria.png?raw=true "Tela de apresentação dos produtos por categoria")

</p>

<p align="center">Figura 8 - Tela de apresentação dos produtos por categoria</p>



### Tela: Detalhamento do produto

<p align="justify"> Na tela de detalhamento do produto são apresentadas diversas informações referentes ao produto selecionado pelo usuário. Do lado esquerdo, temos a descrição e as avaliações do produto. As fotos são apresentadas no centro da página. Já do lado direito, há a informação de preço e as opções de tamanho disponíveis para seleção. Ao clicar em ‘comprar’, o usuário é direcionado para a tela de finalização do pedido. Há, ainda, um campo destinado para envio de perguntas ao vendedor.</p>

<p align="center">

![Tela de detalhamento do produto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Detalhamento%20do%20produto.png?raw=true "Tela de detalhamento do produto")

 </p>

<p align="center">Figura 9 - Tela  de detalhamento do produto</p>



### Tela: Lista de favoritos

<p align="justify"> A tela de favoritos apresenta a relação dos produtos incluídos na lista de favoritos pelo usuário. Ao clicar em visualizar, o usuário é direcionado novamente para a tela de detalhamento do produto escolhido.</p>

<p align="center">

![Tela lista de favoritos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Lista%20de%20favoritos.png?raw=true "Tela lista de favoritos")

</p>

<p align="center">Figura 10 - Tela lista de favoritos</p>



### Tela: Cadastro de Usuário – Loja do Empreendedor

<p align="justify"> Nesta tela o empreendedor poderá fazer o seu cadastro. Para isso, será necessário o preenchimento dos campos: nome, nome da loja/empresa, telefone, CNPJ, endereço da empresa e e-mail. Após o cadastro, o empreendedor será direcionado para área de sua loja em uma nova tela: Loja do empreendedor.</p>

<p align="center">
  <img src="/docs/img/cadastro da loja.imagem.jpg" alt="Tela de cadastro de usuário-Loja do Empreendedor">
</p>
<p align="center">Figura 13- Tela de cadastro de usuário -Loja do Empreendedor</p>


### Tela: Loja do Empreendedor

<p align="justify"> Nesta tela o empreendedor poderá visualizar e gerenciar todos os produtos que são vendidos em sua loja. As ações possíveis nessa tela são: visualização dos produtos, remoção dos produtos, botão para [adicionar novo produto] e [alterar] produtos. Ambos os botões direcionam o empreendedor a próxima tela: Cadastro de Produto - Empreendedor.
Outras funcionalidades dessa página são: encontrar um produto específico em sua própria loja na barra de pesquisa; acessar seu perfil de empreendedor pelo: ”olá, empreendedor”, ambos pelo cabeçalho da página.  Outra possibilidade é o empreendedor sair da área de empreendedor pelo [logo da marca], também no cabeçalho, que o irá redirecionar para a Tela Homepage. </p>

<p align="center">
  <img src="/docs/img/loja do empreendedor.imagem.jpg" alt="Tela loja do empreendedor">
</p>
<p align="center"> Figura 14 – Tela loja do empreendedor </p>


### Tela: Cadastro de Produto – Empreendedor

<p align="justify"> Na tela de cadastro de produto, o empreendedor poderá cadastrar os produtos que deseja vender em sua loja, pelo site da Green Modas.
Para o cadastro existem campos obrigatórios: nome do produto, categoria do produto, tamanhos disponíveis, gênero, preço, descrição do produto e área para inserir a foto do produto.
Também existem campos não obrigatórios: desconto e número de protocolo do produto (caso o produto tenha cadastrado seu processo de produção). </p>

<p align="center">
  <img src="/docs/img/cadastro de produto.imagem.jpg" alt="Tela cadastro de produto - Empreendedor">
</p>
<p align="center"> Figura 15 – Tela cadastro de produto - Empreendedor</p>

> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)
