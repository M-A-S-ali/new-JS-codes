let currentSong = new Audio();
let songs;
let playButton;
function secondsToMinutesSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
async function getSongs() {
    let a = await fetch('/songs/');
    let result = await a.text();
    let div = document.createElement("div");
    div.innerHTML = result;
    let as = div.getElementsByTagName('a');
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith('.mp3')) {
            songs.push(element.href.split('/songs/')[1])
        }
    }
    return songs
}
function playMusic(track, pause = false) {
    currentSong.src = "/spotify%20clone/songs/" + track;
    if (!pause) {
        currentSong.play();
        play.firstElementChild.src = "svg/pause.svg"
    }
    document.querySelector('.songInfo').innerHTML = decodeURI(track);
    document.querySelector('.songTime').innerHTML = '00:00 / 00:00'
};
async function main() {
    //get songs
    songs = await getSongs();
    playMusic(songs[0], true);
    //play songs
    let songUl = document.querySelector('.songList').getElementsByTagName('ul')[0];
    let cardItem = document.querySelector('.cardContainer')
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li><img class="invert" src="svg/songs.svg" alt="songLogo">
        <div class="songName">${song.replaceAll('%20', ' ')}</div>
            <span>play now</span>
            <div class="playNow">
            <button class="playnow-button bg-grey c-grey"><img src="svg/play.svg" alt=""></button>
        </div>
    </li>`
        cardItem.innerHTML = cardItem.innerHTML + `<div class="card round">
        <img class="invert" src="svg/songs.svg" alt="songLogo">
        <div class="svgButton">
            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="green" />
                <polygon points="40,30 70,50 40,70" fill="black" />
            </svg>

        </div>
        <h3>${song.replaceAll('%20', ' ')}</h3>
        <h4>Unkown</h4>
    </div>`
    }
    //attach an event listner to each song
    Array.from(document.querySelector('.songList').getElementsByTagName('li')).forEach(e => {
        playButton = e.querySelector('.playNow').firstElementChild;
        playButton.addEventListener('click', event => {
            playMusic(e.querySelector('.songName').innerHTML)
        })
    })
    // attach an event listner to play, previous and next
    let play = document.getElementById('play');
    play.addEventListener('click', event => {
        if (currentSong.paused) {
            currentSong.play();
            play.firstElementChild.src = "svg/pause.svg"
            playButton.firstElementChild.src = "svg/pause.svg"
        } else {
            currentSong.pause();
            play.firstElementChild.src = "svg/play.svg"
            playButton.firstElementChild.src = "svg/play.svg"
        }
    })
    //add event listner time update
    currentSong.addEventListener('timeupdate', event => {
        document.querySelector('.songTime').innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector('.circle').style.left = (currentSong.currentTime / currentSong.duration) * 100 + '%';
    })
    // add event listner to seekbar
    document.querySelector('.seekbar').addEventListener('click', event => {
        let percent = (event.offsetX / event.target.getBoundingClientRect().width) * 100
        document.querySelector('.circle').style.left = (percent) + '%';
        currentSong.currentTime = ((currentSong.duration) * percent) / 100;
    })
    //add event listner to hamburger
    document.querySelector('.hamburger').addEventListener('click', event => {
        document.querySelector('.left').style.left = 0;
    })
    //add event listner to close
    document.querySelector('.close').addEventListener('click', event => {
        document.querySelector('.left').style.left = -100 + '%';
    })
    //add event lsitener to previous
    previous.addEventListener('click', event => {
        currentSong.pause();
        if (currentSong.pause()) {
            play.firstElementChild.src = "svg/play.svg"
        }
        let index = songs.indexOf(currentSong.src.split('/').slice(-1)[0]);
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })
    //add event listner to next
    next.addEventListener('click', event => {
        currentSong.pause();
        if (currentSong.pause()) {
            play.firstElementChild.src = "svg/play.svg"
        }
        let index = songs.indexOf(currentSong.src.split('/').slice(-1)[0]);
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })
}
main()
