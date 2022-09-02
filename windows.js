const startMenu = document.getElementById('start-menu');
const appContainer = document.getElementById('allApps');

function showMenu() {
    startMenu.classList.toggle('show');
}

function showApps() {
    appContainer.classList.toggle('show-icons');
}

function showTime(){
    let date = new Date();
    let year = date.getFullYear();
    let mon = date.getMonth();
    let day = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let session = 'AM';

    if (h == 0) {
        h = 12;
    }

    if(h > 12){
        h = h-12;
        session = 'PM';
    }

    m = (m < 10) ? "0" + m : m;

    let time = h + ":" + m + " " + session + '<br>' + mon + '/' + day + '/' +  year; 

    document.getElementById('time').innerHTML = time;

    setTimeout(showTime, 1000);
}
showTime();


