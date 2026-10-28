let h3=document.querySelector("#device")
let sel =document.querySelector("select")

sel.addEventListener("change",(e)=>{
    console.log(e.target.value)
    h3.textContent=`${e.target.value} is Selected`

})