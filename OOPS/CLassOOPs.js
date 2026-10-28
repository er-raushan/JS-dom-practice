class User {
  constructor(name, state, role, username, email) {
    this.name = name;
    this.state = state;
    this.role = role;
    this.username = username;

    this.email = email;
  }
  writepost(text){
    let h1=document.createElement("h1");
    h1.textContent=`${this.name} is from ${this.state} and has role is ${this.role} ${text}`;

    document.body.append(h1)



  }
}

let f=new User("raushan","bihar","playyer","aa","asss");
f.writepost("sigma hu bhaiii");
