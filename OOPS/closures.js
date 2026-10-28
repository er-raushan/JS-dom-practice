function abcd(){

    let a=10;
    console.log(a)
    return function(){
        a+=5
        console.log(a)

    }

}


// fuckk = function(){
//         a+=5
//         console.log(a)

//     }



let fuckk=abcd()
fuckk();
fuckk();
fuckk();
fuckk();

