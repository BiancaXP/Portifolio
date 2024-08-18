
var msgCookies = document.getElementById('cookies-msg');

function aceito() {
    localStorage.lgpd = 'aceito';
    msgCookies.classList.remove("mostrar");
}

if(localStorage.lgpd == 'aceito') {
    msgCookies.classList.remove("mostrar");
}else{
    msgCookies.classList.add("mostrar");
}