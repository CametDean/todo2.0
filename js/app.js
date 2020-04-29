"use strict"

document.addEventListener("DOMContentLoaded", function(){

    let liste = document.querySelector(".liste");
    let iPlus = document.querySelector('.plus');
    let input = document.querySelector("input")
    let numItem = 0

    function toDoItemsInStore(){
        return localStorage.length
    }

    function getToDoItems(todoItemId){
        return localStorage.getItems(todoItemId)
    }

    function storeItem(todoItemId){
        return localStorage.setItem(todoItemId)
    }
    

    document.querySelector("body").addEventListener("click", function(e){
        e.stopPropagation()
        let target = e.target

        if (target === iPlus){
            iPlus.classList.toggle("fa-plus");
            iPlus.classList.toggle("fa-check");
            iPlus.classList.toggle("creaItem");
            input.toggleAttribute("hidden");
            
            if (input.value !== ""){
                let newItem = createItem(input.value, numItem)
                liste.append(newItem)
                input.value = ""
                numItem++
            }
        }

        let items = document.querySelectorAll(`[data-item]`)
        items.forEach(item => {
            let itemChildren = item.childNodes

            switch (target) {
                case itemChildren[1]:
                    itemChildren[0].classList.toggle("done")
                    validatedCircle(itemChildren[1])
                    showTrash(itemChildren[2])
                    break;

                case itemChildren[2]:
                    item.remove()
                    break;
            
                default:
                    break;
            }
        })
    })


    document.querySelector("body").addEventListener("mouseenter", function(e){
        e.stopPropagation()
        let target = e.target

        let items = document.querySelectorAll(`[data-item]`)
        items.forEach(item => {
            let itemChildren = item.childNodes

            switch (target) {
                case itemChildren[0]:
                    itemChildren[0].style.cursor = "pointer"
                
                    itemChildren[2].classList.remove("hide")
                    itemChildren[2].classList.remove("fa-trash")
                    itemChildren[2].classList.remove("delete")
                    itemChildren[2].classList.add("update")
                    itemChildren[2].classList.add("fa-pencil-alt")
                        break;

                case itemChildren[1]:
                    itemChildren[1].style.cursor = "pointer"
                        break;

                case itemChildren[2]:
                    itemChildren[2].style.cursor = "pointer"
                        break;
                default:
                    break;
            }
        })
    })

    document.querySelector("body").addEventListener("mouseleave", function(e){
        e.stopPropagation()
        let target = e.target

        let items = document.querySelectorAll(`[data-item]`)
        items.forEach(item => {
            let itemChildren = item.childNodes

            switch (target) {
                case itemChildren[0]:
                    itemChildren[0].style.cursor = "pointer"
                
                    itemChildren[2].classList.add("hide")
                    itemChildren[2].classList.add("fa-trash")
                    itemChildren[2].classList.add("delete")
                    itemChildren[2].classList.remove("update")
                    itemChildren[2].classList.remove("fa-pencil-alt")
                        break;

                case itemChildren[1]:
                    itemChildren[1].style.cursor = "pointer"
                        break;

                case itemChildren[2]:
                    itemChildren[2].style.cursor = "pointer"
                        break;
                default:
                    break;
            }
        })
    })
})