// Función para encriptar el texto
function encriptar() {
    var texto = document.getElementById("input_text").value.toLowerCase();
    // Reemplazar las vocales según los requisitos
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    
    mostrar_texto(texto)
  }
  
  // Función para desencriptar el texto
  function desencriptar() {
    var texto = document.getElementById("input_text").value.toLowerCase();
    
    // Reemplazar las palabras encriptadas por las vocales originales
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    
    mostrar_texto(texto)
  }

  function mostrar_texto(texto) {
    document.getElementById("imagen_output").style.display = "none";
    document.getElementById("ph_text").style.display = "none";
    document.getElementById("copy_button").style.display = "block";
    document.getElementById("text_result").innerHTML = texto;
  }
  

  function copiar() {
    var contenido = document.getElementById("text_result").value;
    navigator.clipboard.writeText(contenido)
      .then(function() {
        alert("Texto copiado al portapapeles.");
      })
      .catch(function(error) {
        console.error("Error al copiar el texto: ", error);
      });
  }
      
