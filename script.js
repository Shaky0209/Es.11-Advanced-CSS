/* JS Exercises should go here */

// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

// let element = document.getElementsByClassName("list-unstyled")[1].childNodes[3];
// element.remove();

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

// let object = document.getElementsByClassName("font-weight-bold")[0];
// let father = document.getElementsByClassName("lead mb-0")[0];
// console.log(father);
// object.addEventListener("click", ()=>{father.remove();});

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

// const object1 = document.getElementsByClassName("blog-post-meta")[0].children[0];
// object1.setAttribute("onmouseenter", "false");
// object1.setAttribute("id", "marco");


// const object2 = document.getElementsByClassName("blog-post-meta")[1].children[0];
// object2.setAttribute("onmouseenter", "false");
// object2.setAttribute("id", "iacopo");

// const object3 = document.getElementsByClassName("blog-post-meta")[2].children[0];
// object3.setAttribute("onmouseenter", "false");
// object3.setAttribute("id", "christian");

let first = document.getElementsByClassName("blog-post-meta")[0].childNodes[1];
// let second = document.querySelector("#iacopo");
// let third = document.querySelector("#christian");

// console.log(object1);
// console.log(object2);
// console.log(object3);

const message = ()=>{
    console.log(first.onmouseenter);
    if(first.onmouseenter){
        alert(first.text);
    }
    if(second.onmouseenter){
        alert(second.text);
    }
    if(third.onmouseenter){
        alert(third.text);
    }
    
};

first.addEventListener("mouseover", message);
// second.addEventListener("mouseover", message);
// third.addEventListener("mouseover", message);