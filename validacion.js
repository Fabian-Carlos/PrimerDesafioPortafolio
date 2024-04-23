document.getElementById('formulario').addEventListener('input', function() {
  var name = document.getElementById('nombre').value;

  var email = document.getElementById('correo').value;

  var subject = document.getElementById('asunto').value;

  var message = document.getElementById('mensaje').value;

  var submitBtn = document.getElementById('enviar');
  
  document.querySelectorAll('.form-group').forEach(function(group) {
    var input = group.querySelector('input, textarea');
    var small = group.querySelector('small');
 console.log(input);
    if(input.value === '' ||  input.value.length > 50) {
      small.classList.remove('hidden');
    } else {
      small.classList.add('hidden');
    }
   
  });

var mensaje=document.getElementById('mensaje');
var mensajeSmall = mensaje.nextElementSibling;
if(mensaje.value===''|| mensaje.value.length>300){
  
  mensajeSmall.classList.remove('hidden');
}else{
  mensajeSmall.classList.add('hidden');
}


  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var emailSmall = document.getElementById('correo').nextElementSibling;
  if(!emailRegex.test(email)) {
    emailSmall.classList.remove('hidden');
  } else {
    emailSmall.classList.add('hidden');
  }

  submitBtn.disabled = !name || name.length > 50 || !emailRegex.test(email) || !subject || subject.length > 50 || !message || message.length > 300;
});


