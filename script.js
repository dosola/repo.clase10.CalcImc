
function clickBtnCalcular() {
     var peso = document.getElementById("txtPeso").value;
     var estatura = ((document.getElementById("txtEstatura").value/100));

    //•	Validaciones en JavaScript:
    //•	No admitir valores no numéricos, lanzar un mensaje o informar con una etiqueta HTML.
if (isNaN(parseInt(estatura))) {alert('La ESTATURA debe ser numérica');
      return false;
    }  
    
if (isNaN(parseInt(peso))) {alert('El PESO debe ser numérico.');
      return false;
    }  


    
//•	No admitir valores = 0, lanzar un mensaje o informar con una etiqueta HTML.
if (estatura == 0) {alert('La ESTATURA ingresada no puede ser 0 (cero)');
   return false;
}
if (peso == 0) {alert('El PESO ingresado no puede ser 0 (cero)');
   return false;
}


//•	El valor máximo para estatura es 272 centímetros y el mínimo es 10 centímetros, lanzar un mensaje o informar con una etiqueta HTML.
if ((estatura)*100 < 10 || (estatura*100) > 272) {
   alert('Debe ingresar una estatura entre 10 cm. y 272 cm.');
   return false;
}



   //•	El valor máximo para peso es 544kg y el valor mínimo es 2kg, lanzar un mensaje o informar con una etiqueta HTML.
   if (peso < 2 || peso > 544) {
      alert('Debe ingresar un peso entre 2 Kg. y 544 Kg.');
      return false;
   }



   // cálculo del IMC
   var imc = peso / (estatura * estatura);
     document.getElementById("resultado").value = imc.toFixed(2);

     

// Validaciones IF para categorizar el IMC, según el valor del resultado... para sí mostrar la ROW correcta de la tabla.

     if (imc < 18.5 ) {
      document.getElementById('tr1').style.display = 'block';
      document.getElementById('tr2').style.display = 'block';
      document.getElementById('tr3').style.display = 'none';
      document.getElementById('tr4').style.display = 'none';
      document.getElementById('tr5').style.display = 'none';
   }

   if (imc >= 18.5 && imc <= 24.9 ) {
      document.getElementById('tr1').style.display = 'block';
      document.getElementById('tr2').style.display = 'none';
      document.getElementById('tr3').style.display = 'block';
      document.getElementById('tr4').style.display = 'none';
      document.getElementById('tr5').style.display = 'none';
   }

   if (imc >= 25 && imc <= 29.9 ) {
      document.getElementById('tr1').style.display = 'block';
      document.getElementById('tr2').style.display = 'none';
      document.getElementById('tr3').style.display = 'none';
      document.getElementById('tr4').style.display = 'block';
      document.getElementById('tr5').style.display = 'none';
   }

   if (imc >= 30 ) {
      document.getElementById('tr1').style.display = 'block';
      document.getElementById('tr2').style.display = 'none';
      document.getElementById('tr3').style.display = 'none';
      document.getElementById('tr4').style.display = 'none';
      document.getElementById('tr5').style.display = 'block';
   }    


}