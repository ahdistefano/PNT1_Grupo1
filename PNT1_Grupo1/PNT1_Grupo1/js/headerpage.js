document.write(`
    
    <div id="fijadoSuperior">
    <!-- Barra superior con promos -->
    <div id="barrasuperior">    
    <b>3, 6 y 12 cuotas sin interés</b> en productos de fabricación nacional en toda la WEB y en locales adheridos
    <a href="login.html" id="enlaceLogin">LOGIN</a>
    </div>
    

    <!--Título principal-->
    <h1 id="topHeader">Montanita</p>

</div>


    <nav id="menu_gral">
      <ul>
        <li><a href="index.html">Inicio</a></li>  
        <li><a href="indumentaria.html">Indumentaria</a>
            <ul>
                <li><a href="indumentaria.html">Camperas</a></li>
                <li><a href="indumentaria.html">Pantalones</a></li>
                <li><a href="indumentaria.html">Mochila</a></li>
                <li><a href="indumentaria.html">Calzado</a></li>
                <li><a href="indumentaria.html">Camping</a></li>
            </ul>
        </li>
        <li><a href="empresa.html" target="_blank">Empresa</a></li>
        <li><a href="contacto.html" target="_blank">Contacto</a></li>
        <li><a href="#" target="_blank">Pais</a>
            <ul>
                <li><a href="#"><div>ARGENTINA</div><img src="images/index/iconoArgentina.png" /></a></li>
                <li><a href="#"><div>URUGUAY</div><img src="images/index/iconoUruguay.png" /></a></li>
            </ul>
        </li>   
      </ul>
    </nav>
  
    </div>

<style>

#fijadoSuperior {
    position: sticky;
    top:0;
    z-index:+100;
}
* {
    margin: 0;
    padding: 0;
    border: o none;
   /* position: relative;*/
}
#menu_gral {
    font-family: verdana, sans sherif;
    width: 80%;
    margin: 1.5rem auto;
}
#menu_gral ul {
    list-style-type: none; /*Se retira la viñeta que por defecto tienen los elementos de una lista.*/
    text-align: center;
    font-size: 0;
}
#menu_gral > ul li {   /*selector de hijo directo (>) para evitar que sus propiedades sean heredadas por los li de segundo nivel (las opciones que se desplegarán).*/
    display: inline-block;
    width: 20%; /*Son cuatro botones, así que cada uno al 25% (de su padre)*/
    position: relative; /* Relative para que el desplegable se coloque respecto a él.*/
    background: none; /*COLOR RELLENO BOTONES DE LA BARRA*/
}
#menu_gral li a { 
    display: block;
    text-decoration: none; /*Se quita el subrayado propio de los ENLACES.*/
    font-size: 1.5rem; /*Tamaño fuente letras BARRA*/
    line-height: 2.5rem; /*Altura del hover de la BARRA.*/
    color: black; /*Color LETRAS BARRA en estado de reposo*/
}
#menu_gral li:hover a, #menu_gral li a:focus { 
    background: gray;  /*COLOR RELLENO DE BOTONES DE LA BARRA AL HACER HOVER*/
    color: #fff;  /*COLOR DE TODAS LAS LETRAS (barra y desplegable) AL HACER HOVER*/
}
#menu_gral li ul {
    position: absolute; /*Absolute, evitará movimientos en el resto de elementos que haya después del menú al mostrarse esta lista.*/
    width: 0;
    overflow: hidden;
}
#menu_gral li:hover ul, #menu_gral li:focus ul {  
    width: 100%; /*Ancho del desplegable hacia la derecha*/
    margin: 0 ;
    padding: 0 ;    
    z-index: 5;
}
#menu_gral li li {
    display: block;
    width: 100%;
}
#menu_gral li:hover li a, #menu_gral li:focus li a {
    display: block;
    font-family: verdana, sans sherif;
    font-size: 1rem; /*Tamaño fuente texto del DESPLEGABLE*/
    line-height: 2rem;
    border-top: 1px solid #e5e5e5;
    background: gray;
}
#menu_gral li li a:hover, #menu_gral li li a:focus {
    background: #8AA9B8; 
}

</style>

`
);