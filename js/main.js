

(function() {
    "use strict";

    let regalo = document.querySelector('#regalo');
    document.addEventListener('DOMContentLoaded', function(){


        console.log('Listo el pollo');

      //CAMPOS DATOS USUARIOS
    
      let nombre = document.querySelector('#nombre');
      let apellido = document.querySelector('#apellido');
      let email = document.querySelector('#email');


      //CAMPOS PASES

      let paseDia = document.querySelector('#pase_dia');
      let paseCompleto = document.querySelector('#pase_completo');
      let paseDosDias = document.querySelector('#pase_dosDias');

      //BOTONES Y DIVS 

      let calcular  = document.querySelector('#calcular');
      let errorDiv  = document.querySelector('#error');
      let botonRegistro  = document.querySelector('#boton-registro');
      let resultado  = document.querySelector('#Lista-productos');
      let sumaTotal  = document.querySelector('#suma-total');

      //--------------------------------------------------

      calcular.addEventListener('click', calcularMontos);

      function calcularMontos(event){
          event.preventDefault();
          if(regalo.value === '') {
              alert('Debes elegir un regalo');
              regalo.focus();
          } else {

            let boletosDia = paseDia.value,
                boletosCompletos = paseCompleto.value,
                boletosDosDias = paseDosDias.value;
            
            let totalAPagar = (boletosDia * 30) + (boletosCompletos * 50) + (boletosDosDias * 45);


                console.log(`$${totalAPagar}`);
          }
      }

    }); //DOM CONTENT LOADED


})();
