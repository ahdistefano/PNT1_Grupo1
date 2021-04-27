function getProductos(tipoProducto) {
    var seccion = document.getElementById('seccion');

    seccion.innerHTML = ""; // Vacía el elemento "seccion" cada vez que se ejecuta el script

    var productos = new Array();

    if (tipoProducto == "pantalones") {
        productos[0] = new Array("images/indumentaria/rider.jpg", "Rider", "Pantalón térmico de hombre Rider", "$3.237");
        productos[1] = new Array("images/indumentaria/abot.jpg", "Abot", "Pantalón hombre", "$5.607");
        productos[2] = new Array("images/indumentaria/PreSki.jpg", "Pre Ski Pro", "Pantalón de hombre", "$13.141");
        productos[3] = new Array("images/indumentaria/SherpaBase.jpg", "Sherpa Base", "Pantalón de hombre desmontable", "$7.836");
    }

    if (tipoProducto == "camperas") {
        productos[0] = new Array("images/indumentaria/Krypton.jpg", "Krypton", "Campera de hombre", "$18.837");
        productos[1] = new Array("images/indumentaria/Conor.jpg", "Conor", "Campera de hombre de micro polar", "$5.650");
        productos[2] = new Array("images/indumentaria/Livy.jpg", "Livy", "Campera de mujer", "$35.835");
        productos[3] = new Array("images/indumentaria/Malik.jpg", "Malik", "Campera de mujer", "$37.054");
        productos[4] = new Array("images/indumentaria/Charm.jpg", "Charm", "Campera de mujer", "$7.666");
    }

    if (tipoProducto == "mochilas") {
        productos[0] = new Array("images/indumentaria/Luxon.jpg", "Luxon", "Mochila 50 lts.", "$22.505");
        productos[1] = new Array("images/indumentaria/Hanckok.jpg", "Hanckok", "Mochila 40 lts.", "$16.834");
    }

    if (tipoProducto == "calzado") {
        productos[0] = new Array("images/indumentaria/UltraLight.jpg", "Ultra Light", "Zapatillas de running de hombre", "$10.799");
        productos[1] = new Array("images/indumentaria/winter.jpg", "Winter", "Botas de hombre", "$15.514");
        productos[2] = new Array("images/indumentaria/Makalu.jpg", "Makalu M3", "Zapatillas de mujer", "$11.299");
        productos[3] = new Array("images/indumentaria/Arne.jpg", "Arne", "Botas de mujer", "$15.749");
    }

    if (tipoProducto == "camping") {
        productos[0] = new Array("images/indumentaria/irazu.jpg", "Irazú New 6 personas", "Carpa iglú", "$27.224");
        productos[1] = new Array("images/indumentaria/Aconcagua.jpg", "Aconcagua New", "Bolsa de dormir", "$11.510");
        productos[2] = new Array("images/indumentaria/matera.jpg", "Matera", "Matera", "$2.768");
        productos[3] = new Array("images/indumentaria/termo.jpg", "Termo 1 lt.", "Termo", "$5.878");
    }


    //Guardar los elementos de la tabla.
    for (i = 0; i < productos.length; i++) {

        var articulo = document.createElement('ARTICLE');
        var encabezado = document.createElement('HEADER');
        var image = new Image(250, 250);

        image.src = productos[i][0];    //Asignar imagen para el primer elemento del array

        encabezado.appendChild(image);
        encabezado.appendChild(document.createElement('BR'));

        for (j = 1; j < productos[i].length; j++) {
            var label = document.createElement('LABEL');

            if (j == 1) {   //Si es el elemento 1 del array, poner el label en negrita
                var b = encabezado.appendChild(document.createElement('B'));
                b.appendChild(document.createTextNode(productos[i][j]));
            }
            else {
                label.appendChild(document.createTextNode(productos[i][j]));
            }


            encabezado.appendChild(label).className = "itemIndumentaria";
            encabezado.appendChild(document.createElement('BR'));

            articulo.appendChild(encabezado);
        }

        seccion.appendChild(articulo);
    }
}