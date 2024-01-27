![logo-empresa](https://github.com/Alberto813/alberto813.github.io/assets/55930436/634f0db6-b137-4d26-87a6-959e4de531c6)
---
> [!NOTE]
> Imagina tu diversion Ensenada proximamente con pagina web, la pagina se encuentra en desarrollo y puede estar incompleta. Ninguna de la informacion provista en esta preview es valida, precios, paquetes, ofertas mostradas aqui son con fin de desarrollo de la misma y la distribucion componentes.

# IDEA GENERAL DE LA PAGINA WEB
Crear una pagina informativa (Static Landing Page) sobre el negocio y los servicios que ofrece, asi como informacion general de la empresa, su historia y Terminos de servicio o politicas.

## MODULOS NECESARIOS
`Astro 3.07`

**Instala mediante el comando**
```
npm install astro@3.0.7
```
---
`tailwindcss 3.3.3`
`astrojs/tailwind 5.0.0`

**Instala mediante el comando**
```
npm run astro add tailwind
```

## ESTRUCTURA GENERAL DEL PROYECTO
Dentro del proyecto hay una estructura simple donde el contenedor principal es el `Layout`, en el cual se construiran cada una de las paginas necesarias, despues estan las paginas, son las que utilizaran el layout e incrustaran todos los componentes que se deseen mostrar; `index.astro` es la pagina principal donde se encuentra informacion resumida con enlaces a paginas adicionales con la informaccion completa. Cuenta con una barra de navegacion con diversos enlaces: `Inicio Juegos Premios Cafeteria Paquetes Sobre Nostros`
