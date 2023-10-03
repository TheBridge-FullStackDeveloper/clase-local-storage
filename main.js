// localStorage.setItem("name","Vero")//almaceno información
// // localStorage.name = "Lu"
// localStorage.setItem("surname","Polegre")

// let firstName = localStorage.getItem("name")//recupero la información
// // console.log(firstName)

// let lastName = localStorage.getItem("surname")
// // console.log(lastName)

// // localStorage.removeItem('name')

// // localStorage.clear()

// // for(let i=0; i<localStorage.length; i++) {
// //     let key = localStorage.key(i);
// //     console.log(`${key}: ${localStorage.getItem(key)}`);
// //   }

// const person ={
//     name:"Lu",
//     surname:"Boasso"
// }

// //convertimos en string el objeto y guardamos en local storage
// localStorage.setItem("person",JSON.stringify(person))

// //nos traemos el objeto y lo convertimos otra vez a JS
// const personSaved= JSON.parse(localStorage.getItem("person"))

// console.log(personSaved)

// let personajesAnime = ['Levi', 'Mikasa', 'Zoro', 'Luffy', 'Tanjiro', 'Nezuko'];

// // localStorage.setItem("anime", JSON.stringify(personajesAnime));
// localStorage.anime = JSON.stringify(personajesAnime)
// let data = JSON.parse(localStorage.getItem("anime"));

// console.log("Mi array", data);

//*PRÁCTICA
const btn = document.getElementById("btn");
const firstName = document.getElementById("firstName");
const pText = document.getElementById("text");

function saveName(e) {
  e.preventDefault(); //quita los eventos por defecto
  console.log(firstName.value); //consoleamos valor del input
  //guardamos valor del input en el localStorage
  localStorage.setItem("firstName", firstName.value);

  //Recoger información del localStorage
  const firstNameSaved = localStorage.getItem("firstName");
  //Pintar en un parrafo esa información
  pText.innerHTML = firstNameSaved;
}

btn.addEventListener("click", saveName);
