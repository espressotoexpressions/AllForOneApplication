let oddOrEvenInput=document.getElementById("oddOrEvenInput");
let oddEvenSubmitBtn =document.getElementById("oddEvenSubmitBtn");
let oddEvenOutput=document.getElementById("oddEvenOutput");


oddEvenSubmitBtn.addEventListener('click', async ()=>{
    let input = oddOrEvenInput.value;

    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/AddOrEven/OddOrEven/"+input);
    const data =await promise.text();

    oddEvenOutput.value = data;
})