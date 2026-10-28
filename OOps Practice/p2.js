let pr=new Promise((res,rej)=>{

    setTimeout(function(){

        let temp=Math.floor(Math.random()*10);

        if (temp>5) res(temp);
        else{rej(temp)}



    },3000);




})

pr.then(function(val){console.log(val,"Accepted")})
.catch(function(val){console.log(val ,"Rejected")});

