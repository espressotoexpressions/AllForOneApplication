
/* Add 2 Numbers elements*/ 
let firstNumInput = document.getElementById("firstNumInput");
let secondNumInput = document.getElementById("secondNumInput");
let totalInput = document.getElementById("totalInput");
let add2NumbersSubmitBtn = document.getElementById("add2NumbersSubmitBtn");



add2NumbersSubmitBtn.addEventListener('click',async function (){
    let num1 = firstNumInput.value;
    let num2= secondNumInput.value;
    console.log("ENTER SUBMIT");
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/AddTwoNumbers/GetSumOfTwoNumbers/"+num1+"/"+num2);
    const data = await promise.text();
    console.log(data);
    totalInput.value = data;
})


 