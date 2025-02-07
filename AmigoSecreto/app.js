// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


function ActualizarListaAmigos(){
    //obtine elemento de la lista
    const lista = document.getElementById('listaAmigos');
    //limpia linea existente
    lista.innerHTML = "";

    //iterar sobre el arreglo amigos y agregar cada nombre
    for (let i = 0; i < listaAmigos.length; i++){
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }

}
//agregra nuevo amigo al arreglo
function agregarAmigo(){
    let Amigos =  document.getElementById('amigo').value;
    console.log(Amigos);  

    if (Amigos == ''){  //si la caja está vacía
        alert('"Por favor, inserte un nombre."');
    // verificar si el nombre ya existe en la lista
    }else if(listaAmigos.includes(Amigos)){ 
        alert('El nombre ya está en la lista');

    // agregar el nombre al arreglo
    }else{
        listaAmigos.push(Amigos);
        ActualizarListaAmigos();
    }
    console.log(listaAmigos);
    limpiarCaja();

}
//limpiamos la caja donde se escribe el nombre 
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){

    if (listaAmigos == ''){
        alert ('La lista está vacía');
    }

// indice aleatorio
const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
// amigo sorteado
const amigoSorteado = listaAmigos[indiceAleatorio];   

//mostramos resultado
const resultadoElemento= document.getElementById("resultado");
resultadoElemento.innerHTML = `El amigo sorteado es: <strong> ${amigoSorteado}</strong>`;

}