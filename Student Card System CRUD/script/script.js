let resultWindow = document.querySelector('.resultWindow');
let deleteButton = document.querySelector('.delete');
let userName = document.querySelector('#name');
let surname = document.querySelector('#surname');
let age = document.querySelector('#age');
let about = document.querySelector('#about');
let photo = document.querySelector('#photo');
let sendButton = document.querySelector('.send');
let exampleName = document.querySelector('#exampleName');
let exampleSurname = document.querySelector('#exampleSurname');
let exampleAge = document.querySelector('#exampleAge');
let exampleAbout = document.querySelector('#exampleAbout');
let examplePhoto = document.querySelector('#examplePhoto');
let changeButton = document.querySelector('.change');

// Change options
changeButton.addEventListener('click', function () {
    exampleName.textContent = userName.value;
    exampleSurname.textContent = surname.value;
    exampleAge.textContent = age.value;
    exampleAbout.textContent = about.value;
})

// Delete options
deleteButton.addEventListener('click', function () {
    resultWindow.style.display = 'none';
});

// Send options
sendButton.addEventListener('click', function () {
    exampleName.textContent = userName.value;
    exampleSurname.textContent = surname.value;
    exampleAge.textContent = age.value;
    exampleAbout.textContent = about.value;
    // successful authorization
    alert("Successful authorization!");
    // Field validation
    if (userName.value == '' || surname.value == '' || age.value == '' || about.value == '') {
        alert("Заполните все поля!");
    }
})

// fetch request on server

const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/users'

async function fetchAPIRequest() {
    console.log('Fetch request started...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log("Data:", data)
    } catch (e) {
        console.error(e);
    }
}

fetchAPIRequest()