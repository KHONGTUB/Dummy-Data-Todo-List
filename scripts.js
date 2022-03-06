
const todos = []

const fetchTodos = () => {
    // fetch('https://reqres.in/api/users')
    fetch('https://jsonplaceholder.typicode.com/todos')

    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
        const number = document.getElementById('number').value
        const ol = document.getElementById('todo-list')
        ol.style.display = 'block'
        let li = document.createElement("LI")
        const jsonstring = JSON.stringify(data[number-1])
        todos.push(data[number-1])
        li.appendChild(document.createTextNode(jsonstring))
        ol.appendChild(li)


    })

}    



const completed = () => {
    clearnotcompleted()
    console.log(todos)
    const ol = document.getElementById('completed')
    ol.style.display = 'block'
    let li = document.createElement("LI")
    for (var i = 0; i < todos.length; i++){
        if (todos[i].completed === true){
            const jsonString = JSON.stringify(todos[i])
            li.appendChild(document.createTextNode(jsonString))
            ol.appendChild(li)
        }
    }
    
}

const notcompleted = () => {
    clearcompleted()
    console.log(todos)
    const ol = document.getElementById('not-completed')
    ol.style.display = 'block'
    let li = document.createElement("LI")
    for (var i = 0; i < todos.length; i++){
        if (todos[i].completed === false){
            const jsonString = JSON.stringify(todos[i])
            li.appendChild(document.createTextNode(jsonString))
            ol.appendChild(li)

        }
    
    }
}

const clearTodos = () => {
    const ol = document.getElementById('todo-list')
    ol.style.display = 'none'
}

const clearcompleted = () => {
    let ol = document.getElementById('completed')
    ol.style.display = 'none'
}

const clearnotcompleted = () => {
    let ol = document.getElementById('not-completed')
    ol.style.display = 'none'
}

let arrayOfTodos = [
    {
        "userID": 14,
        "id": 1,
        "title": "I will not waste chalk.",
        "completed": false,

    },
    {
        "userID": 20,
        "id": 2,
        "title": "this is the second title",
        "completed": true
    }
]




const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    for(let i = 0; i < arrayOfTodos.length; i++){
        const ol = document.getElementById('todo-list')
        let li = document.createElement("LI")
        li.appendChild(document.createTextNode(arrayOfTodos[i].title))
        ol.appendChild(li)
    }
}
