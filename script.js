let celsius=document.querySelector("celsius > input");
let fahrenheit=document.querySelector("fahrenheit > input");

let kelvin=document.querySelector("kelvin > input");
let btn=document.querySelector(".result button");

function roundNumber(number){
    return Math.round(number*100)/100;
}

celsius.addEventListener('input',function(){
    let cTemp = parseFloat(celsius.value)
    let fTemp =(cTemp*(9/5))+32
    let kTemp =cTemp + 273.15

    fahrenheit.value=roundNumber(fTemp)
    kelvin.value=roundNumber(kTemp)
})

fahrenheit.addEventListener("input",function(){
    let fTemp =parseFloat(fahrenheit.value)
    let cTemp =((fTemp-32)*(5/9))
    let kTemp =(fTemp-32)*(5/9) + 273.15

    celsius.value=roundNumber(cTemp)
    kelvin.value=roundNumber(kTemp)
})

kelvin.addEventListener("input",function(){
    let kTemp =parseFloat(kelvin.value)
    let cTemp =kTemp - 273.15 
    let fTemp =(kTemp-273.15) * (9/5) +32
})
