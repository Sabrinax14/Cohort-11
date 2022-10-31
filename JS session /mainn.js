let myArray = [
    'crisp',
    'apples',
    'cheese',
    'peppers',
    'sweets',
    'cake',
    'leeks'
]

// if ()  {} // possible usage if user signed in go to this page else go - consition is set or to met this 
if (myArray.includes('cake')) {
    console.log('yippee I can eat cake' )
} else {
    console.log ("happy no veg found")
}

if (myArray.includes('apples')) {
    alert('you have already got this item')
} else {
  alert('add this item to myArray')
}

if (myArray.includes('lemons')) {
    console.log ('Happy days!!')
} else {
    alert ('Add lemons to your shopping list silly!')
}

// if () {} else if () {} else if () {}


// loops
// if i = -1 item not found, if i !== item not found , id i = positive number item found

function loop() {
 for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i], i);
    if (myArray[i].indexOf('veg') !== -1) {
        console.log( "i found veg yuck")
    } else if (myArray[i].indexOf('veg') === -1) {
        console.log('i found no veg')
    }
 }
} 
 
loop()


// let start potision index to search for = 0

// create a number functions to 

function numberSort() {
    let number = Math.floor(Math.random() * 100);

    console.log(number);

    if (number % 2 === 0) {
        console.log(number, "even");
    } else {
        console.log("odd", number);
    }
}
numberSort()

var myNumberArray = [ 
    "23",
    "10",
    "17", 
    "28",
    "65",
    "77",
    "9", 
    "12",
    "3",
    "12"
];



myArray.pop()


function mySnackPicker() {
        let number = math.floor(math.random()* VideoColorSpace.lenght)
    
      let foodToEat = myArray[math.randon() * myArray.length]
      console.log(foodToEat)
    }


const color = [
   "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "pirple"
]

function colorChanger() {
    let box = document.getElementById('backgroundChange')
    let color = color[Math.floor(Math.random()* color.lenght)]
    box.style.backgroundColor = color
    box.style.height = '50rem'
    box.style.width = '36rem'
}

colorChanger();