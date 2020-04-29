"use strict"
let id = 0

function createToDoItem(taskAsString){
    
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
}

function validatedCircle(iconeCircle){
    iconeCircle.classList.toggle("fa-circle");
    iconeCircle.classList.toggle("fa-check-circle");
    iconeCircle.classList.toggle("validated")
}

function showTrash(iconeTrash){
    iconeTrash.classList.toggle("hide");
}