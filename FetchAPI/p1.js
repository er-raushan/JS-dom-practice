fetch("https://randomuser.me/api/?results=5")
  .then((rawdata) => {
    return rawdata.json();
  })
  .then((data) => {
    // users = data.results[0].name;

    let nm = data.results;

    // document.body.append(document.createElement("br"))

    console.log();

    nm.forEach((val) => {
      // console.log(val.name);
      // console.log(val);


      let h1 = document.createElement("h1");
      h1.textContent = val.name.first +" "+ val.name.last;

      h1.classList.add("card");
      document.body.append(document.createElement("br"));

      document.body.append(h1);
    });
  })
  .catch((err) => {
    console.log(err);
  });
