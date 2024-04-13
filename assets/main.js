function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var btnInicio = document.getElementById("button-begin");
    btnInicio.addEventListener("click", scrollToTop);
  });
  
  // Asociar la funcionalidad al botón Guardar
  document.addEventListener("DOMContentLoaded", function() {
    var btnGuardar = document.getElementById("submit-button");
    btnGuardar.addEventListener("click", function() {
      var username = document.getElementById("text").value;
      var password = document.getElementById("password").value;
      
  
      almacenarUsuario(username, password);
    });
  });

