let txt = document.getElementById("txt");
let btn = document.getElementById("btn");
let ul = document.getElementById('list');
let shoppingList = [];

btn.addEventListener('click', addValue);

function addValue() {
    let item = txt.value;

    if (shoppingList.includes(item)) {
        alert("Item has already been added!")
    } else {
        console.log(item)
        shoppingList.push(item)
    }
    txt.value = "";
    
    let output = "";

    for (i = 0; i < shoppingList.length; i++) {
      output += "<li>" + shoppingList[i] + "</li>"
    }
    console.log(output);
    list.innerHTML = output
}