let butSend = document.getElementsByClassName('button-add')[0]
let inp = document.getElementsByClassName('input-name')[0];
let listAmigo = document.getElementsByClassName('name-list')[0];
let resultList = document.getElementsByClassName('result-list')[0];
let nombrelista = document.getElementsByClassName('nombre-lista');
let nombreEleccion = document.getElementsByClassName('nombre-eleccion');
let buttonDraw = document.getElementsByClassName('button-draw')[0];


let list1 = []





butSend.addEventListener('click', (e)=>{
 e.preventDefault()
 while (nombreEleccion.length > 0) {
  nombreEleccion[0].parentNode.removeChild(nombreEleccion[0]); // Elimina el primer elemento hasta que no quede ninguno
 }
 if (inp.value != '') {
  let amigo = document.createElement('li'); // Crear un elemento <li>
 amigo.className = 'nombre-lista'
 amigo.textContent = inp.value; // Asignar el texto ingresado en el input
 list1.push(inp.value)
 listAmigo.appendChild(amigo); // Agregar el <li> a la lista
 inp.value = ''
 } else {
  alert('debes ingresar un nombre correcto')
 }
})


buttonDraw.addEventListener('click', (e)=>{
 e.preventDefault();
 if (nombrelista.length > 0) {
  
   while (nombrelista.length > 0) {
    nombrelista[0].parentNode.removeChild(nombrelista[0]); // Elimina el primer elemento hasta que no quede ninguno
   }
   let nomSort = Math.floor(Math.random()*list1.length)
   let amigo = document.createElement('li');
   amigo.className = 'nombre-eleccion';
   amigo.textContent = `tu amigo secreto es ${list1[nomSort]}`;
   resultList.appendChild(amigo)
   list1 = []
  
 } else {
  alert('ingresa los nombres para hacer el emparejamiento')
 }
})




