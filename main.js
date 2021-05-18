// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de récupération de contenu text, mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


let body = document.getElementsByTagName("body")[0];
// ### 1. Affiche le contenu textuel du second h1
console.log(body.getElementsByTagName('h1')[1].textContent);
// ### 2. Affiche le contenu textuel du dernier li
console.log(body.getElementsByTagName('ul')[0].lastElementChild.textContent);
// ### 3. Affiche le contenu textuel du premier p en majuscule
console.log(body.getElementsByTagName('p')[0].textContent.toUpperCase());
// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule
let ul = body.getElementsByTagName('ul')[0];
let li = ul.getElementsByTagName('li')
console.log(li);
let arr = Object.values(li)
console.log(arr);
arr.forEach(e => {
    console.log(e.innerText.toUpperCase());
});

console.log(ul.querySelectorAll('li'));