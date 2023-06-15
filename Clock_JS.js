var hoursE1 = document.getElementById("hour")
var minsE1 = document.getElementById("min")
var secE1 = document.getElementById("second")
var ampmE1 = document.getElementById("ampm")

function updateClock(){
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ampm = "AM";
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursE1.innerText = h;
    minsE1.innerText = m;
    secE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(() => {
        updateClock()
    }, 1000);
     
    // function display(){
    //     const img = [
    //         'url("1.jpg")',
    //         'url("2.jpg")',
    //         'url("3.jpg")',
    //         'url("4.jpg")',
    //         'url("https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")',
    //         'url("")',
    //         'url("")',

    //     ]

    //     const body = document.querySelector('body')
    //     const bg = img[Math.floor(Math.random()* img.length)];
    //     body.style.background = bg;
    // }
    // setInterval(() => {
    //     display()
    // }, 1000);

}
updateClock();