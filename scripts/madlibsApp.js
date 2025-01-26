let noun1Input = document.getElementById("noun1Input");
let adjective2Input =document.getElementById("adjective2Input");
let number3Input = document.getElementById("number3Input");
let noun4Input =document.getElementById("noun4Input");
let noun5Input = document.getElementById("noun5Input");
let adjective6Input =document.getElementById("adjective6Input");
let noun7Input= document.getElementById("noun7Input");
let number8Input =document.getElementById("number8Input");
let number9Input = document.getElementById("number9Input");
let adjective10Input=document.getElementById("adjective10Input");
let adverb11Input = document.getElementById("adverb11Input");
let noun12Input = document.getElementById("noun12Input");
let madlibsSubmitBtn=document.getElementById("madlibsSubmitBtn");
let madlibsOutput=document.getElementById("madlibsOutput");

let madlibsInputGrp = document.getElementById("madlibsInputGrp");
let storyContainer =document.getElementById("storyContainer");


madlibsSubmitBtn.addEventListener('click',async()=>{
   
    const noun1=noun1Input.value;
    const adjective2 = adjective2Input.value;
    const number3 = number3Input.value;
    const noun4= noun4Input.value;
    const noun5 = noun5Input.value;
    const adjective6 = adjective6Input.value;
    const noun7 = noun7Input.value;
    const number8= number8Input.value;
    const number9 = number9Input.value;
    const number10 = adjective10Input.value;
    const adverb11 = adverb11Input.value;
    const noun12 = noun12Input.value;


    const promise = await fetch(`https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/Madlib/Madlib/${noun1}/${adjective2}/${number3}/${noun4}/${noun5}/${adjective6}/${noun7}/${number8}/${number9}/${number10}/${adverb11}/${noun12}`);
    const data = await promise.text();
    console.log(data);

    madlibsOutput.value= data;
    madlibsInputGrp.classList.add("inactive");
    storyContainer.classList.remove("inactive");
    madlibsSubmitBtn.classList.add("inactive");

  
})






