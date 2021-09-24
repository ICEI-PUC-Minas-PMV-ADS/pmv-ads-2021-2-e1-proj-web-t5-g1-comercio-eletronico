# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir. 

## Personas

Carla Dantas tem 44 anos, é artesã, tem um pequeno ateliê onde fabrica roupas, bolsas, bonecas, dentre outros produtos artesanais. Utiliza aplicativos como Instagram, Facebook e Blog. O que mais a motiva em sua profissão  é ver as pessoas usando as peças feitas com amor, o artesanato sustentável e a sua renda mensal.
Seu maior desafio é ter onde expor os produtos para promover suas vendas. 
“Desde pequena, ficava observando minha avó quando costurava fazer lindas peças. Tempos depois descobri meu talento pela costura e artesanato. Comecei a sentir prazer e necessidade pela costura. E hoje faço com amor como se cada peça fosse para mim.”


Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                                                       |PARA ... `MOTIVO/VALOR`                                                                        |
|--------------------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
|Carla Dantas        | realizar vendas online dos meus artesanatos                                                              | aumentar minhas vendas                                                                        |
|Carla Dantas        | expor meus produtos                                                                                      | conheçam meu trabalho e alcance o maior número de pessoas interessadas em comprá-los          |
|Carla Dantas        | instigar o uso de roupas Slow fashion                                                                    | redução de danos no ecossistema                                                               |
|Marina Prado        | poder realizar uma pesquisa sobre produtos específicos em um único lugar                                 | localizar com mais facilidade itens que sejam do meu interesse                                |  
|Marina Prado        | poder incluir os produtos do meu interesse em uma lista de favoritos                                     | que seja possível visualizá-los com mais facilidade quando eu quiser                          |
|Marina Prado        | ter acesso às características principais do produto, como: cor, tamanho, especificações técnicas         | que eu tenha as informações necessárias no momento da compra                                  |
|Marina Prado	     | ter acesso às informações da loja e do seu processo produtivo	                                        | que eu tenha as informações necessárias no momento da compra                                  |
|Marina Prado	     | visualizar os selos disponíveis para cada loja	                                                        | que eu consiga selecionar as lojas cujos valores estejam compatíveis com aquilo que eu procuro|
|Marina Prado        | visualizar as avaliações de outros clientes acerca dos produtos    	                                | avaliar com mais assertividade as qualidades e/ou defeitos dos produtos                       |
|Marina Prado	     | conseguir acompanhar o andamento do meu pedido 	                                                        | que eu tenha informações relevantes sobre os passos posteriores à compra                      |
|Luciana Martins     | vender os produtos produzidos por ela mesma em um local que destaque o conceito Hand-made e Slow Fashion | para ganhar dinheiro produzindo algo que ela acredita                                         |
|Luciana Martins     | ter acesso a um local que privilegia os tópicos conceituais de sua marca                                 | para poder vender seus produtos em um local que reforça seus próprios conceitos               |
|Luciana Martins     | que o termo Slow fashion seja mais conhecido                                                             | para agregar valor ao seu produto e atrair seu público-alvo específico                        |
|Luciana Martins     | encontrar uma rede de apoio de empreendedores de Slow fashion	                                        | fortalecer a entrada no mercado de produtos sustentáveis                                      |

                                   


> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                             | Prioridade |
|------|--------------------------------------------------------------------|------------|
|RF-001| O site deve permitir a exposição dos produtos                      |   ALTA     | 
|RF-002| O site deve permitir que o usuário final realize suas compras      |   ALTA     |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
