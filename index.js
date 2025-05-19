let button=document.querySelectorAll(".box");
button.forEach(box =>{
    box.addEventListener("click",()=>{
    // box.style.backgroundColor="red";
    box.style.border="solid"
    box.style.backgroundImage = "url('https://m.media-amazon.com/images/I/71NQ8HuXTmL._AC_UF1000,1000_QL80_.jpg')";
    box.style.backgroundSize = "cover";     
    box.style.backgroundPosition = "center";
    box.style.backgroundRepet = "no-repet";

    })
})





