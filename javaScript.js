function encriptarTexto() {
   //Declaramos el Array con las palabras de las vocales encriptadas
    let palabraOriginal = document.getElementById('inputPalabra').value;
    const palabras = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    
   

    // Itera sobre las palabras y verifica si están presentes en el texto
    for (const palabra in palabras) {
        if (palabraOriginal.includes(palabra)) {

            palabraOriginal = palabraOriginal.replace(new RegExp(palabra, 'g'), palabras[palabra]);
         alert("Texto ya encriptado"); 
return;
        }
    }
    

    //Comprobamos que se haya ingresado un texto para ser encriptado, en caso de que no se aborte la funcion
      if(palabraOriginal === ""){
        document.getElementById("inputPalabra").focus();
        ocultarInformacion();
        return;
    
        }
     //Declaramos el Array con las vocales Encriptadas
    const vocalesEncritadas = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    const palabraMin = palabraOriginal.toLowerCase();
    let palabraEncriptada = '';

    //Hacemos un Bucle para divir y volver a unir para el proceso de encriptado
    for (let i = 0; i < palabraMin.length; i++) {
        const letra = palabraMin[i];
        const reemplazo = palabraMin ? vocalesEncritadas[letra] : letra;
        palabraEncriptada += reemplazo || letra;
    }

    // Mostrar el resultado en el párrafo
    const resultadoParrafo = document.getElementById('traduccion');
    console.log(resultadoParrafo);
    resultadoParrafo.value  = palabraEncriptada;
    console.log(palabraEncriptada);
    //Llamamos a la funcion que mostrara U ocultara los elementos no necesarios
    ocultarInformacion();

}





function desencriptarTexto() {
  
   const palabraOriginal = document.getElementById('inputPalabra').value;
  //Comprobamos que se haya ingresado un texto para ser desencriptado, en caso de que no se aborte la funcion
   if(palabraOriginal === ""){
    ocultarInformacion();

return;

}


    const vocalesOriginales = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    const palabraMin = palabraOriginal.toLowerCase();
    let palabraDesencriptada = '';
    let i = 0;


   //Hacemos un Bucle para divir y volver a unir para el proceso de desencriptado 
    while (i < palabraMin.length) {
        let found = false;
        for (const encriptada in vocalesOriginales) {
            if (palabraMin.startsWith(encriptada, i)) {
                palabraDesencriptada += vocalesOriginales[encriptada];
                i += encriptada.length;
                found = true;
                break;
            }
        }
        if (!found) {
            palabraDesencriptada += palabraMin[i];
            i++;
        }
    }

    // Mostrar el resultado en el párrafo
    const resultadoParrafo = document.getElementById('traduccion');
    console.log(resultadoParrafo);
    resultadoParrafo.value = palabraDesencriptada;
    console.log(palabraDesencriptada); 
    
    //Llamamos a la funcion que mostrara U ocultara los elementos no necesarios
   ocultarInformacion();

}

//Funcion que oculta o muestra los elementos necesarios en cada proceso
function ocultarInformacion() {

        const imagen = document.getElementById("imgencriptacion");
        const mensaje = document.getElementById("labelAvisoDos");
        const aviso = document.getElementById("labelAviso");
        const palabraEncriptada = document.getElementById("traduccion");
        const btnCopiar = document.getElementById("btncopiarTexto");
        const textIngresado = document.getElementById('inputPalabra').value;
  //Validamos que el campo de busqueda tenga informacion para que muestre el parrafo donde estara el resultado  
        if (textIngresado != "") {
            imagen.style.display = "none";
            mensaje.style.display = "none";
            aviso.style.display = "none";
            palabraEncriptada.style.display = "block";
            btnCopiar.style.display = "block";
          
        } else{
            imagen.style.display = "block";
            mensaje.style.display = "block";
            aviso.style.display = "block";
            palabraEncriptada.style.display = "none";
            btnCopiar.style.display = "none";
            document.getElementById('traduccion').value = "";
        }

        document.getElementById('inputPalabra').value = "";
        document.getElementById("inputPalabra").focus();
    }
    
   
//Funcion que efectua el copiado del texto en el parrafo
   function copiarAlPortapapeles() {
        var texto = document.getElementById("traduccion").value;
        var aux = document.createElement("input");
        aux.setAttribute("value", texto);
        document.body.appendChild(aux);
        aux.select();
        //Declaramos un metodo de controlador de errores, para evitar que deje de funcionar en otro caso que pase.
        try {
            navigator.clipboard.writeText(texto);
            alert("Texto copiado al portapapeles");
        } catch (err) {
            console.error("Error al copiar al portapapeles: ", err);
        } finally {
            document.body.removeChild(aux);
        }
    }

  
