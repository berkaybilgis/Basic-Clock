let name = prompt("Adınız nedir?")
myName.innerHTML = name

function timeShowcase(){
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let days = new Array("Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi");
    
    if (second<10) {second="0" + second}
    if (minute<10) {minute="0" + minute}
    document.getElementById("myClock").innerHTML = hour + ":" + minute + ":" + second + " " + days[day];
}

setInterval(timeShowcase, 1000);