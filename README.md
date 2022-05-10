# Mi-primer-desafio-alura-LATAM-
Encriptador de texto con JavaScript

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Desafio Alura 1: CRIPTO</title>
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="cripto.css">
        <link href="https://fonts.googleapis.com/css2? family=Macondo&display=swap" rel="stylesheet">

    </head>
    <body class="cuerpo">
        <header class="encabezado">
            <h1 class="titulo">CRIPTO</h1>
        </header>

        <main class="formularios">
            <form class="caja">
               
                 
                <label for="string-input" id="senhal" class="label"></label>
                <textarea id="string-input" class="textarea1" placeholder="Escriba su texto aqui"></textarea>   
                <div class="botones">
                    <button type="button" class="boton1" id="cifrar">Encriptar</button>
                    <button type="button" class="boton2" id="decifrar">Desencriptar</button>
                </div>      
            </form>
    
            <form class="textoSalida">
                <label for="mensaje" id="senhal" class="label"></label>
                <textarea id="mensaje" class="textarea2" readonly placeholder="Mensaje"></textarea> 
                <div class="boton"> 
                    <button type="button" class="copy" id="boton-copy">Copiar</button>
                </div>
            </form>

            <script src="cripto.js"></script>
        </main>

        <footer>
            <p class="piePagina">Estudiante del Instrucor: Chistian Velasco "alura LATAM", alumno Marco Enrique Aucaruri, 32 años, Peruano.</p>
            <p class="piePagina">&copy Copyright Marco Aucaruri - 2022</p>

        </footer>
    </body>
</html>
