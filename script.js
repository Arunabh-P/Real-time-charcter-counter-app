const textareaElement = document.getElementById("textarea")

const totalCounterElement = document.getElementById("tot-counter")

const remainingCounterElement = document.getElementById("rem-counter")

textareaElement.addEventListener("keyup",()=>{
    updateCounter()
})

updateCounter()

function updateCounter(){
   totalCounterElement.innerText = textareaElement.value.length

   remainingCounterElement.innerText = textareaElement.getAttribute("maxlength") - textareaElement.value.length;
}

