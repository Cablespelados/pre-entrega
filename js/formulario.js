//declaramos una variable y la vinculamos al botón Enviar y Limpiar
//para que al hacer click en ellos se ejecuten las funciones correspondientes

let btnEnviar = document.getElementById('enviar');
let btnLimpiar = document.getElementById('limpiar');

btnLimpiar.addEventListener('click', limpiarForm);
btnEnviar.addEventListener('click', mostrarMensaje);

//función que se ejecuta al hacer click en el botón Enviar

function mostrarMensaje(evt) {
  evt.preventDefault();

//declaramos variables para almacenar los datos de cada campo

  let txtNombre = document.getElementById('nombre').value;
  let txtApellido = document.getElementById('apellido').value;
  let edad = parseInt(document.getElementById('edad').value);
  let mensajeUsuario = document.getElementById('mensajeUsuario').value;

  // Mostrar el mensaje en un div diferente al textarea

  let salida = document.getElementById('mensajeSalida');
  if (!salida) {
    // Si no existe, lo crea (opcional)
    salida = document.createElement('div');
    salida.id = 'mensajeSalida';
    document.getElementById('formulario').appendChild(salida);
  }

  salida.innerText = "Bienvenido/a " + txtNombre + " " + txtApellido + ", eres ";
  if (edad > 17 && edad <= 100) {
    salida.innerText += " mayor. Te contactaré pronto! Tu mensaje: " + mensajeUsuario;
  } else if (edad > 100) {
    salida.innerText += " un fantasma o un veterano del heavy en español? Tu mensaje: " + mensajeUsuario;
  } else {
    salida.innerText += " menor. Lo siento, no puedo contactarte. Tu mensaje: " + mensajeUsuario;
  }
}

function limpiarForm(evt) {
  evt.preventDefault();
  document.getElementById('formulario').reset();
  let salida = document.getElementById('mensajeSalida');
  if (salida) salida.innerText = '';
}