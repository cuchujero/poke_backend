# Poke Test Backend 

## Autor

Jerónimo Sola

## Descripcion

Un sitio web dedicado a la exploracion del mundo pokemon


## Comandos para ejecutar proyecto

**npm install** --> instala dependencias
**npm start** &nbsp; --> ejecuta localmente en el puerto 3000  

En caso de que necesite cargar la informacion a su base de datos, debe setear la variable CHARGE_PROCESS en 'true'

## Valores de archivo .env

TEST_DB_USERNAME="cuchujero"
TEST_DB_PASSWORD="Goku123!"
TEST_DB_DATABASE="cuchujero_poke_test"
TEST_DB_HOST="mysql-cuchujero.alwaysdata.net"
TEST_DB_DIALECT="mysql"
TEST_DB_PORT=3306

PRODUCTION_DB_USERNAME="cuchujero"
PRODUCTION_DB_PASSWORD="Goku123!"
PRODUCTION_DB_DATABASE="cuchujero_poke_test"
PRODUCTION_DB_HOST="mysql-cuchujero.alwaysdata.net"
PRODUCTION_DB_DIALECT="mysql"
PRODUCTION_DB_PORT=3306

BEARER_TOKEN="Axx190zFQ7dsf***AYE24u5XZA"

CHARGE_PROCESS="false"


## Dependencias

axios 
cors
dotenv
express
express-validator
method-override
mysql2
nodemon
sequelize
sequelize-cli


## Documentacion 

Diagrama de base de datos

Script de base de datos

Documentacion de la API


## Mejoras futuras

Mejorar la documentacion de la API.

Cuando el sistema escale, considerar un TOKEN que expire cada minuto, validaciones de campos en las peticiones y unidades de testeo.

Poder crear un usuario e iniciar sesion. Para tener cuenta propia y poder seleccionar pokemon favoritos.









# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
