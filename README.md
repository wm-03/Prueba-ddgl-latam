Prueba de Middleware de Catálogo y Precios

Microservicio construido con NestJS que consulta el catálogo de productos de DummyJSON, transforma la información y aplica reglas de negocio:
cálculo de precio final con impuesto del 16% e indicador de stock bajo. Expone un endpoint propio con los datos ordenados por precio de mayor a menor.

Creé un archivo .env en la raíz del proyecto con las variables:
PORT para el puerto en que corre el servidor y DUMMY_API_URL para la url de la API.

Instalación

npm install

Ejecución

Modo desarrollo:
npm run start:dev

Modo producción:
npm run start:prod

Con Docker:
docker-compose up --build


Endpoint disponible

GET /products
Retorna el listado de productos transformado, ordenado por precio de mayor a menor.
id, title, price, finalPrice, stock, isLowStock, brand, category.
