var textoInicial = document.querySelector(".textarea1");
var botoncriptografar = document.querySelector("#cifrar");
var botonDescripto = document.querySelector("#decifrar");
var resultadoFinal = document.querySelector(".textarea2");
var copiar = document.querySelector("#boton-copy");
var copiado = document.querySelector("#senhal")


//FUNCION ENCRIPTAR
botoncriptografar.addEventListener("click",function(){
    const frase = textoInicial.value.toLowerCase().replace(/[,.;:?!@#$%¨&*-=_"'()<>`~{}]/gi,"");
    const nuevoTexto = frase.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")//no colocar ";"
    resultadoFinal.textContent = nuevoTexto;
    console.log("encriptar")
})

//FUNCION DESENCRIPTAR
botonDescripto.addEventListener("click",function(){
    const frase = textoInicial.value;
    const nuevoTexto = frase.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")//no colocar ";"
    resultadoFinal.textContent = nuevoTexto;
    console.log("dessencriptar")
})

//COPIANDO AL PORTA PAPELES
copiar.addEventListener("click", e =>{
    resultadoFinal.select();//selecionando el texarea
    document.execCommand("copy"); //copiando el texto
    //copiado.innerHTML="COPIADO"; //cambiando de palabra a copiado
    //setTimeout(()=>copiado.innerHTML="Resultado:", 300);//comando para resetear
    console.log("copiado")
})


//onclick="location.href = location.href"