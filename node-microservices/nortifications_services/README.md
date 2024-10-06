<p align="center">
  <a href="" target="blank"><img src="/docs/images/notification-icon.jpeg" width="200" alt="Nest Logo" /></a>
</p>

## Description

A basic API to manage notifications build-in TypeScript using Nest, Prisma and Apache Kafka

## Architecture

This project uses Clean Architecture principles

## Installation

```bash
$ yarn
```

or

```
$ npm install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## ENV

Rename .env-example to .env with the correct values

You can use https://console.upstash.com/kafka to create a Kafka cluster

## Running Apache Kafka Producer

```bash
$ node scripts/producer-notifications.send-notification.mjs
```

## Test

```bash
# unit tests
$ yarn test

# test coverage
$ yarn test:cov
```

## About

- Author - [César Hilário](https://github.com/cesarhilario)

## License

MIT License

## Credits

<a href="https://br.freepik.com/fotos-gratis/alerta-de-notificacao-de-sino-pop-up-de-lembrete-ou-sinal-ou-simbolo-de-icone-de-alarme-para-a-interface-do-usuario-do-site-de-aplicativos-na-ilustracao-de-renderizacao-3d-de-fundo-roxo_24598564.htm#query=notifications&position=1&from_view=search&track=sph">Image from mamewmy</a> no Freepik
