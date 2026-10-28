function CreateCopy(name,price,subject,pages){
    this.name=name;
    this.price=price;
    this.subject=subject;
    this.pages=pages;
}

let copy1=new CreateCopy("Doms",20,"Hindi",55)
let copy2=new CreateCopy("ClassMate",55,"English",100)
let copy3=new CreateCopy("SchoolMate",100,"Maths",200)

console.log(copy1)
console.log(copy2)
console.log(copy3)