
# 3. Metodologia

## 3.1 Relação de Ambientes de Trabalho

<p align="justify">Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada a seguir.</p>

* Repositório de código fonte
   - GitHub: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico
* Documentos do projeto
   - Google Docs: https://docs.google.com/document/d/1265JHL8JBO0dWtKnldzmhRNSvhvy2-joxFgG73JVvDw/edit
* Projeto de Interface
   - MarvelApp: https://marvelapp.com/prototype/a6bc5j5
* Gerenciamento do Projeto
   - Trello: https://trello.com/b/L5GwhGmV/projeto-desenvolvimento-web-e-commerce

## 3.2 Gestão de código fonte

<p align="justify">Com o intuito de manter a rastreabilidade das atualizações e revisões no software, será utilizado um método simples e eficiente de gestão do código fonte. Desta maneira será possível identificar o tempo e a pessoa responsável.</p>

<p align="justify">Será utilizado um histórico de atualizações onde ficará registrada qualquer alteração que seja feita no código fonte. Sendo assim, poderá ser realizada uma consulta a qualquer momento.</p>

<p align="justify">Será realizado backups incrementais e full permitindo o retorno simples e rápido a versões anteriores. Teremos como parâmetro a ideia de que será sempre uma prioridade manter a ordem para que seja fácil identificar falhas e, da mesma forma, seja simples e rápido de corrigir. Manteremos um controle de acesso autorizado para as revisões no intuito de solucionar conflitos de mudanças de forma ágil e eficaz.</p>

<p align="justify">Os códigos devem ser escritos de forma limpa o suficiente para permitir a leitura e interpretação pelo próprio autor ou qualquer outro programador. Sendo sugerido, a princípio, a utilização do software Code Climate para auxiliar na análise das vulnerabilidades do código. Para reduzir a chance de erro na escrita de código será utilizada uma biblioteca de desenvolvimento como fonte de códigos previamente escritos, scripts, dados de configuração ou outras bases de código pronto para evitar o esforço desnecessário em recriar soluções. Esta biblioteca deverá ser atualizada sempre que um integrante desenvolver algo, por mais simples que seja.</p>

<p align="justify">Será utilizada uma árvore de versões de código em forma de branches que permita a inteligibilidade das versões e correções implementadas. Poderá ser utilizado um software de gerenciamento com a finalidade de automatizar e tornar efetiva a gestão, evitando imperfeições indesejáveis, falhas e permitindo a construção eficiente do código.</p>

<p align="justify">O GitHub é uma plataforma adquirida em 2018  pela Microsoft que auxilia o controle de versões do código fonte. Permite a colaboração de seus usuários em projetos open ou privados. Ele é amplamente utilizado para a divulgação de trabalhos ou somente como ferramenta colaborativa. Ele promove facilidade de comunicação além de possuir recursos que relatam problemas e mesclam repositórios remotos.
Utilizaremos o GitHub em nossos trabalhos.</p>


### 3.2.1 Controle de Versão

<p align="justify">A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com) foi utilizado para hospedagem do repositório.</p>

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## 3.3 Gerenciamento de Projeto

### 3.3.1 Divisão de Papéis

<p align="justify">A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.</p>

A equipe está organizada da seguinte maneira:
* Scrum Master:  Cristiane
* Product Owner: Cristiane
* Equipe de Desenvolvimento:
     - Rafaela
     - Ezequiel
     - Maria Luiza
* Equipe de Design : Rafaela

<p align="justify">Para organização e distribuição das tarefas do projeto, a equipe está utilizando o quadro Kanban (Trello) estruturado com as seguintes listas:</p>

- **Recursos:** Lista de tarefas recorrentes com as configurações padrões que todos devem seguir.
- **Backlog:** Essa lista é onde as tarefas de projetos são alocadas em cartões individuais. A lista também reúne tarefas que o time pode querer trabalhar ou nas quais precisará trabalhar no futuro, mas que ainda estão sendo avaliadas.
- **To Do:** Uma vez que a tarefa foi entendida, ela é movida a essa lista para mostrar à equipe que a tarefa já está pronta para ser executada. A essa altura, um membro da equipe é designado para ser o dono da tarefa e as datas de entrega são estabelecidas.
- **Doing:** Quando uma tarefa tiver sido iniciada, ela é movida para cá.
- **Test:** Checagem de Qualidade. Quando a tarefa está quase concluída, é o momento de movê-la para esta lista para que seja revisada ou que alguém dê uma segunda olhada.
- **Done:** Nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Pois já foram revisadas e aprovadas, não há mais edições ou revisões necessárias.
- **Locked:** Caso venha existir tarefas que foram impedidas de serem concluídas por algum motivo, deverão ser registradas nessa lista.

O quadro kanban do grupo no Trello está disponível através da URL https://trello.com/b/L5GwhGmV/projeto-desenvolvimento-web-e-commerce e é apresentado, no estado atual, na Figura 1.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/trello.png?raw=true" alt="quadro kanban">
Figura 1 - Tela do kanban (Trello) utilizada pelo grupo
<br>
As tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:

* Documentação                                            
* Desenvolvimento                                                          
* Infraestrutura
* Testes
* Gerência de Projeto

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g1-comercio-eletronico/blob/main/docs/img/etiquetas.PNG?raw=true" alt="Etiquetas">

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu]
> - [Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)

### 3.3.2 Processo

O grupo poderá fazer uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.

> **Links Úteis**:
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### 3.3.3 Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

> **Possíveis Ferramentas que auxiliarão no gerenciamento**:
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
