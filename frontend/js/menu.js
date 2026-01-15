(function () {

    const header = document.getElementById("header")
    const btn = document.getElementById("btnMenu")
    btn.addEventListener("click", () =>{
        header.classList.toggle('menu-cerrado');
    })

})()