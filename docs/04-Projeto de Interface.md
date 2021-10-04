
# 4. Projeto de Interface

O projeto de interface do website Moda Green tem como prioridade oferecer soluções amigáveis e intuitivas aos seus usuários, com foco na agilidade, acessibilidade e usabilidade desta interface. Todas as telas estão projetadas para funcionamento em desktops e dispositivos móveis.
Com o intuito de possuirmos uma boa usabilidade, optamos por um site simples e intuitivo. Para isso, foi criado um padrão de cabeçalho para todas as telas, onde o usuário pode facilmente encontrar e navegar entre as funcionalidades básicas do site como: encontrar produtos, finalizar a compra e efetuar o pagamento. Com exceção dada apenas a pequenas diferenças em relação a tela padrão do empreendedor e a tela padrão do consumidor, que serão explicadas no decorrer deste projeto.
Para uma melhor visualização da apresentação do fluxo de interação de usuários pelas telas, foi necessário separá-los em dois fluxos diferentes: Fluxo do Usuário – Empreendedor e Fluxo do Usuário – Consumidor, visto que estes dois usuários possuem algumas das telas específicas para cada um.
O fluxo de usuários e o detalhamento de suas telas serão apresentados nos próximos tópicos: Fluxo do Usuário e Wireframe.
O wireframe interativo deste projeto pode ser acessado pelo <a href="https://marvelapp.com/prototype/a6bc5j5/screen/82266300"> ambiente MarvelApp do projeto </a>

 As principais interfaces da plataforma, serão apresentadas a seguir e foram elaboradas de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados na <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## 4.1 Fluxo do Usuário

## 4.1.1 Fluxo do Usuário - Consumidor


![Fluxo Consumidor](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/user%20flow_consumidor_imagem.jpg "FLuxo Consumidor")
Figura 2 - Fluxo de telas do usuário - Consumidor

## 4.1.2 Fluxo do Usuário - Empreendedor

O fluxo de telas do Empreendedor, distingue-se das telas do usuário-consumidor pois contém telas específicas para esse usuário que não são acessadas pelos consumidores. Há, no entanto, duas telas que são comuns para ambos perfis de usuários (empreendedor e consumidor): as telas homepage e tela de login.
Dito isso, o fluxo dessas telas se torna um pouco mais simples, pois contém menor quantidade de telas.

Resumidamente, o fluxo de telas do empreendedor segue os seguintes passos:

Caso já estiver cadastrado:
Acesso à tela “homepage”: clicar em [entrar]
Acesso à tela “login”: clicar em [já sou cliente/sou vendedor]
Acesso à tela “Loja do empreendedor”. Nesta tela o usuário é capaz de gerir seus produtos: remover ou editar produtos ou clicar em [adicionar produto] indo para a seguinte tela:
“Tela de Cadastro de produto”

Caso o empreendedor não estiver cadastrado:
Acesso à tela “homepage”: clicar em [entrar]
Acesso à tela “login”: clicar em [criar conta/sou vendedor]
Acesso à tela “Cadastro-Empreendedor”. Ao final do cadastro o empreendedor ao clicar em [enviar meus dados] será redirecionado para a área de sua loja.

Abaixo segue a imagem de fluxo do usuário - empreendedor:

![Fluxo Empreendedor](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/user%20flow%20empreendedor_imagem.jpg "FLuxo Empreendedor")



## Wireframes

### Tela: Homepage

A tela de homepage apresenta como conteúdo ao usuário algumas ofertas em destaque. Seguindo a estrutura padrão do site, o cabeçalho apresenta alguns elementos importantes:

> - **Canto superior esquerdo:** elemento de identidade visual da Moda Green.
> - **Posição central:** componente de pesquisa que permite ao usuário inserir palavras chaves para buscar produtos ou lojas específicas.
> - **Canto superior direito:** são apresentados os componentes de lista de favoritos, login e carrinho de compra. Ao clicar em cada uma das opções elencadas, o usuário é redirecionado para a página respectiva da opção selecionada.

O bloco disponibilizado à esquerda apresenta as categorias disponíveis para consulta. Cada elemento deste componente direciona o usuário para a seção correspondente.

<center>

![Tela Homepage](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Homepage.png "Tela Homepage")

</center>

<p style="text-align: center;">Figura 1 - Tela Homepage</p>

### Tela: Login

Na tela de login, além dos elementos padrões do cabeçalho, temos dois blocos principais:

> - **Área para login de usuários já cadastrados:** são solicitadas as informações de e-mail e senha para que o login seja efetuado. O usuário possui disponível também a opção de recuperação de senha.
> - **Área para criação de conta:** são solicitadas as informações de nome, e-mail e senha para que a criação da conta seja efetivada.

![Tela de login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Tela%20de%20login.png?raw=true "Tela de login")

Figura 2 - Tela de Login

### Tela: Apresentação dos produtos por loja

A tela de apresentação dos produtos por loja apresenta como conteúdo os produtos anunciados pelo empreendedor na sua loja virtual. O usuário visualiza acima dos produtos as informações referentes à loja, como sua identidade visual e as informações de localização. No canto superior direito, há a opção de ordenação do conteúdo apresentado, com as seguintes opções: mais vendidos, maior preço, menor preço e mais bem avaliados.

No bloco à esquerda, o usuário possui algumas opções de filtro de pesquisa, como: tamanho, gênero, preço, tipo de material e certificações.

![Tela de apresentação dos produtos por loja](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Apresenta%C3%A7%C3%A3o%20de%20produtos%20por%20loja.png?raw=true "Tela de apresentação dos produtos por loja")

Figura 3 - Tela de apresentação de produtos por loja

### Tela: Apresentação dos produtos por categoria

A tela de apresentação dos produtos por categoria apresenta como conteúdo os produtos correspondentes à categoria escolhida pelo usuário. No canto superior direito, há a opção de ordenação do conteúdo apresentado, com as seguintes opções: mais vendidos, maior preço, menor preço e mais bem avaliados.

No bloco à esquerda, o usuário possui algumas opções de filtro de pesquisa, como: tamanho, gênero, preço, tipo de material e certificações.

![Tela de apresentação dos produtos por categoria](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Apresenta%C3%A7%C3%A3o%20de%20produtos%20por%20categoria.png?raw=true "Tela de apresentação dos produtos por categoria")

Figura 4 - Tela de apresentação dos produtos por categoria

### Tela: Detalhamento do produto

Na tela de detalhamento do produto são apresentadas diversas informações referentes ao produto selecionado pelo usuário. Do lado esquerdo, temos a descrição e as avaliações do produto. As fotos são apresentadas no centro da página. Já do lado direito, há a informação de preço e as opções de tamanho disponíveis para seleção. Ao clicar em ‘comprar’, o usuário é direcionado para a tela de finalização do pedido. Há, ainda, um campo destinado para envio de perguntas ao vendedor.

![Tela de detalhamento do produto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Detalhamento%20do%20produto.png?raw=true "Tela de detalhamento do produto")

Figura 5 - Tela  de detalhamento do produto

### Tela: Lista de favoritos

A tela de favoritos apresenta a relação dos produtos incluídos na lista de favoritos pelo usuário. Ao clicar em visualizar, o usuário é direcionado novamente para a tela de detalhamento do produto escolhido.

![Tela lista de favoritos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/Lista%20de%20favoritos.png?raw=true "Tela lista de favoritos")

Figura 6 - Tela lista de favoritos











> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)
