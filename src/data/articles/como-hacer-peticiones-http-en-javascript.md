---
title: "Cómo hacer peticiones http en JavaScript"
metaTitle: "Cómo hacer peticiones http en JavaScript | Luis Leal"
metaDesc: "JavaScript proporciona varias formas de realizar estas solicitudes, pero Fetch y Axios son dos de las más populares."
socialImage: "https://lh4.googleusercontent.com/CgCS6q_dML8Xo8d5_YBLyDI0ydywqEPj26uls0EODkM0yKtAXufQKnlyenqvclW3iikzkK-nmJb4Yrrgo1G_y5H3S-DZLPIHXoTQtHsBjq3iJwW8rHZESwu4MxhQczYu3fl8zx_V"
date: "26 marzo, 2023"
author: "Luis Leal"
authorImg: "img/luisleal.jpg"
category: "JavaScript"
tags:
  - peticiones https
  - javascript
  - axios
  - fetch
  - api
  - Luis Leal
---

En aplicaciones web modernas, es común tener que enviar y recibir datos desde un servidor utilizando solicitudes HTTP. JavaScript proporciona varias formas de realizar estas solicitudes, pero Fetch y Axios son dos de las más populares. En este artículo, exploraremos cómo hacer peticiones HTTP utilizando Fetch y Axios en JavaScript.

## Fetch

Fetch es una API nativa del navegador que se utiliza para hacer solicitudes HTTP. A diferencia de XMLHttpRequest, Fetch utiliza Promises, lo que simplifica el código asíncrono y lo hace más fácil de leer y entender.

Para hacer una solicitud con Fetch, simplemente llame a la función fetch() con la URL de la solicitud como argumento. El método fetch() devuelve una Promise que se puede encadenar con otros métodos para procesar la respuesta del servidor.

Aquí hay un ejemplo de cómo hacer una solicitud GET con Fetch:

```
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

En este ejemplo, llamamos a fetch() con la URL de la solicitud. La Promise que devuelve fetch() se encadena con el método then() para procesar la respuesta del servidor. Llamamos a response.json() para convertir la respuesta en un objeto JSON y luego utilizamos otro método then() para trabajar con los datos. Finalmente, usamos el método catch() para manejar cualquier error que se produzca durante la solicitud.

## Axios

Axios es una popular biblioteca JavaScript utilizada para hacer solicitudes HTTP. Ofrece una API fácil de usar que simplifica el proceso de hacer solicitudes HTTP y manejar las respuestas.

Para utilizar Axios, primero debemos instalarlo a través de npm o Yarn. Luego, podemos importar la biblioteca en nuestro código y hacer una solicitud utilizando la función correspondiente. Axios también utiliza Promises, lo que lo hace fácil de encadenar con otros métodos.

Aquí hay un ejemplo de cómo hacer una solicitud GET con Axios:

```
import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.data))
  .catch(error => console.error(error))
```

En este ejemplo, importamos Axios y luego hacemos una solicitud GET con la función axios.get(). La Promise que devuelve axios.get() se encadena con el método then() para procesar la respuesta del servidor. Llamamos a response.data para obtener los datos de la respuesta y luego utilizamos el método catch() para manejar cualquier error que se produzca durante la solicitud.

### Conclusión

Fetch y Axios son dos formas populares de hacer solicitudes HTTP en JavaScript. Ambos ofrecen una API fácil de usar y utilizan Promises para simplificar el código asíncrono. Si bien cada biblioteca tiene sus ventajas y desventajas, ambas son útiles en diferentes situaciones y pueden ayudar a simplificar el proceso de hacer solicitudes HTTP en su aplicación.