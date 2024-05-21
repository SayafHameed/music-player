let progress=document.querySelector("#progress");
let song=document.querySelector("#song");
let playpause=document.querySelector("#playpause");




song.onloadedmetadata=function () {
    progress.max=song.duration;
    progress.value=song.currentTime;
}
function playPause() {
    // console.log("hello");
    if(playpause.classList.contains("fa-pause")){
        song.pause();
        playpause.classList.remove("fa-pause");
        playpause.classList.add("fa-play")
    }
    else{
        song.play();
        playpause.classList.add("fa-pause")
        playpause.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(() => {
        progress.value=song.currentTime;
    }, 500);
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    playpause.classList.add("fa-pause")
    playpause.classList.remove("fa-play");
}