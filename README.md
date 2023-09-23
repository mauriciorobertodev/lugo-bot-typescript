<div align="center">
  <h1>Lugo Bot Typescript</h1>

  <p>
    Template para um novo Lugo Bot feito em typescript
  </p>

<!-- Badges -->
<p>
<img alt="PRs welcome!" src="https://img.shields.io/static/v1?label=PRs&message=WELCOME&style=for-the-badge&color=3b82f6&labelColor=222222" />
  <a href="https://github.com/mauriciorobertodev/lugo-bot-typescript/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/mauriciorobertodev/lugo-bot-typescript?color=3b82f6&label=CONTRIBUTORS&logo=3C424B&logoColor=3C424B&style=for-the-badge&labelColor=222222" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/mauriciorobertodev/lugo-bot-typescript?color=3b82f6&label=LAST UPDATE&logo=3C424B&logoColor=3C424B&style=for-the-badge&labelColor=222222" alt="last update" />
  </a>

  <a href="https://github.com/mauriciorobertodev/lugo-bot-typescript/stargazers">
    <img src="https://img.shields.io/github/stars/mauriciorobertodev/lugo-bot-typescript?color=3b82f6&label=STARS&logo=3C424B&logoColor=3C424B&style=for-the-badge&labelColor=222222" alt="stars" />
  </a>

</p>

