---
title: "Cómo crear una restful API con express.js"
metaTitle: "Cómo crear una restful API con express.js | Luis Leal"
metaDesc: "Express.js es un popular marco de aplicación web de Node.js que se utiliza para crear aplicaciones web y API RESTful. En este artículo, vamos a explorar cómo crear una API RESTful utilizando Express.js."
socialImage: "https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg"
date: "26 marzo, 2023"
author: "Luis Leal"
authorImg: "img/luisleal.jpg"
category: "JavaScript"
tags:
  - JavaScript
  - express
  - restful
  - api
  - node js
  - Luis Leal
---

Express.js es un popular marco de aplicación web de Node.js que se utiliza para crear aplicaciones web y API RESTful. En este artículo, vamos a explorar cómo crear una API RESTful utilizando Express.js.

##### ¿Qué es una API RESTful?

Una API RESTful es una API web que utiliza los principios de REST (Representational State Transfer) para acceder y manipular recursos en un servidor. Cada recurso se identifica mediante una URI (Uniform Resource Identifier) única y se accede mediante métodos HTTP estándar, como GET, POST, PUT y DELETE.

## Cómo crear una API RESTful con Express.js

Para crear una API RESTful con Express.js, necesitaremos seguir algunos pasos clave:

Instalar Express.js y otras dependencias
Para comenzar, necesitamos instalar Express.js y otras dependencias necesarias para nuestra aplicación. Puede hacerlo mediante npm (Node Package Manager) utilizando el siguiente comando en su terminal:

```
npm install express body-parser cors
```
### Crear una instancia de Express.js

Luego, necesitamos crear una instancia de Express.js en nuestro archivo principal de la aplicación, que generalmente se llama index.js. Podemos hacerlo importando Express.js y creando una instancia de ella de la siguiente manera:

```
const express = require('express');
const app = express();
```

### Configurar middlewares
Express.js utiliza middlewares para procesar solicitudes HTTP y respuestas. Necesitamos configurar algunos middlewares para que nuestra API funcione correctamente. Aquí hay algunos middlewares comunes que se utilizan en una API RESTful:

**body-parser:** nos permite analizar el cuerpo de las solicitudes HTTP entrantes, que generalmente están en formato JSON.

**cors:** nos permite configurar CORS (Cross-Origin Resource Sharing) para que nuestras solicitudes HTTP puedan ser accedidas desde diferentes orígenes.

Podemos configurar estos middlewares de la siguiente manera:

```
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
```

### Configurar rutas
Una vez que hayamos configurado los middlewares, podemos comenzar a definir nuestras rutas de API. Cada ruta se define utilizando un método HTTP y una ruta URI única. Por ejemplo, para definir una ruta GET para obtener una lista de usuarios, podemos hacer lo siguiente:

```
app.get('/users', (req, res) => {
  // Lógica para obtener una lista de usuarios
  res.send(users);
});
```

Podemos definir rutas para otros métodos HTTP, como **POST, PUT y DELETE,** utilizando los métodos correspondientes de Express.js.

### Iniciar el servidor
Finalmente, necesitamos iniciar el servidor para que pueda escuchar solicitudes HTTP entrantes. Podemos hacerlo utilizando el siguiente código:

```
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
```

#### Conclusión

Crear una API RESTful con Express.js es un proceso relativamente simple. Con unos pocos pasos clave, podemos configurar nuestra aplicación para procesar solicitudes HTTP y respuestas, definir rutas de API y escuchar solicitudes entrantes en nuestro servidor. Express.js es un marco poderoso y flexible que puede ayudar a simplificar el proceso de crear una API RESTful y hacer que sea más fácil de mantener y escalar en el futuro.