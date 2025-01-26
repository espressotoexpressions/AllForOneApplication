let firstNumInput = document.getElementById("firstNumInput");
let secondNumInput = document.getElementById("secondNumInput");
let greaterLessSubmitBtn = document.getElementById("greaterLessSubmitBtn");
let greaterLessOutput=document.getElementById("greaterLessOutput");

greaterLessSubmitBtn.addEventListener('click',async ()=>{
    let firstNum = firstNumInput.value;
    let secondNum = secondNumInput.value;

    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/GreaterThanLessThan/GreaterThanLessThan/"+firstNum+"/"+secondNum);
    const data = await promise.text();
    greaterLessOutput.value=data;
})