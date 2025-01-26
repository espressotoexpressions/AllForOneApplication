let  magic8BallInput = document.getElementById("magic8BallInput");
let magic8BallOutput = document.getElementById("magic8BallOutput");
let magic8BallSubmitBtn = document.getElementById("magic8BallSubmitBtn");

magic8BallSubmitBtn.addEventListener('click',async()=>{
    const inputStr =magic8BallInput.value;
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/MagicEightBall/GetAnswer/"+inputStr);
    const data = await promise.text();

    magic8BallOutput.value= data;
})