(function (){
    "use strict"


    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro =  document.querySelector(".formCadastro")

    formCadastro.addEventListener("submit", function(e){
        console.log(txtTitulo.value)
        if(!txtTitulo.value){
            alert("Preencha todos os campos")
            e.preventDefault()
            txtTitulo.focus()
        }
    })

    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
   mostrarNumero(maxima)

    //contadorContainer.remove("style")
    contadorContainer.style.display = "block"

    function checkLength(){
        let numeroLetrasDigitadas =  this.value.Length
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
   
        mostrarNumero(caractersRestantes)
 
     }

     function mostrarNumero(n){
        resta.textContent = n
     }

    txtDescricao.addEventListener("input",  checkLength)

    btn.disabled = true

    const chkAceito = document.getElementById("chkAceito")
    chkAceito.addEventListener("change", function(){
        btn.disabled = !this.checked
    })
})()