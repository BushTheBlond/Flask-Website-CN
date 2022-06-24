

// java script is seen as the brain out of the three languages of html, css and js
// basic syntax : data types, dot notation, variables, if statements, functions, etc
// camelCase - js uses camelCase ------ also uses ` "else if" instead of "elif"


function funcExample () {
    console.log("Hello World");
}


let my_name = "Chris"               //mutable

const my_last_name = "Scanlan"      //immutable

if (my_name === "Chris") {
    console.log(`Hello, ${my_name}!`)
} else {
    console.log("You're not Chris!")
}

funcExample()

function reallyGoodFunction (num1, num2) {
    let result = num1 + num2;
    return result;
};

function taskHider () {
    let element = document.getElementById("task-box")
    element.classList.toggle("hidden")
};

// function dateHider () {
//     let element = document.getElementById("date-hide")
//     element.classList.toggle("hidden")
// };

// function darkMode () {
//     let element = document.getElementById("base-body")
//     element.classList.toggle("dark-mode")
// }



const date = Date()

function displayDate(id) {
    document.getElementById("date").innerHTML= Date();
}






stateCheck()
function stateCheck() {
    // console.log(`Page loading ${state}!!`)
    let element = document.body;
    let button = document.getElementsByTagName("button", "nav", "my-name");
    let title = document.getElementsByTagName("h1, h2");
    let state = localStorage.getItem("state")
    if (state !== 'dark') {
        element.className = "light-mode";
        title.className = "light-mode";
        button.className = "light-mode";
        console.log(state)
    } else if (state === "dark") {
        element.className = "dark-mode";
        title.className = "dark-mode";
        button.className = "dark-mode";
        console.log(state)
    }
}


function darkMode() {
    let state = localStorage.getItem("state")
    let element = document.body;
    let button = document.getElementsByTagName("button", "nav", "my-name");
    let title = document.getElementsByTagName("h1, h2");
    if (state !== 'dark') {
        element.className = "dark-mode";
        title.className = "dark-mode";
        button.className = "dark-mode";
        localStorage.setItem("state", "dark")
        console.log(state)
    } else if (state === 'dark') {
        element.className = "light-mode";
        title.className = "light-mode";
        button.className = "light-mode";
        localStorage.setItem("state", "light")
        console.log(state)
    }
}













// 
// 
// document
// |
// root element: <html>
// |
// |-----element: <head>
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 