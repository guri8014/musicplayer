let musicBar = document.getElementById('musicbar');
let playIcon = document.getElementById('icon2')
let allIcons = document.getElementById('icons')
let rangeBar = document.getElementById('rangebar')
let moveNext = document.getElementById('icon3')
// let musicName = Array.from(document.getElementsByClassName('musicname'))
let music = Array.from(document.getElementsByClassName('musicbar'));

let audioPlay = new Audio('music/one.mp3');
// let audioPlay2 = new Audio('music/two.mp3');

let songs = [
    {songName: "Bachke Bachke", filepath: "music/one.mp3", img: "images/first.jpg"},
    {songName: "Yankee", filepath: "music/two.mp3", img: "images/second.jpg"},
    {songName: "Rubicon", filepath: "music/one.mp3", img: "images/third.jpg"},
    {songName: "Chobara-Sajjan-", filepath: "music/one.mp3", img: "images/fourth.jpeg"},
    {songName: "Fateh-Veer-Sandhu", filepath: "music/one.mp3", img: "images/fifth.jpg"},
    {songName: "Full-Moon--", filepath: "music/one.mp3", img: "images/sixth.jpeg"},
    {songName: "GEN-Y-", filepath: "music/one.mp3", img: "images/seventh.jpg"},
    {songName: "Lifestyle-", filepath: "music/one.mp3", img: "images/eighth.jpg"},
    {songName: "Naa-Lai-Ke-", filepath: "music/one.mp3", img: "images/ninth.jpg"},
    {songName: "Nazar-Sartaj-Virk", filepath: "music/one.mp3", img: "images/tenth.jpg"},
    {songName: "Ok-Sohneya-", filepath: "music/one.mp3", img: "images/eleventh.jpg"},
    {songName: "Preface--E.O.E--", filepath: "music/one.mp3", img: "images/twelevth.jpg"},
    {songName: "Rajinama-Lakhi", filepath: "music/one.mp3", img: "images/thirteenth.jpg"},
    {songName: "Rees-Nijjar", filepath: "music/one.mp3", img: "images/fourteenth.jpg"},
    {songName: "Shaunk-Nal-", filepath: "music/one.mp3", img: "images/fifteen.jpg"}
]

music.forEach((element,i)=>{
    // console.log(element)
    // element.getElementsByTagName('span')[0] = songs[i].songName
    element.getElementsByClassName('musicname')[0].innerHTML = songs[i].songName
    element.getElementsByTagName('img')[0].src = songs[i].img
})

function playMusic(musicNumber) {
    if (audioPlay.paused) {
        musicNumber.play()
        playIcon.classList.add('fa-bounce')
    } else {
        audioPlay.pause()
        playIcon.classList.remove('fa-bounce')
    }
}

playIcon.addEventListener('click', () => {
    playMusic(audioPlay)
    // if (audioPlay.paused) {
    //              musicNumber.play()
    //              playIcon.classList.add('fa-bounce')
    //          } else {
    //              audioPlay.pause()
    //              playIcon.classList.remove('fa-bounce')
    //          }
})

audioPlay.addEventListener('timeupdate', () => {
    // console.log('timeupdate')
    progress = parseInt((audioPlay.currentTime))
    // console.log(progress)
    rangeBar.value = progress
})

rangeBar.addEventListener('change', () => {
    audioPlay.value = rangeBar.value
})

// const pause =()=>{
//     document.getElementsByClassName('songplay').forEach((el)=>{
//         el.target.classList.remove()
//     })
// }

// function pause(){
//     document.getElementsByClassName('')
// }

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    })
}

Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click', (elem) => {
        // console.log(elem.target);
        index = parseInt(elem.target.id);
        makeAllPlay();
        elem.target.classList.remove('fa-circle-play')
        elem.target.classList.add('fa-circle-pause')
        audioPlay.src = `music/${index+1}.mp3`
        audioPlay.play();
    })
})

