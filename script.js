console.log("Welcomr to Music Player")
//intialoze the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar =  document.getElementById('myprogressbar');
let gif =  document.getElementById('gif');
let masterName =  document.getElementById('masterName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Hanuman Chalisa", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Jai Mahakal- Good Bye", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tu Hai Kahan- AUR", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Baarish lete aana", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ha ho gyi galt5i mujshe", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ek Tarfa", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Heeriye heeriye", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Satranga", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Mujhe Pine do", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Papa Meri Jaan", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
//handle play/pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
        
    }else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})


songItem.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName; 
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    //bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
    if(progress==100){
        if(songIndex>=9){
            songIndex=0
        }else{
            songIndex+=1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
            audioElement.currentTime= 0;
            masterName.innerText=songs[songIndex].songName;
            audioElement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove("fa-play-circle");
            masterplay.classList.add("fa-pause-circle");
    }
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime= (((myprogressbar.value)*(audioElement.duration))/100);
})


const makeAllPlays = (e)=>{
    Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");
    })
}

Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.add('fa-play-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0
    }else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime= 0;
        masterName.innerText=songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
})

document.getElementById('pre').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime= 0;
        masterName.innerText=songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
})
