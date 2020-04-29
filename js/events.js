"use strict"

let iPlus = document.querySelector('.plus')
let input = document.querySelector("input")
let iPlusMode = iPlus.getAttribute("data-mode")


document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("body").addEventListener("click", function(e){
        e.stopPropagation()
        let target = e.target
        
        if (target === iPlus){
            iPlus.classList.toggle("fa-plus");
            iPlus.classList.toggle("fa-check");
            iPlus.classList.toggle("creaItem");
            input.toggleAttribute("hidden");
            
            if (input.value !== ""){
                createToDoItem(input.value)
                input.value = ""
            }
        }      
        
    })

})