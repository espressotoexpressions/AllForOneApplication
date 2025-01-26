let  reverseStrInput = document.getElementById("reverseStrInput");
let reverseStrOutput = document.getElementById("reverseStrOutput");
let reverseStrSubmitBtn = document.getElementById("reverseStrSubmitBtn");

reverseStrSubmitBtn.addEventListener('click',async()=>{
    const inputStr =reverseStrInput.value;
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/ReversedString/ReverseIt/"+inputStr);
    const data = await promise.text();

    reverseStrOutput.value= data;
})