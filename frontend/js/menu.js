(function () {

    const header = document.getElementById("header")
    const btn = document.getElementById("btnMenu")
    btn.addEventListener("click", () =>{
        console.log("hola")
        header.classList.toggle('menu-cerrado');
    })

})()