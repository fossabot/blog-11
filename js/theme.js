document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
document.getElementById("masthead").style.backgroundImage = sessionStorage.getItem('mastheadbg');
function theme() {
    if (sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {
        sessionStorage.setItem('bg', '#191B1F');
        sessionStorage.setItem('cc', '#FFFFFF');
        sessionStorage.setItem('mastheadbg', "url('')");
    }
    else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', '#191B1F');
        sessionStorage.setItem('cc', '#FFFFFF');
        sessionStorage.setItem('mastheadbg', "url('')");
    }
    else if (sessionStorage.getItem('bg') === '#191B1F') {
        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
        sessionStorage.setItem('cc', '#333');
        sessionStorage.setItem('mastheadbg', "url('/images/background.png')");
    }
document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
document.getElementById("masthead").style.backgroundImage = sessionStorage.getItem('mastheadbg');
}