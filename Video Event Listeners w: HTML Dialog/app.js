const popUp = document.querySelector('dialog')
let percentage = 0;

setTimeout(function() {
    popUp.show();
}, 1500);

function popUpClose(text){
    popUp.close();
    alert(text)
}

document.getElementById('close').addEventListener('click', ()=>  {
    const notDoneText = `You viewed ${percent}% of the video.`
    popUpClose(notDoneText);
});

const myVideo = document.getElementById('video');
myVideo.addEventListener('timeupdate', ()=> {
    const percentComplete = Math.floor((Math.floor(myVideo.currentTime) / Math.floor(myVideo.duration)) * 100);
    percentage = percentComplete
});

myVideo.addEventListener('ended', ()=>{
    const doneText = "You watched the whole thing!"
    popUpClose(doneText);
});

