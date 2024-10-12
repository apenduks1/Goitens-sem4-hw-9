//Створити сторінку з списком задач (todo list) і можливістю їх відмічення як виконані. Завдання повинні зберігатися в localStorage, щоб при наступному відкритті сторінки вони залишалися в списку з відповідним статусом (виконані / невиконані).

const list = document.querySelectorAll('.list')

const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')
const result3 = document.querySelector('.result3')

const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
localStorage.setItem("result", "Виконано")
const result = localStorage.getItem("result")
if (input1 === true){
    result1.textContent = result
}

if (input2 === true){
    result2.textContent = result
}

if (input2 === true){
    result3.textContent = result
}


//Створіть просту форму з полями вводу і кнопкою, яка зберігає дані в localStorage. При наступному завантаженні сторінки зчитайте збережені дані з localStorage та відобразіть їх у відповідних полях вводу.

const name  = document.querySelector(".name")
const age = document.querySelector(".age")

const btnSave = document.querySelector(".btnSave")

btnSave.addEventListener("click", function () {
    localStorage.setItem("name", name.value)
    localStorage.setItem("age", age.value)
})

//Створіть "закладки" — список посилань на важливі сторінки. Додавайте, видаляйте та редагуйте посилання в списку, зберігайте його в localStorage, щоб він залишався між сесіями.

const addLink = document.querySelector(".addLink");
const addName = document.querySelector(".addName");
const add = document.querySelector(".add")
const resultAdd = document.querySelector(".addResult");

add.addEventListener("click",() => {
    const link = addLink.value
    const name = addName.value
    localStorage.setItem(`link-${name}`, link)
    resultAdd.textContent = `Посилання "${name}" додано!`
    addLink.value = ""
    addName.value = ""
})



const delLink = document.querySelector(".addLink");
const delName = document.querySelector(".addName");
const del = document.querySelector(".add")
const resultDel = document.querySelector(".addResult");

add.addEventListener("click",() => {
    const link = delLink.value
    const name = delName.value
    localStorage.setItem(`link-${name}`, link)
    resultDel.textContent = `Посилання "${name}" додано!`
    delLink.value = ""
    delName.value = ""
})




const fixLink = document.querySelector(".addLink");
const fixName = document.querySelector(".addName");
const fix = document.querySelector(".add")
const resultFix = document.querySelector(".addResult");

add.addEventListener("click",() => {
    const link = fixLink.value
    const name = fixName.value
    localStorage.setItem(`link-${name}`, link)
    resultFix.textContent = `Посилання "${name}" додано!`
    fixLink.value = ""
    fixName.value = ""
})

//Створіть програму для зберігання контактів — ім'я, прізвище, телефон та електронна адреса. Зберігайте контакти в localStorage та дозволяйте користувачу додавати, видаляти та редагувати контакти.

function saveToLocalStorage (){
    alert("Якщо ви нічого не ведете то ваші дані не зміняться у іншому випадку зміняться. У разі якщо ви перший раз на цьому сайті введіть дані які будуть просити. Ми закріпимо їх за вами")
    const name = prompt("What is your name?");
    if (name === "" ) {
        
    } else{
        localStorage.setItem("name", name);
    }
    const serName = prompt("What is your servername?");
    if (serName === "" ) {

    } else {
        localStorage.setItem("serName", serName);
    }
    const  phone = prompt("What is your phone number?")
    if (phone === "" ) {

    } else {
        localStorage.setItem("phone", phone);
    }
    const email = prompt("What is your email?");
   if ( email === ""){

   }else {
    localStorage.setItem("email", email);
   }

}