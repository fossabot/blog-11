document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
function theme() {
    if (sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {
        sessionStorage.setItem('bg', '#191B1F');
        sessionStorage.setItem('cc', '#fff');
    }
    else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', '#191B1F');
        sessionStorage.setItem('cc', '#fff');
    }
    else if (sessionStorage.getItem('bg') === '#191B1F') {
        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
        sessionStorage.setItem('cc', '#333');
    }
document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
}