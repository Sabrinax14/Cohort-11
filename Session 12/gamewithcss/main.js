const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
 state = {}
 showTextNode(1)
}

function showTextNode (textNodeIndex) {
 const textNode = textNodes.find(textNode => textNode.id ===
 textNodeIndex)
 textElement.innerText = textNode.text 
 while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
 }
 
 textNode.options.forEach(option => {
  if (showOption(option)) {
  const button = document.createElement('button')
  button.innerText = option.text
  button.classList.add('btn')
  button.addEventListener('click', () => selectOption(option))
  optionButtonsElement.appendChild(button)
  }
 })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeID = option.nextText
  if (nextTextNodeID <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeID)
}

const textNodes = [
    {
        id: 1,
        text: ' Welcome to your first day back! You have just come down to the Geat hall for breaskfeast.Headmaster has announced that all class for today has been suspend.A teacher has been murdered! Professor Trelawney body was found the caretaker this morning.Headmaster has warned everyone to stay away form the North tower and to return back to their houses after breakfeast. What do you do..? ',

       options: [
        {
            text: 'Sneak out of the the Great Hall with your friends to solve the murder?',
            setState: {sneakOut: true},
            nextText: 2
        },
        {
            text: 'Be a GOOD student and listen to the headmaster?',
            nextText: 2.2     
        }
       ]  
    },
    {
        id: 2,
        text: 'You are sneaking down the corridor with friends trying, not to get caugth.....And you can see one of the teachers, coming towards. Do you?',
        
        options: [
            {
                text: 'hide in a small and dark boom closet?',
                requiredState: (currentState) => currentState.sneakOut,
                setState: { sneakOut: false, hide: true },
                nextText: 3
            },
            { text: 'run for it, hoping you do not get caught?',
              nextText: 4 
            }
        ]
    },
    {
        id: 2.2,
        text: 'Well Done! You are boring and do not like solving mysterious at all!!Enjoy being safe and sound in your dorm room! ',
        options: [
            {
                text: 'try again?',
                nextText:1
            }
        ]
    },
    {
        id: 3,
        text: 'Congratulations! You did NOT get caught by Scary Snape.After, waiting for few minutates in the small and dark closet. You make your way up to the murder scene.Professor Trelwaney room is a mess. Do you..',
        options: [
            {
                text: 'use a spell to reveal clues?',
                nextText: 5
            },
            {
                text:'go back to your dorm room because you had enough?',
                nextText: 2.2
            }
        ]
    },
    {
        id: 4,
        text: 'GAME OVER!!!!! You have been caought by Professor Snape.You have FAILED your mission and will be cleaning the potion classroom for the rest of the day.',
        options: [
           { 
             text:' Accept your fate?🥱',
               nextText: 2.2
           },
           {
            text: 'Sneak out after Professor Snape has gone into his office? 🤗',
            nextText: 3

           }

        ]
    },
    {
        id: 5, 
        text: 'An Essential Clue Has Been Revealed..The expose charm used by you, shows that professor Trelwaney has been killed by one of other professors.Hidden underneath one of the desk is a familiar looking wand that MOST likely belongs to the suspect.Who can the killer be? Do you.. ?',
        options: [
            {
                text: 'go to professor lounge and continue your mission?',
                nextText: 6
            },
            {
                text: 'go back to dorm room and give up?',
                nextText: 2.2
            }
        ]
    },
    {
        id: 6, 
        text: ' You are extremly tired after spending the whole first day exploring castle for clues, you come across a big and angry troll thats caused serious bodily harm!',
        options: [
            { 
                text: 'Restart',
                nextText: -1
            }
        ]
    }
]

startGame()