function Headlines(color,bgcolor){

    this.color=color;
    this.bgcolor=bgcolor;

}
Headlines.prototype.write=function(text){
    let h1=document.createElement("h1");
    h1.textContent=text;
    h1.style.backgroundColor=this.bgcolor;
    h1.style.color=this.color;
    document.body.append(h1);

}

let first=new Headlines("red","green");
let Second=new Headlines("white","grey");
let third=new Headlines("black","yellow");

console.log(first)

first.write("hey bhaii log")
Second.write("samay samapt hua")
third.write("fffgfhghh  erretrtr ")