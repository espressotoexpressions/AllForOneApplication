

/*SayHello Elements*/
let nameInput = document.getElementById("nameInput");
let sayHelloMsg = document.getElementById("sayHelloMsg");


btnSayHello.addEventListener('click', async ()=>{
    console.log("ENTER EVENT");
    let name = nameInput.value;
    console.log(name);
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/SayHello/SayHello/"+name);
    const data = await promise.text();
    console.log(data);
    sayHelloMsg.innerText = data;
    sayHelloMsg.classList.remove("inactive");
})


 

 