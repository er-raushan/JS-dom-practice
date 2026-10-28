let grow=document.querySelector("#grow");
let progress=document.querySelector("#progress");
let bar=document.querySelector("#bar");
let count=0


let tm=setInterval(function(){

    
    if(count<=100){
        
        console.log(count);
        bar.style.width=count+'%';
        grow.textContent=count+'%';
    

        
    }
    
    else{
        clearInterval(tm)
    }
    count=count+10;





},10000/10)