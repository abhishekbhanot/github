let but=document.querySelector("button");
let col=document.querySelector("html");
col.addEventListener("click",()=>{
    col.style.backgroundColor="green";
})

let headiing=document.querySelector("h1");
but.addEventListener("click",()=>{
    let myName=prompt("enter your name")
    headiing.textContent=`hello welcome to our github page  , ${myName}`

    })