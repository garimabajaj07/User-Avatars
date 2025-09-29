const addUser = document.querySelector('.plus')
const userDivs = document.querySelector('.add-user-mainDiv')
const addInitials = document.querySelector('.add-initials')
const popupBox = document.querySelector('.popup-box')
const cancelUser = document.querySelectorAll('.cancelUser')
const confirmUser = document.querySelector('.confirmUser')
const nameInput = document.querySelector('#enterName')
const removeUser = document.querySelector('.remove-user')
const confirmDelete = document.querySelector('.confirmDelete')
let darkColors = ["#1B3C53", "#37353E", "#0D1164", "#640D5F", "#18230F", "#9e0404ff"]
let lightColors = ["#ccd3c0ff", "#D2C1B6", "#EF88AD", "#EBD3F8", "#edb9c2ff", "#fff9"]
let currentCircleDelted = null //to store the particular circle to delte
//click on plus to add new user details
addUser.addEventListener('click', addNewUser)
function addNewUser() {
    popupBox.style.display = 'block'
    if (popupBox.style.display == 'block') {
        userDivs.style.display = 'none'
    }
}
//click on confirm to create pop up and get the initial
confirmUser.addEventListener('click', confirmNewUser)
function confirmNewUser() {

    popupBox.style.display = 'none'
    userDivs.style.display = 'flex'

    //to create user circle
    let newDiv = document.createElement('div')
    newDiv.classList.add('plus')
    newDiv.id = 'user-' + Date.now() //giving unique id to every circleDiv
    newDiv.style.position = 'relative'

    //cross to remove circle
    let crossDiv = document.createElement('div')
    crossDiv.classList.add('cross')
    crossDiv.textContent = 'x'

    //getting the initial
    let initial = document.createElement('span');
    let nameInputValue = nameInput.value.trim()
    if (nameInputValue === "") {
        alert("Please enter a name")
        return
    }
    for (let i = 0; i < nameInputValue.length; i++) {
        initial.textContent = nameInputValue[0]
    }

    newDiv.appendChild(crossDiv)
    newDiv.appendChild(initial)
    userDivs.append(newDiv)

    //reset input
    nameInput.value = ""

    getRandomColor()

    //to give random colors to text and background
    function getRandomColor() {
        let darkColorIndex = Math.floor(Math.random() * darkColors.length)
        let lightColorIndex = Math.floor(Math.random() * lightColors.length)

        let darkRandomColor = darkColors[darkColorIndex]
        let lightRandomColor = lightColors[lightColorIndex]

        newDiv.style.color = darkRandomColor
        newDiv.style.backgroundColor = lightRandomColor

    }
    //delete user
    crossDiv.addEventListener('click', deleteUser)

    function deleteUser() {
        removeUser.style.display = 'block'
        if (removeUser.style.display == 'block') {
            userDivs.style.display = 'none'
        }
        currentDeleteCircle = newDiv // remember which one

    }


    confirmDelete.addEventListener('click', removeTheUser)
    function removeTheUser() {
        if (currentDeleteCircle != null) {
            currentDeleteCircle.remove()
            currentDeleteCircle = null
        }
        removeUser.style.display = 'none'
        userDivs.style.display = 'flex'

    }


    //do nothing on cancel or cross button
    for (let i = 0; i < cancelUser.length; i++) {

        cancelUser[i].addEventListener('click', cancelAction)
        function cancelAction() {
            popupBox.style.display = 'none'
            removeUser.style.display = 'none'
            userDivs.style.display = 'flex'
        }
    }
}
