import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const textarea = document.querySelector('.textarea--js');
const save = document.querySelector('.save--js');
const load = document.querySelector('.load--js');


const currnentValue = localStorage.getItem('entry');

if (currnentValue){
    document.querySelector('.info--js').innerHTML = 'ℹ';
}



save.addEventListener('click',(e)=> {
     e.preventDefault();
     localStorage.setItem('entry', textarea.value);
     if (textarea.value){
      document.querySelector('.info--js').innerHTML = 'ℹ';
      }  else{
      document.querySelector('.info--js').innerHTML = '';

      }
})

load.addEventListener('click',(e)=> {
     e.preventDefault();
     textarea.value = localStorage.getItem('entry');
})
