---
title: "La mejor alternativa a Material UI"
metaTitle: "La mejor alternativa a Material UI | Luis Leal"
metaDesc: "Next ui se ha convertido en una de mis librerías favoritas para react y nextjs..."
socialImage: "https://nextui.org/twitter-cards/nextui.jpeg"
date: "05 febrero, 2023"
author: "Luis Leal"
authorImg: "img/luisleal.jpg"
category: "React"
tags:
 - react
 - nextjs
 - libreria
 - material ui
 - alternativa a material ui
 - next ui
---

Como buenos desarrolladores, tenemos que tener diversas alternativas a librerías de componentes que nos faciliten el trabajo a la hora de crear un sitio web. En mi caso al trabajar tanto con Reactjs como con Nextjs siempre tengo en mente utilizar Material UI. Pero... ¿no existen más librerías?.

### NextUI
> Make beautiful websites regardless of your design experience

Next UI es una librería de componentes para react que actualmente se encuentra en beta pero que cada vez se van agregando más y más componentes que van desde el típico Grid hasta las maravillosas barras de navegación que tiene (y que en lo personal uso).

Para darte cuenta un poco sobre el potencial de Next UI, te invito a echarle una vista a esta página que estás viendo (luisrrleal.com), la cuál fue creada en su mayoría (si no es que en su totalidad) por esta maravillosa librería. Igualmente puedes revisar la página oficial de Next UI (nextui.org) donde podrás encontrar la documentación de todo lo que necesites.


1. ##### Instalación de Next UI
    Instalación con npm
    `npm i @nextui-org/react`
    Instalación con yarn
    `yarn add @nextui-org/react`
2. ##### Setup
*Con React*
----
----

```
    import * as React from 'react';
    // 1. importa 'NextUIProvider'
    import { NextUIProvider } from '@nextui-org/react';
    function App({ Component }) {
    // 2. Usa en el root de tu aplicación
    return (
        <NextUIProvider>
              <Component />
         </NextUIProvider>
  );
}
```
*Con Next*
----
----

```
    // 1. importa 'NextUIProvider'
    import { NextUIProvider } from '@nextui-org/react';
    function MyApp({ Component, pageProps }) {
     return (
          // 2. Usa en el root de tu apliación
         <NextUIProvider>
              <Component {...pageProps} />
        </NextUIProvider>
  );
}
```
  En Next js se tiene que hacer un paso extra que sería agregar en nuestro _document.ts/_document.js el `CssBaseLine`, esto lo haremos simplemente introduciendo dentro del `Head` lo siguiente: `{CssBaseline.flush()}`, hay que asegurarnos de haberlo importado como `import { CssBaseline } from '@nextui-org/react';`

## Agregar mi primer componente de Next UI
El componente más básico que podemos agregar solamente para verificar que todo está bien, es un `Text`, podemos poner lo siguiente en alguna página u otro componente:

```
     <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Let's
      </Text>
```
      
Este código nos creará un hermoso texto con un gradiante, que representa en html un h1 y que tiene un tamaño bastante grande para ser un título principal.

### Conclusión
Existen miles de librerías de componentes para react, pero estoy seguro que Next UI es una que tiene mucho futuro y que estando en fase beta ya se puede visualizar el gran trabajo que han hecho los desarrolladores.

