



<p align="center">
# Manual de instalación 
</p>
<p align="center">
Linux | Valet 
</p>
<p align="right">
###### facturaloperu.com 

###### 2019 

</p>

Si desea implementar sobre un servidor local Linux “desde cero” debe:
-         Contar con acceso root
-        Instalar php 7.2 y todas las librerías requeridas por el aplicativo y Laravel
-         Instalar Mysql, si lo desea PhpMyAdmin para hacer las primeras pruebas de base de datos
-         Instalar Git, Curl, Composer
 
Ubuntu no cuenta con la versión 7.2 de php de manera nativa por lo que se debe seguir un par de pasos para agregar un repositorio y luego proceder con la instalación, ellos son

Para poder ejecutar los siguientes comandos debe acceder a la terminal como usuario root.
-         apt-get update
Para poder agregar un PPA, ejecute los siguientes:
-         apt-get install software-properties-common
-         apt-get install python-software-properties
Para agregar el PPA, en algunos casos solicitará confirmar con enter
-         add-apt-repository ppa:ondrej/php
-         apt-get update

Procedemos a Instalar PHP, aunque se instalar algunas librerías junto con PHP, se agregan para asegurar la instalación
-         apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt

Instalamos Mysql, phpmyadmin opcional
-         apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin
Se le solicitara contraseña dos veces, con su confirmación, tanto para mysql como para phpmyadmin
nstalamos Curl y Git
-         apt-get install git
-         apt-get install curl
 
Luego se procede a instalar Composer
-         apt-get install composer
 
Dar permisos de lectura y escritura a la carpeta composer
-         Chmod –R 777 ~/.composer
 
Instalar librerias cpriego de Valet
-         composer global require cpriego/valet-linux

Ir a carpeta home /.profile y añadir la siguiente linea al final del documento y guardar
-         Nano ~/.profile
-         PATH= “HOME/.composer/vendor/bin:$PATH”

Luego ejecutar en terminal: source ~/.profile
 
Instalar las siguientes librerías
-          apt install network-maneger libnss3-tools jq xsel
Ya en este punto el sistema se encuentra listo para instalar Valet pero antes debe asegurarse de tener libre el puerto :80 
- Si tienes instalado apache en tu sistema debes detenerlo para liberar el puerto.
 
Detener servicios de apache2 si lo tienes instalado.
-         services apache2 stop
Valet trabaja con el servidor de nginx por lo cual debe instalarse previamente antes de instalar Valet.
-         Apt install nginx
Verificar que el servidor de nginx se está ejecutando correctamente
-         Systemctl status nginx

 
Si todo está ok instalar valet
-         Valet install

Con valet podemos tener nuestro código en cualquier parte del sistema en este caso usaremos la carpeta home para instalarlo.
-         Mkdir ~/code
-         cd code
-         valet park

Ya en este punto tenemos todo listo para clonar el repositorio y ejecutarlo. Una vez ubicado en /code con la herramienta git, si ya se le ha compartido acceso a repositorio ejecute lo siguiente:

git clone https://gitlab.com/b.mendoza/facturadorpro3.git
 
Esto creará una carpeta llamada facturadorpro3, luego de la descarga puede entrar en la carpeta con cd facturadorpro3, dentro de ella puede ejecutar lo siguiente para configurar el archivo .env
-         cp .env.example .env

Donde APP_URL_BASE corresponde a su dominio, DB_DATABASE será el nombre que le de a la base de datos principal, DB_USERNAME y DB_PASSWORD equivalen al usuario creado anteriormente en la instalación de mysql.

 
Seguidamente:
-         php artisan key:generate
-         composer dump-autoload
 
Luego deberá registrar la base de datos mediante phpmyadmin, accediendo a la ruta sudominio.com/phpmyadmin con el usuario root y contraseña agregada en la instalación.
 
Si todo marcha bien es hora de agregar los paquetes faltantes en el proyecto y ejecutar las migraciones.
-         composer install
-         php artisan migrate --seed
 
Puede verificar actualizando phpmyadmin, en la lista de la izquierda se mostrará la base de datos creada y la derecha las tablas generadas.
 
Con estos pasos podrá observar el aplicativo en su dominio, en algunos casos si tiene problemas para observar el aplicativo puede deberse a los permisos en las carpetas del proyecto, principalmente storage y cache requieren el siguiente comando
-         chmod -R 755 storage
-         chmod -R 755 bootstrap/cache
 
También es necesario ejecutar el siguiente comando para establecer la ruta de los archivos cargados de la empresa
-         php artisan storage:link
 
Si todo se realizó correctamente, ya tendrá las tablas del usuario principal creadas, y podrá acceder mediante la web, al proyecto.
Accesos:
-         Facturadorpro3.test
-         usuario: admin@gmail.com
contraseña: 123456













