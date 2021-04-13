document.write(`
    <!-- Barra superior con promos -->
    <div id="barrasuperior"> <b>3, 6 y 12 cuotas sin interés</b> en productos de fabricación nacional en toda la WEB y en locales adheridos</div>

    <!--Título principal-->
    <h1 id="topHeader">Montanita</h1>


    <!-- Nueva Barra de Navegación con menú desplegable: -->
    <div id="barraNavegacion" class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="nav">
            <li style="margin-right:15px"><a href="index.html">Inicio</a></li>
            <li style="margin-right:15px"><a href="empresa.html" target="_blank">Empresa</a></li>
            <li style="margin-right:15px">
                <a href="indumentaria.html" target="_blank">Indumentaria</a>
                <ul>
                    <li><a href="indumentaria.html">Camperas</a></li>
                    <li><a href="indumentaria.html">Pantalones</a></li>
                    <li><a href="indumentaria.html">Mochila</a></li>
                    <li><a href="indumentaria.html">Calzado</a></li>
                    <li><a href="indumentaria.html">Camping</a></li>
                </ul>
            <li style="margin-right:15px"><a href="contacto.html" target="_blank">Contacto</a></li>
        </ul>

    </div>


<style>
    ul, ol {
        list-style: none;
    }

    .nav li a {
        width: 50px;
        text-decoration: none;
        display: inline;
    }

        .nav li a:hover {
            background-color: darkgrey;
        }

    .nav > li {
        float: left;
    }

    .nav li ul {
        display: none;
        position: relative;
    }

    .nav li:hover > ul {
        display: block;
    }
</style>


`
);