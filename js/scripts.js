function updateTime() {
    const now = new Date();
    const timeString = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate() + 
                       ' ' + now.toLocaleTimeString();
    document.getElementById('real-time').innerText = timeString;
}
setInterval(updateTime, 1000);

document.querySelectorAll('.poi').forEach(poi => {
    poi.addEventListener('mouseenter', () => {
        document.getElementById('location-text').innerText = poi.getAttribute('data-name');
    });
    poi.addEventListener('mouseleave', () => {
        document.getElementById('location-text').innerText = 'STATIONARY';
    });
});

function openCard(id) {
    document.getElementById(id).style.display = 'block';
}

function closeCard(id) {
    document.getElementById(id).style.display = 'none';
}


