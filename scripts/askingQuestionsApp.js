let nameInput = document.getElementById("nameInput");
let wakeUpInput =document.getElementById("wakeUpInput");
let askingQuestionsSubmitBtn = document.getElementById("askingQuestionsSubmitBtn");
let askingQuestionsOutput = document.getElementById("askingQuestionsOutput");


askingQuestionsSubmitBtn.addEventListener('click',async()=>{
    
    let name = nameInput.value;
    let time = wakeUpInput.value;

    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/WakeUpName/GetWakeUpNameTime/"+name+"/"+time);
    const data = await promise.text();
    askingQuestionsOutput.value =data;
})

