const task = document.querySelectorAll(".task") ; 
task.forEach((e) => {
    e.addEventListener("click" , (event) => {
    e.classList.toggle("activeTask") ; 
    })
})
const tabs = document.querySelectorAll(".tab") ; 
tabs.forEach((e) => {
    e.addEventListener("click" , (event) => {
        tabs.forEach((e) => {
            e.classList.remove("active__tab") ; 
        })
        e.classList.add("active__tab") ; 
        
    })
})
