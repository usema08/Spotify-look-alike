let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Salam-e-ishq", filePath: "song/2.mp3", coverPath: "cover/1.jpg"},
    {songName: "Ilzaam", filePath: "song/1.mp3", coverPath: "cover/2.jpg"},
    {songName: "Let me love you", filePath: "song/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Booliya", filePath: "song/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Closer", filePath: "song/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "jaane tu ya jaane na", filePath: "song/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Red blood", filePath: "song/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "First last kiss", filePath: "song/7.mp3", coverPath: "cover/1.jpg"},
    {songName: "Back to you", filePath: "song/8.mp3", coverPath: "cover/9.jpg"},
    {songName: "love you", filePath: "song/9.mp3", coverPath: "cover/10.jpg"},
]

songItems.forEach((Element, i) => {
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }) 
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex++;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex--;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})