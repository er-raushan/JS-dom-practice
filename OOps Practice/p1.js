// class User {
//   constructor(name, username, id) {
//     this.name = name;
//     this.username = username;
//     this.id = id;
//     this.role = "user";
//   }
//   write(text) {
//     let div = document.createElement("div");
//     let h3 = document.createElement("h3");
    

//     h3.textContent = `${this.role}: ${this.name} - ${text} `;
    

//     div.append(h3);
//     // div.append(p);
//     document.body.append(div);
//   }
// }


// class Admin extends User{
//     constructor(name, username){
//         super(name,username)
//         this.role="Admin"
//     }
//     remove(){
//         document.querySelectorAll("div").forEach(function(e){
//             e.remove()
//         })

//     }
// }

// let u1 = new User("Raushan", "raushan.22507", 45);
// let u2 = new User("Ankita", "ankita07", 98);
// let u3 = new User("Eshika", "esha34", 34);

// let a1 =new Admin("BOSS", "boss hu",55);
// let a2 =new Admin("Papa", "sbka baap ek",568);




// u1.write("Hey is me");
// u3.write("Hey guys this is me");
// u2.write("Hey guys this is true taht this is created by Me");

// a1.write("ka beta kya kr rhe ho")

// a2.write("baap to baap howe hai")


//  a1.remove()

