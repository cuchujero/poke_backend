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
