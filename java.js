function mostrar(){
    document.getElementById('input-pass').type = 'text';
    document.getElementById('ojo').style.display ="none";
    document.getElementById('ojo2').style.display ="block";
    isOpen = false;
}


function ocultar(){
    document.getElementById('input-pass').type = 'password';
    document.getElementById('ojo').style.display ="block";
    document.getElementById('ojo2').style.display ="none";
    isOpen = true;
}

var isOpen = false;

var btn = document.getElementById('ojo');

btn.addEventListener('click', function() {
  if (isOpen) {
    mostrar();  
  } else {
    ocultar();
  }
}, false);

var btn = document.getElementById('ojo2');

btn.addEventListener('click', function() {
  if (isOpen) {
    mostrar();  
  } else {
    ocultar();
  }
}, false);