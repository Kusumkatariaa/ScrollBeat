let nav = document.querySelector('nav');
let body = document.body;
let cursor = document.querySelector('.cursor');
let hero = document.querySelector('.hero');
let heroPoster = document.querySelector('.hero .poster');
let heroTitle = document.querySelector('.hero .songDetails h4');
let heroDesc = document.querySelector('.hero .songDetails p');

// body.addEventListener('mousemove', (dets) => {
//     cursor.style.left = dets.x + 'px';
//     cursor.style.top = dets.y + 'px';
// })
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

body.addEventListener('wheel', (dets) => {
    if (dets.deltaY > 0) {
        nav.style.transform = "translateY(-100%)";
    } else {
        nav.style.transform = "translateY(0%)";
    }
})


let allSongs = document.querySelectorAll('.song');

allSongs.forEach((elem) => {
    elem.addEventListener('mouseenter', () => {
        elem.classList.add('active');
    });
    elem.addEventListener('mouseleave', () => {
        elem.classList.remove('active');
    });
    elem.childNodes[5].addEventListener('click', () => {

        const button = elem.childNodes[5];
        const icon = button.childNodes[0];
        const audio = elem.childNodes[7];
        const isPlaying = !audio.paused;
        allSongs.forEach((song) => {
            const allAudios = song.childNodes[7];
            const allIcon = song.childNodes[5].childNodes[0];

            allAudios.pause();
            allAudios.currentTime = 0;
            allIcon.src = './assets/play.png';
        });
        if (icon.src.includes('play.png')) {

            icon.src = './assets/pause.png';
            audio.play();

            const poster = elem.querySelector('.poster').src;
            const title = elem.querySelector('h4').innerText;
            const desc = elem.querySelector('p').innerText;

            heroPoster.src = poster;
            heroTitle.innerText = title;
            heroDesc.innerText = desc;

            hero.style.display = "block";

        } else {

            icon.src = './assets/play.png';
            audio.pause();

            hero.style.display = "none";
        }
    })
}); 