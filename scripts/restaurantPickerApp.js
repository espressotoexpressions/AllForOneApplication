let  chineseBtn = document.getElementById("chineseBtn");
let italianBtn = document.getElementById("italianBtn");
let filipinoBtn = document.getElementById("filipinoBtn");
let anyBtn = document.getElementById("anyBtn");
let suggestionOutput = document.getElementById("suggestionOutput");

chineseBtn.addEventListener('click',async()=>{
   
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/chinese");
    const data = await promise.text();

    suggestionOutput.value= data;
})

italianBtn.addEventListener('click',async()=>{
   
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/italian");
    const data = await promise.text();

    suggestionOutput.value= data;
})
filipinoBtn.addEventListener('click',async()=>{
   
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/filipino");
    const data = await promise.text();

    suggestionOutput.value= data;
})

anyBtn.addEventListener('click',async()=>{
   
    
    const promise = await fetch("https://allforoneendpoints-bqh9hzf7e0ckdkgg.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/any");
    const data = await promise.text();

    suggestionOutput.value= data;
})