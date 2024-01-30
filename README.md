# Website

Este sitio web está creado utilizando [Docusaurus](https://docusaurus.io/), un moderno generador de sitios web estáticos.

### Installation

Primero se necesita Instalar docusaurus.io
```
$ npm install -g docusaurus
```
Luego se Necesita Instalar npm 

```
$ npm install 
```

### Local Development

Hacemos correr el npm en Local
```
$ npm run  start
```

Este comando inicia un servidor de desarrollo local y abre una ventana del navegador. La mayoría de los cambios se reflejan en vivo sin tener que reiniciar el servidor.


### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

Se crea el archivo Factura dentro del archivo Docs

![image](https://github.com/dvd-2008/my-website/assets/128089437/f5b4b021-5e71-4b22-9303-8a0f9963f995)

Posteriormente creamo los archivos con la extension MD

![image](https://github.com/dvd-2008/my-website/assets/128089437/a197a7ed-9967-4906-9ac2-a866420749c3)

En la Pagina tiene que verse de este modo : 

![image](https://github.com/dvd-2008/my-website/assets/128089437/53860800-aff4-4474-bacd-8de0ad466d59)


> .[!NOTE].
> configuramos el archivo docusaurus.config.js

![image](https://github.com/dvd-2008/my-website/assets/128089437/3ef30c64-2d48-489b-a940-7cad93462e14)

en el archivo sidebars.js se hace una pequeña modificacion : 


![image](https://github.com/dvd-2008/my-website/assets/128089437/b0331f2b-4d8f-4c88-9a5b-c3746e94a061)

Dentro de la carpeta  SRC entramos al archivo custom.css 

![image](https://github.com/dvd-2008/my-website/assets/128089437/a0405044-1d84-418e-b3dd-0edfaa2b513e)

Podremos modificar los colores del index 

![image](https://github.com/dvd-2008/my-website/assets/128089437/363d2ba7-fe9d-42e2-8d8e-89b3584682db)

Para que el boton Manual de Instalacion BUHO.SAC nos envie a la paguina que necesitamos

![image](https://github.com/dvd-2008/my-website/assets/128089437/18d0e544-8adb-419a-8d80-81105146bd84)

modificamos index.js que se encuentra en la carpeta #pages

![image](https://github.com/dvd-2008/my-website/assets/128089437/b0cb0951-af8f-4214-a6e4-076d15da2977)


la modificacion que se realiza es que en el  to="/docs/Factura/Linux"> enrutamos a donde quiere dirigirse la pagina 

![image](https://github.com/dvd-2008/my-website/assets/128089437/6de2a816-2eb5-4dc0-978f-dc21a48afeaf)



Una vez que se realicen los cambios necesarios ; realizamos el Build necesario 

```
$ npm run build
```
Luego Procedemos a subir nuestro archivo al Repositorio 
por medio del Gitbash o algun otro terminal. 

![image](https://github.com/dvd-2008/my-website/assets/128089437/c782c6c7-11b7-4863-a6b5-980f2abfdc64)

Una vez subido el repositorio Procedemos hacer el deploy 


### Deployment

Paso 1 :

```
$ env:GIT_USER = "dvd-2008"; echo $env:GIT_USER
```

Paso 2: 

```
$ npm run deploy
```

te tiene que aparecer de este modo : 

![image](https://github.com/dvd-2008/my-website/assets/128089437/8cac3800-3a6c-455a-b080-e0b893de4d7c)

Listo La pagina ya esta creada : 
  ![image](https://github.com/dvd-2008/my-website/assets/128089437/aec8ba37-8387-470f-a38a-a2a3646c715e)


If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
