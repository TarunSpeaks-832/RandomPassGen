const txt="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";

function GenPass(){
    //console.log("password");
    let password=" ";
    for(let i=0;i<10;i++){
        let charidx=Math.floor(Math.random()*57);
        let charr=txt[charidx];
        password+=charr;
    }
    console.log(password);
    document.getElementById("passlabel").textContent=password;
}