let butSend = document.getElementsByClassName('button-add')[0]
let inp = document.getElementsByClassName('input-name')[0];
let listAmigo = document.getElementsByClassName('result-list')[0];
let nombre = document.getElementsByClassName('nombre-lista');
let buttonDraw = document.getElementsByClassName('button-draw')[0];







butSend.addEventListener('click', (e)=>{
 e.preventDefault()
 let amigo = document.createElement('li'); // Crear un elemento <li>
 amigo.className = 'nombre-lista'
 amigo.textContent = inp.value; // Asignar el texto ingresado en el input
 listAmigo.appendChild(amigo); // Agregar el <li> a la lista
  
})


buttonDraw.addEventListener('click', (e)=>{
 e.preventDefault();
 if (nombre.length > 0) {
  if ((nombre.length % 2) == 0 ) {
   alert('se puede')
  } else (
   alert('para que se pueda hacer el sorteo la cantidad de participantes debe ser par')
  )
 } else {
  alert('ingresa los nombres para hacer el emparejamiento')
 }
})