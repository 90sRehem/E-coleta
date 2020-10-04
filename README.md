<p align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://user-images.githubusercontent.com/39415174/83923322-5f890f80-a758-11ea-88fa-9df8c50630b9.png" width="160px" />
</p>
<p align="center">
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/90sRehem/E-coleta?style=plastic" />
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/90sRehem/E-coleta?color=brightgreen&style=plastic" />    
  <a href="https://www.linkedin.com/in/jonathan-rehem-7101171a5/">
    <img alt="Made by Jonathan Rehem" src="https://img.shields.io/badge/made%20by-90sRehem-important?style=plastic">
  </a>
  <a href="https://github.com/90sRehem/E-coleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/DanielObara/NLW-1.0?style=plastic">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=plastic">
</p>

# Projeto Ecoleta
![capa](https://user-images.githubusercontent.com/39415174/83946739-0fa65900-a7e9-11ea-9433-219ec85b1ed1.jpg)
Projeto desenvolvido durante a primeira [NextLevelWeek](https://nextlevelweek.com/) da [Rocketseat](https://rocketseat.com.br) para aplicar os conceitos de `typescript`, `Node.js`, `ReactJS` e `React Native`.

Trata-se de uma aplicação completa (backend, frontend e mobile) para atender a demanda de logistica da coleta de resíduos. Em outras palavras , em homenagem à semana internacional do meio ambiente que coincidiu com o período da realização da Next Level Week 1.0.
  
  [Começando](#começando)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Instalação](#instalação)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Execução](#execução)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Tecnologias](#tecnologias)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Preview](#preview)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Licença](#licença)  

## Começando
As instruções a seguir são para fornecer uma cópia deste projeto que poderá ser executada na sua máquina local para fins de desenvolvimento e teste.

### Pré Requisitos

* É necessário que você tenha o `Node.js` instalado em sua máquina. 
* Para a aplicação Mobile é necessário instalar o pacote `expo` em sua máquina

## Instalação

Clonando este repositório em sua máquina local e acessaando a pasta do projeto:

```bash
git clone https://github.com/90sRehem/E-coleta.git
cd E-coleta
```

### Backend
Instalando as dependências do backend da aplicação:

```bash
cd backend
npm install
```

### Frontend

Instalando as dependências do frontend da aplicação:

```bash
cd frontend
npm install
```

### Mobile

Instalando as dependências da aplicação mobile:

```bash
cd mobile
npm install
```

## Execução
Toda a aplicação pode ser inicializada em ambiente de desenvolvimento com facilidade, seguindo as instruções abaixo:

### Backend
A primeira parte que deve ser executada no ambiente de desenvolvimento é o servidor `node.js`. 

Certifique-se de que está dentro da pasta `backend` do projeto em seu terminal e em seguida, execute o comando abaixo para inicializá-lo:

```bash
npm start
```

### Frontend
Este é o site construído utilizando o framework `ReactJS` criada pelo Facebook, onde os pontos de coleta serão cadastrados. É necessário que o backend já esteja operacional. 

Certifique-se de que está dentro da pasta `web` do projeto em seu terminal e em seguida, execute o comando abaixo para inicializá-lo:

```bash
npm start
```
### Mobile
Nesta parte você irá inicializar a aplicação mobile, construída utilizando o framework `React Native`, também criado pelo Facebook, onde os pontos de coleta podem ser consultados por cidade. Esta parte funciona independente da parte web, porém é necessário que o backend já esteja operacional. 

Certifique-se de que está dentro da pasta `mobile` do projeto em seu terminal e em seguida, execute o comando abaixo para inicializá-lo:

```bash
npm start
```
Após o projeto mobile inicializar, será exibido um `QRCode` no terminal e uma aba do seu navegador irá carregar o `Metro Bundler`. Neste momento você precisará instalar em seu dispositivo móvel, um aplicativoo chamado `Expo`.
Ele está disponível nas lojas de aplicativos dos respectivos OS:

- [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) na Google Play
- [Expo Client](https://apps.apple.com/br/app/expo-client/id982107779) na Apple Store

Abra em seu smartphone o aplicativo Expo e escaneie o código de barras exibido na inicialização do projeto.


## Tecnologias

* [Node.js](https://nodejs.org/) - Usado para construir o backend (webservice REST) do projeto.
* [express](https://expressjs.com/) - Framework Web utilizado no backend.
* [knex.js](http://knexjs.org/) - ORM usado no backend para auxiliar no versionamento do banco de dados.
* [salite3](https://www.sqlite.org/) - Banco de dados utilizado no backend para percistência dos dados.
* [React](https://reactjs.org/) - Usado para construir o frontend Web (website).
* [React Native](https://reactnative.dev/) - Usado para construir a aplicação Mobile multiplataforma.
* [expo](https://expo.io/) - Usado para facilitar o desenvolvimento com `React Native`.
* [typescript](https://www.typescriptlang.org/) - Usado para melhorar a integridade do código final e auxiliar o desenvolvimento em equipe.

Confira a lista completa de tecnologias utilizadas no arquivo `package.json`, presente na pasta raiz de cada parte do projeto.

## Preview
Olha só como ficou:

![90sRehem/E-coleta](https://user-images.githubusercontent.com/39415174/83953042-97a15880-a813-11ea-9813-71ed48446b2c.gif)

A API implementada no backend não possui interface gráfica própria. Para ver como ficou, confira o código aqui no repositório.

## Licença

Este projeto foi desenvovido sob a licença MIT. Veja o [LICENSE](./LICENSE) para detalhes.


Feito com ♥ por [Jonathan Rehem](https://www.linkedin.com/in/jonathan-rehem-7101171a5/)
