"use strict"
let todoItems = []

function addTodoItem(todo, newTodoItem){
    let item = newTodoItem
    todo.push(item)
}

function removeTodoItem(todo, id){
    todo.splice(id, 1);
}


function updateTodoItem(todo, id, newTask){
    todo[id] = newTask
}

function getTodoAsHTMLString(todo){
    let items = []
    todo.forEach((element, index) => {
        items.push(`<div class="listItem" data-id="item-${index}">
        <p>${element}</p>
        <i class="far fa-circle"></i>
        <i class="fas fa-trash"></i>
        </div>`
        )  
    })
    return items
}

function addDOM(todo){
    let todoliste = getTodoAsHTMLString(todo)
    let lengthDiv = document.querySelector(".liste").length

    if (lengthDiv !== 0){
        let items = document.querySelectorAll(".liste > div")
        items.forEach(element => {
            document.querySelector(".liste").removeChild(element) 
        })
    }

    todoliste.forEach(element => {
        let div = document.createElement("div")
        div.innerHTML = element
        document.querySelector(".liste").append(div) 
    })
    
}


/* function createToDoItem(taskAsString){
    
    //Création des éléments
    let fragment = document.createRange().createContextualFragment(
        `<div class="listItem" data-item-id='item-${id}'>
            <p>${taskAsString}</p>
            <i class="far fa-circle"></i>
            <i class="fas fa-trash delete hide"></i>
        </div>`
    )

    id++
    
    document.querySelector(".liste").append(fragment)
}

function getToDoItem(id){
    return document.querySelector(`[data-item-id="item-${id}"]`)
}

function deleteToDoItem(id){
    let item = getToDoItem(id)
    item.remove()
}

function updateToDoItem(id, newTaskAsString){
    let item = getToDoItem(id)
    item.firstElementChild.innerHTML = newTaskAsString
} */
