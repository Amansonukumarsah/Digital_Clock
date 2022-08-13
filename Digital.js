let date = new Date()
h = date.getHours()
m = date.getMinutes()
s = date.getSeconds()





setInterval(() => {
    let date = new Date()
    h = date.getHours()
    m = date.getMinutes()
    s = date.getSeconds()
    session='pm';
    if(h>12)
    {
        h=h-12;
        session='am';
    }
    document.getElementById('hour').innerText = h;
    document.getElementById('min').innerText = m;
    document.getElementById('sec').innerText = s;
    document.getElementById('pmam').innerText=session;
}, 1000)
