let  reverseNumInput = document.getElementById("reverseNumInput");
let reverseNumOutput = document.getElementById("reverseNumOutput");
let reverseNumSubmitBtn = document.getElementById("reverseNumSubmitBtn");

reverseNumSubmitBtn.addEventListener('click',async()=>{
    const inputNum =reverseNumInput.value;
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/ReverseNum/ReverseNum/"+inputNum);
    const data = await promise.text();

    reverseNumOutput.value= data;
})