![Alt text](https://raw.githubusercontent.com/mauriciorobertodev/lugo-bot-typescript/main/screenshot.png)

</div>

<br />

<!-- About the Project -->

## :star2: Sobre o projeto

O objetivo do projeto é ser um template que possa ser usado de base para a criação de novos Lugo Bots feitos em typescript, com alguns recursos e organizações para facilitar a vida do desenvolvedor do bot.
<br>

<!-- About the Project -->

## :mortar_board: O que aprendi

Na construção deste projeto tive que aprender um pouco sobre shell scripts e como criar um, fiz isso para automatizar alguns comandos são usados frequentemente no desenvolvimento de um Lugo Bot, também tive que me aprofundar um pouco mais em imagens docker para descobrir formas de deixar as coisas mais simples, neste caminho descobri novas coisas como nomear um container, definir argumentos e um .env.
<br>

<!-- Tech -->

### :fire: O que foi usado

-   [Typescript](https://laravel.com/docs/10.x/starter-kits)
-   [ES lint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Docker](https://www.docker.com/)
-   [The Dumies JS](https://github.com/lugobots/the-dummies-js)

<br>
<!-- Features -->

### :dart: Features

-   Configuração de Eslint e prettier.
-   Organização dos comandos do bot em arquivos separados na pasta `commands`.
-   Implementação de sistema de zonas de campos, [saiba mais aqui](http://google.com).
-   Uma definição de zonas de campo inicial, com grid 16x12 e contendo 12 zonas de campo.
-   Função log amigável.
-   Alteração nos arquivos docker-compose para poluir menos a tela de logs.
-   Configuração de debug para typescript.
-   Scripts shell para ajudar no desenvolvimento incluindo troca rápida de lado

<br>

<!-- Usage -->

## :zap: Como usar

1.  Clone o este repositório e remova a pasta `.git` ou crie um novo repositório no github usando esse como template.
2.  Use`npm install` para ter todas as dependências.
3.  Use `sudo npm run build` para criar pela primeira vez a pasta `dist`.
4.  Dê permissão para o arquivo `bot` usando `chmod +x bot`.
5.  Abra o arquivo `package.json` e defina `name` como o nome do seu bot e `version` como a versão do seu bot, serão usados para buildar a imagem do bot.
6.  Agora está pronto para ser usado, você pode usar `./bot help` para ver as opções.
    <br/>

<!-- Run coker -->

## :whale: Rodando via docker

Em um terminal rode o comando

```bash
  ./bot run (home|away) (imagem do bot adversário caso queira)
```

<!-- Run Locally -->

## :computer: Rodando localmente

Defina as variáveis `BOT_TEAM` e `BOT_NUMBER` no arquivo `.env`

```bash
  BOT_TEAM='home'
  BPT_NUMBER=10
```

Em um terminal rode o comando

```bash
  # caso você digite um lado diferente de home lembre de por o lado correto em BOT_TEAM
  ./bot run (home|away)
```

Em outro terminal use

```bash
  # caso você digite um lado diferente de home lembre de por o lado correto em BOT_TEAM
  npm run play
```

## :bug: Rodando com debug

Defina as variáveis `BOT_TEAM` e `BOT_NUMBER` no arquivo `.env`

```bash
  BOT_TEAM='home'
  BPT_NUMBER=10
```

Em um terminal rode o comando

```bash
  # caso você digite um lado diferente de home lembre de por o lado correto em BOT_TEAM
  ./bot run (home|away)
```

Aperte `F5`

## :rainbow: Outros comandos

```bash
    # Inicia um jogo entre o bot que está sendo desenvolvido contra a imagem de outro bot, use 'home' ou 'away' para escolher o lado, e após o lado caso deseje o nome da imagem do oponente.
  ./bot run (home|away) (imagem do bot adversário)

  # Inicia um jogo entre a imagem do bot que está sendo desenvolvido contra a imagem de outro bot, use 'home' ou 'away' para escolher o lado e após o lado caso deseje o nome da imagem do oponente. É NECESSÁRIO TERM USADO ./bot build antes
  ./bot test (home|away) (imagem do bot adversário)

  # Constrói a imagem do bot sendo desenvolvido você pode passar a versão que deseja buildar e ela ficará como tag, por padrão será usado a versão dita no package.json, o nome do bot é sempre o nome do pacote em package.json
  ./bot build (null|versão ex 1.0.0)

  # Inicia um container que monitora as alterações no código e rebuilda na pasta dist
  ./bot watch (null|down)

  # Faz login no repositório do Lugo Bots, constrói a imagem e a envia para o repositório, a tag será a versão que está em package.json, o nome do bot é sempre o nome do pacote em package.json
  ./bot push

  # Faz login no site/repositório lugo bots. ${BOLD}${YELLOW}*etapa necessária antes de enviar a imagem do bot* , o nome do bot é sempre o nome do pacote em package.json
  ./bot login

  # Finaliza a sessão no site/repositório lugo bots.
  ./bot logout

  # Exibe as opções disponíveis
  ./bot help
```

<!-- Contributing -->

## :wave: Contribuindo

Contribuições são sempre bem vindas!

1. Faça o _fork_ do projeto (<https://github.com/mauriciorobertodev/lugo-bot-typescript/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b meu-novo-recurso`)
3. Faça o _commit_ (`git commit -am 'Adicionando um novo recurso...'`)
4. _Push_ (`git push origin meu-novo-recurso`)
5. Crie um novo _Pull Request_

</br>

<a href="https://github.com/mauriciorobertodev/lugo-bot-typescript/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mauriciorobertodev/lugo-bot-typescript" />
</a>
</br>

<br>

<!-- Contact -->

## :handshake: Contato

Mauricio Roberto - mauricio.roberto.dev@gmail.com

Link do projeto: [https://github.com/mauriciorobertodev/lugo-bot-typescript](https://github.com/mauriciorobertodev/lugo-bot-typescript)

<br>

<!-- Acknowledgments -->

## :gem: Créditos/Reconhecimento

-   [Shields.io](https://shields.io/)
-   [Awesome Readme Template](https://github.com/Louis3797/awesome-readme-template)
-   [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#travel--places)

<br>

<!-- References -->

## :microscope: Referências

-   [Docker - Documentação](https://docs.docker.com/)
-   [Lugo Bot - Documentação](https://spec.lugobots.dev/)
-   [The Dumies JS - Bot base](https://github.com/lugobots/the-dummies-js)
