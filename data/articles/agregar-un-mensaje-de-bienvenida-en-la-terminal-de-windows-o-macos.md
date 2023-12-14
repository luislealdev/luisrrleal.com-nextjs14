---
title: "Agregar un mensaje de bienvenida al iniciar la terminal en MacOs o Windows"
metaTitle: "Agregar un mensaje de bienvenida al iniciar la terminal en MacOs o Windows | Luis Leal"
metaDesc: "En este artículo, explicaremos cómo puedes agregar un mensaje de bienvenida personalizado a tu terminal en Windows y macOS utilizando Vim, uno de los editores de texto más populares."
socialImage: "https://www.xmodulo.com/img/709a.jpg"
date: "30 abril, 2023"
author: "Luis Leal"
authorImg: "img/luisleal.jpg"
category: "Terminal"
tags:
  - terminal
  - consola
  - mensaje
  - bienvenida
  - Luis Leal
---

Si eres un usuario avanzado de la línea de comandos, es posible que hayas notado que cada vez que inicia la terminal en su sistema, se muestra una serie de información útil, como el nombre del usuario, la fecha y la hora, y otros detalles relevantes. Además, algunos usuarios también prefieren agregar un mensaje personalizado de bienvenida para hacer que la experiencia de usar la terminal sea más agradable.

En este artículo, explicaremos cómo puedes agregar un mensaje de bienvenida personalizado a tu terminal en Windows y macOS utilizando Vim, uno de los editores de texto más populares.

### Pasos para agregar un mensaje de bienvenida a la terminal en Windows

Para agregar un mensaje de bienvenida personalizado a la terminal en Windows, debes seguir estos pasos:

1. Abre la terminal de Windows.

2. Crea un archivo de texto vacío con el nombre que desees para el mensaje de bienvenida. Por ejemplo, "welcome.txt".

3. Abre el archivo "welcome.txt" en Vim utilizando el siguiente comando:

```
vim welcome.txt
```

4. Escribe el mensaje de bienvenida que deseas mostrar. Por ejemplo, "Bienvenido a la terminal de Windows!".

5. Guarda el archivo y cierra Vim presionando la tecla Esc seguida de :wq.

6. Abre el archivo profile.ps1 ubicado en la ruta C:\Users\usuario\Documents\WindowsPowerShell (reemplaza "usuario" por tu nombre de usuario en Windows).

7. Agrega la siguiente línea de código al final del archivo:

```
Get-Content C:\ruta\del\archivo\welcome.txt
```

8. Guarda el archivo profile.ps1 y cierra el editor.

9. Cierra y vuelve a abrir la terminal para ver el mensaje de bienvenida.

### Pasos para agregar un mensaje de bienvenida a la terminal en macOS

Para agregar un mensaje de bienvenida personalizado a la terminal en macOS, debes seguir estos pasos:

1. Abre la terminal de macOS.

2. Crea un archivo de texto vacío con el nombre que desees para el mensaje de bienvenida. Por ejemplo, "welcome.txt".

```
touch welcome.txt
```

3. Abre el archivo "welcome.txt" en Vim utilizando el siguiente comando:

```
vim welcome.txt
```

4. Escribe el mensaje de bienvenida que deseas mostrar. Por ejemplo, "Bienvenido a la terminal de macOS!".

5. Guarda el archivo y cierra Vim presionando la tecla Esc seguida de :wq.

6. Abre el archivo bash_profile ubicado en la ruta ~/.bash_profile.

```
vim ~/.bash_profile
```

7. Agrega la siguiente línea de código al final del archivo:

```
cat /ruta/del/archivo/welcome.txt
```

8. Guarda el archivo bash_profile y cierra Vim.

9. Cierra y vuelve a abrir la terminal para ver el mensaje de bienvenida.



En **resumen**, agregar un mensaje de bienvenida personalizado a la terminal en Windows y macOS es una tarea fácil que se puede realizar utilizando Vim y unos pocos comandos de terminal. Con estos sencillos pasos, podrás hacer que la experiencia de usar la línea de comandos sea más agradable y personalizada.
