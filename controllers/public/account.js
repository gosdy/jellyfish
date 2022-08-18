/*
*   Este controlador es de uso general en las páginas web del sitio público.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para establecer la ruta y parámetros de comunicación con la API.
const API = SERVER + 'public/clientes.php?action=';

// Método manejador de eventos que se ejecuta cuando el documento ha cargado.
document.addEventListener('DOMContentLoaded', function () {
    // Petición para determinar si se ha iniciado sesión.
    fetch(API + 'getUser', {
        method: 'get'
    }).then(function (request) {
        // Se verifica si la petición es correcta, de lo contrario se muestra un mensaje en la consola indicando el problema.
        if (request.ok) {
            // Se obtiene la respuesta en formato JSON.
            request.json().then(function (response) {
                // Se define una variable para asignar el encabezado del documento.
                let header = '';
                // Se comprueba si el usuario está autenticado para establecer el encabezado respectivo.
                if (response.session) {
                    header = `
                        <div class="navbar-fixed">
                            <nav class="indigo darken-2">
                                <div class="nav-wrapper">
                                    <a href="index.html" class="brand-logo"><img src="${SERVER}/images/logo.png" height="60"></a>
                                    <a data-target="mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                                    <ul class="right hide-on-med-and-down">
                                    <li><a href="about.html"><i class="material-icons left">info</i>Sobre nosotros</a></li>
                                        <li><a href="index.html"><i class="material-icons left">view_module</i>Catálogo</a></li>
                                        <li><a href="cart.html"><i class="material-icons left">shopping_cart</i>Carrito</a></li>
                                        <li><a onclick="logOut()"><i class="material-icons left">close</i>Cerrar sesión</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <ul class="sidenav indigo darken-2" id="mobile">
                        <li><img src="../../resources/img/jellyfishanimated.gif" width="90%" /></li>
                        <li><a href="about.html"><i class="material-icons left">info</i>Sobre nosotros</a></li>
                            <li><a href="index.html"><i class="material-icons left">view_module</i>Catálogo</a></li>
                            <li><a href="cart.html"><i class="material-icons left">shopping_cart</i>Carrito</a></li>
                            <li><a onclick="logOut()"><i class="material-icons left">close</i>Cerrar sesión</a></li>
                        </ul>
                    `;
                } else {
                    header = `
                        <div class="navbar-fixed">
                            <nav class="indigo darken-2">
                                <div class="nav-wrapper">
                                    <a href="index.html" class="brand-logo"><img src="${SERVER}images/logo.png" height="60"></a>
                                    <a data-target="mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                                    <ul class="right hide-on-med-and-down">
                                    <li><a href="about.html"><i class="material-icons left">info</i>Sobre nosotros</a></li>
                                        <li><a href="index.html"><i class="material-icons left">view_module</i>Catálogo</a></li>
                                        <li><a href="signup.html"><i class="material-icons left">person</i>Crear cuenta</a></li>
                                        <li><a href="login.html"><i class="material-icons left">login</i>Iniciar sesión</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <ul class="sidenav indigo darken-2" id="mobile">
                        <li><img src="../../resources/img/jellyfishanimated.gif" width="90%" /></li>
                        <li><a href="about.html"><i class="material-icons left">info</i>Sobre nosotros</a></li>
                            <li><a href="index.html"><i class="material-icons left">view_module</i>Catálogo</a></li>
                            <li><a href="signup.html"><i class="material-icons left">person</i>Crear cuenta</a></li>
                            <li><a href="login.html"><i class="material-icons left">login</i>Iniciar sesión</a></li>
                        </ul>
                    `;
                }
                // Se asigna a la página web el contenido del encabezado.
                document.querySelector('header').innerHTML = header;
                // Se define el componente Parallax.
                let parallax = `
                    <div class="parallax-container">
                        <div class="parallax">
                            <img id="parallax">
                        </div>
                    </div>
                `;
                // Se asigna el componente Parallax antes de la etiqueta footer.
                document.querySelector('main').insertAdjacentHTML('beforebegin', parallax);
                // Se establece el pie del encabezado.
                const footer = `
                <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Contáctanos</h5>
                        <ul>
                            <a href="mailto:jellyfish@info.com"><span class="material-icons md-light">email</span></a>
                            <a href="tel:+50374686573"><span class="material-icons md-light">call</span></a>
                            </ul>
                        </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Redes sociales</h5>
                        <ul>
                            <li>
                                <a class="grey-text text-lighten-3" href="https://www.instagram.com/" target="_blank"><img class="social" src="../../resources/img/social/instagram2.png" width="20 px" heigth="20px" />Instagram</a>
                                </li>
                            <li>
                                <a class="grey-text text-lighten-3" href="https://www.facebook.com/" target="_blank"><img class="social" src="../../resources/img/social/facebook2.png" width="20 px" heigth="20px" />Facebook</a>
                                </li>
                            <li>
                                <a class="grey-text text-lighten-3" href="https://api.whatsapp.com/send?phone=50374686573" target="_blank"><img class="social" src="../../resources/img/social/whatsapp2.png" width="20 px"heigth="20px" />Whatsapp</a>
                            </li>
                            <li>
                                <a class="grey-text text-lighten-3" href="https://www.twitter.com/" target="_blank"><img class="social" src="../../resources/img/social/twitter2.png" width="20 px" heigth="20px" />Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container white-text">
                    &reg 2022 Jellyfish hardware, todos los derechos reservados "tecnología de calidad en un solo lugar" y el logo son marcas registras de Jellyfish hardware
                </div>
            </div>
                `;
                // Se asigna a la página web el contenido del pie.
                document.querySelector('footer').innerHTML = footer;
                // Se inicializa el componente Sidenav para que funcione la navegación lateral.
                M.Sidenav.init(document.querySelectorAll('.sidenav'));
                // Se declara e inicializa un arreglo con los nombres de las imagenes que se pueden utilizar en el efecto parallax.
                let images = ['img01.jpeg', 'img02.jpg', 'img03.jpg', 'img04.jpg', 'img05.jpg'];
                // Se declara e inicializa una variable para obtener un elemento del arreglo de forma aleatoria.
                let element = Math.floor(Math.random() * images.length);
                // Se asigna la imagen a la etiqueta img por medio del atributo src.
                document.getElementById('parallax').setAttribute('src', '../../resources/img/parallax/' + images[element]);
                // Se inicializa el efecto Parallax.
                M.Parallax.init(document.querySelectorAll('.parallax'));
            });
        } else {
            console.log(request.status + ' ' + request.statusText);
        }
    });
});