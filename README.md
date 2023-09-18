<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Basic project in NestJS where a rest api is created to manage data related to Cars and Brands. It has no connection to a database, all information is stored in memory temporarily.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Populate data

```bash
curl --location 'http://localhost:3000/seed'
```