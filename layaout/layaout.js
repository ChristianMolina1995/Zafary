
const btnHome = document.querySelector('#btnHome');
const btnWhatzApp = document.querySelector('#btnWhatzApp');
const btnZpotify = document.querySelector('#btnZpotify');


const dinamico = document.querySelector('#CargaPagina');

const nomPag = document.querySelector('#nombre-pagina');


btnHome.addEventListener('click',cargarHome);
btnWhatzApp.addEventListener('click',cargarWhatzApp);
btnZpotify.addEventListener('click',cargarZpotify);



function cargarHome(){

  dinamico.setAttribute('src','../home/index.html');
  nomPag.innerHTML = 'Home'
  
}

function cargarWhatzApp(){
    
    dinamico.setAttribute('src','../WhatzApp/index.html');
    nomPag.innerHTML = 'WhatzApp'
   
}

function cargarZpotify(){
    
    dinamico.setAttribute('src','../zpotifi/index.html');
    nomPag.innerHTML = 'Zpotify'
}

   

