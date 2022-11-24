// create  the blueprint for object
function Coder( first, last, age, title) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.title = title;
}

function createNewobject(event) {
    event.preventDefault();
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const age =  document.getElementById('age').value;
    const title =  document.getElementById('title').value;


    const newCoder = new Coder(firstName, lastName, age, title);

    element.innerHTML = `
    <p>${newCoder.lastName}</p>
    <p>${newCoder.lastName}</p>
    <p>${newCoder.lastName}</p>
    <p>${newCoder.lastName}</p>
    `;     
}

const element = document.querySelector('.box');

