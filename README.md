# Rich Text Editor
 Box de texto enriquecido para insertar en tus proyectos de forma rápida y sencilla, solo incluyendo cuatro archivos puedes usar esta herramienta para almacenar noticias, productos, reseñas, testimonios, o cualquier cosa que se te ocurra, ya que es simple en la instalación pero de gran ayuda cuando estas desarrollando aplicaciones robustas

 ## Requisitos
 Solo debes incluir en la cabecera de tu html el archivo de estilos y el de fontawesome. Y antes de cerrar tu html incluir el archivo app.js

 Con solo incluir 3 archivos, ya tienes el sistema listo para ser integrado a cualquier sistema.


## Instalación
 Colocar dentro de tu head
    <!--estilos de fontawesome para los botones-->
    <link href="assest/fontawesome/css/fontawesome.css" rel="stylesheet">
    <link href="assest/fontawesome/css/brands.css" rel="stylesheet">
    <link href="assest/fontawesome/css/solid.css" rel="stylesheet">
    <!--estilos propios del contenedor-->
    <link rel="stylesheet" href="assest/styles/styles.css">

En tu body o dentro de tu formulario:
<div id="editor"></div>

y antes de la etiqueta de cierre:
<script src="assest/js/app.js"></script>

## como visualizar el contenido
Puedes crear una función para tratar los datos que recopilas del editor de texto, aquí un ejemplo:

<button id="enviar" class="btnenviar" onclick="grabar()">Grabar</button>

<script>
function grabar(){

const contenidodiv = document.getElementById("contenido");
const contenido = contenidodiv.innerHTML;
console.log(contenido);

}
</script>


## Opciones
### Estilos
* (B) = Negrita (Predeterminado: (Booleano :Desactivado)) Le da estilo negrita al texto
* (I) = Cursiva (Predeterminado: (Booleano :Desactivado)) Le da estilo cursiva al texto
* (U) = Subrayado (Predeterminado: (Booleano :Desactivado)) Le da estilo subrayado al texto
* (X<sup>1</sup>) = Superindice (Predeterminado: (Booleano :Desactivado)) Le da estilo superindice al texto
* (X<sub>1</sub>) = Subindice (Predeterminado: (Booleano :Desactivado)) Le da estilo subindice al texto

### Alineación
* Alineación a la izquierda
* Alineación al centro
* Alineación a la derecha
* Justificado

### Listas
* Numeradas
* Con estilo

### Acciones
* Deshacer
* Rehacer

### Vinculos
* Insertar vinculo
* Eliminar vinculo

### Imagen
* Insertar Imagen

### Espaciado
* Agregar Sangria
* Eliminar Sangria

### Formatos de titulos
* H1 al H6 genera los formatos correspondientes

### Fuente
* Opciones: Arial, Verdana, Times New Roman, Tahoma

### Tamaño
* Cambia el tamaño de la fuente

### Color 
* Color del texto

### Bg
* Color del fondo del texto



 
