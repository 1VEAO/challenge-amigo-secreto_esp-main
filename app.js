// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let but = document.getElementsByClassName('button-add')[0];
let inp = document.getElementsByClassName('input-name')[0];
let listAmigo = document.getElementsByClassName('result-list')[0];
let nombre = document.getElementsByClassName('nombre-lista');


const agregarAmigo = (e) => {
  let amigo = document.createElement('li'); // Crear un elemento <li>
  amigo.className = 'nombre-lista'
  amigo.textContent = inp.value; // Asignar el texto ingresado en el input
  listAmigo.appendChild(amigo); // Agregar el <li> a la lista
};

const sortearAmigo = ()=>{
 let listSort = []
 for (let index = 0; index < nombre.length; index++) {
  listSort.push(nombre[index].textContent)
 }
 let nomSort = Math.floor(Math.random()*listSort.length)
 
 alert(listSort[nomSort])

}


