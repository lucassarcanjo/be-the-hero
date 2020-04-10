<h1 align="center">
    <img alt="Be The Hero" title="#BeTheHero" src=".github/logo.svg" width="250px" />
</h1>

<h4 align="center">
    Semana Omnistack 11.0 🚀
</h4>

<p align="center">
    <img src="https://img.shields.io/github/languages/count/lucassarcanjo/be-the-hero?color=%2304D361" alt="Github language count">
    <img src="https://img.shields.io/github/repo-size/lucassarcanjo/be-the-hero" alt="Repository size">
    <a href="https://www.linkedin.com/in/lucas-arcanjo/">
        <img src="https://img.shields.io/badge/made%20by-LucasArcanjo-%2304D361" alt="Made by Lucas Arcanjo">
    </a>
    <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="License">
</p>

<p align="center">
    <a href="https://insomnia.rest/run/?label=Be%20the%20Hero&uri=https%3A%2F%2Fgithub.com%2Flucassarcanjo%2Fbe-the-hero%2Fblob%2Fmaster%2Finsomnia.json" target="_blank" >
        <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
    </a>
</p>

## Project

Be The Hero is a project that aims to connect people who are willing to help ONGs.
<p align="center">
    <img alt="Desktop preview" src=".github/Desktop.gif" width="500px">
</p>

## Technologies

This project was developed using the following technologies:

- [NodeJS][nodejs]
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native)
- [Expo](https://expo.io)

## Layout

View the layout online using [Figma](https://www.figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero---OmniStack-11).

## How to use

To clone and run this app, you will need [Git][git], [NodeJS][nodejs] and [Yarn][yarn] installed on your computer.

On your favorite terminal:

```sh
# Clone this repository
$ git clone https://github.com/lucassarcanjo/be-the-hero

# Go into the repository
$ cd be-the-hero/backend

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex migrate:latest 

# Run Seeds
$ yarn seed

# Run the API
$ yarn dev

# Run tests
$ yarn test
```

## License

This project is under the MIT license. See [here](license.md) for details.

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[git]: https://git-scm.com

<!-- Projeto desenvolvido na Semana Omnistack 11 promovida pela Rocketseat. O projeto consiste em uma plataforma de ONGs onde pessoas podem visualizar e ajudar nos custos de cada incidente/caso onde a ONG atuou. A plataforma é composta por uma RestAPI desenvolvida em NodeJS que faz a interface com um frontend desenvolvido em ReactJS (para acesso das ONGs) e também uma aplicação mobile multiplataforma desenvolvida em React Native onde cada usuário pode acompanhar os casos lançados e entrar em contato através do email ou whatsapp. -->

