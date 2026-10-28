let form = document.querySelector("form");
let input=document.querySelectorAll("input")
let root=document.querySelector("#root")
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let newel=document.createElement("div")
  let nm=document.createElement("h3")
  let proff=document.createElement("p")
  let about=document.createElement("p")
  let pimg=document.createElement("div")
  let img=document.createElement("img")

  newel.classList.add("poster");
  nm.textContent=input[0].value
   proff.textContent=input[1].value
    about.textContent=input[2].value
     img.setAttribute("src",input[3].value)
   

     pimg.classList.add("profile")
     pimg.append(img)

     newel.append(pimg)
     newel.append(nm)
     newel.append(proff)
     newel.append(about)

     root.append(newel)

     










console.log(pimg)
console.log(input)

});


