document.addEventListener("DOMContentLoaded",function(){
    iniciar()
})


const iniciar = ()=>{
   crearGaleria()
}

const crearGaleria=()=>{

         for (let i = 1; i <=26; i++) {
            const galeria = document.querySelector(".galeria")
            const imagen = document.createElement("picture")
            imagen.innerHTML=`<img src="img/imagen${i}.jpg" alt="">`

            imagen.onclick=function(){
                mostrarImagen(i)
            }
            galeria.appendChild(imagen)
            
         }
      
    }

const mostrarImagen = (id)=>{
    const imagen = document.createElement("picture")
        //imagen.innerHTML= `<source srcset = "/img/imagen${i}.jpg" type="image/jpg">`
        imagen.innerHTML= ` <img src="imagesG/imagen${id}.jpg" alt="">`
    const overlay = document.createElement("DIV")
    overlay.appendChild(imagen)
    overlay.classList.add("overlay")
    overlay.onclick=function(){
        const body=document.querySelector("body")
        body.classList.remove("fijar-body")
        overlay.remove()
    }

    const cerrarModal = document.createElement("p")
    cerrarModal.innerHTML="X"
    cerrarModal.classList.add("boton-cerrar")
    cerrarModal.onclick= function(){
        const body=document.querySelector("body")
        body.classList.remove("fijar-body")
        overlay.remove()
    }



    overlay.appendChild(cerrarModal)
    const body=document.querySelector("body")
    body.appendChild(overlay)
    body.classList.add("fijar-body")
}

const contacto = document.getElementById("contacto")
contacto.addEventListener("click", function(){
    swal("MORELOS #610 colonia la purisima san luis de la paz juanphernandez2016@outlook.com", " Telefono: 468 129 0074");

})

