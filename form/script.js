let form = document.querySelector("form");
let inp = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("dp");

  let img = document.createElement("img");
  img.setAttribute(
    "src",
    e.srcElement[3].value,
  );
  img.classList.add("imgdp");

  let nm = document.createElement("h3");
  nm.textContent = e.srcElement[0].value;

  let bio = document.createElement("h5");
  bio.textContent = e.srcElement[1].value;

  let para = document.createElement("p");
  para.textContent = e.srcElement[2].value;

  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(nm);

  card.appendChild(bio);
  card.appendChild(para);

  main.appendChild(card);

  console.log(e.srcElement[0].value);
});
