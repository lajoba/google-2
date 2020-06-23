function enviar(){
    envio = document.getElementById('input-correo').value;
    document.getElementById('correo-2').textContent = envio;
}

document.getElementById('btn-form').onclick = function(){
    enviar()
}