//Variables 
const formulario = document.querySelector('#formulario');
const listTwts = document.querySelector('#lista-tweets');
let tweets = [];

//Event Listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}




//Funciones
function agregarTweet(e){
   e.preventDefault();
   
   const tweet = document.querySelector('#tweet').value;
   if(tweet === ''){
      mostrarError('No puede ir vacio el Tweet');
      return;
   }

   //Añadir Tweet

   const tweetObj = {
   id: Date.now(), 
   tweet
   }
   tweets = [...tweets, tweetObj];

   crearHTML();

   formulario.reset();

}

function mostrarError(error){
  const mensajeError = document.createElement('P');
  mensajeError.textContent = error; 
  mensajeError.classList.add('error');

  const contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);

  setTimeout(() => {
    mensajeError.remove();
  }, 1800);
}


//Muestra listado de Tweets

function crearHTML(){
    limpiarHTML();
    if(tweets.length > 0){
        tweets.forEach(tweet => {
           const li = document.createElement('li');
           li.innerText = tweet.tweet; 
           listTwts.appendChild(li);
        });
    }
}

function limpiarHTML(){
    while(listTwts.firstChild){
     listTwts.removeChild(listTwts.firstChild);
    }
} 
