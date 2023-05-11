const popUp = document.querySelector('dialog')

setTimeout(function() {
    popUp.show();
}, 1500);

const myVideo = document.getElementById('video');

let percentage = 0;
myVideo.addEventListener('timeupdate', ()=> {
    const percentComplete = Math.floor((Math.floor(myVideo.currentTime) / Math.floor(myVideo.duration)) * 100);
    percentage = percentComplete
});

function popUpClose(text){
    popUp.close();
    alert(text)
}

function reopenVid(text){
    var options = {
        renotify: true,
        tag: `${percent}% complete`,
        icon: "https://i.pinimg.com/474x/f7/19/c6/f719c6aa2c5b66159aa0929bf627856e.jpg",
        timestamp: Math.floor(Date.now()),
        vibrate: [200, 100, 200],
        body: `Would you like to finish? Click here.`,
        requireInteraction: true, 
        data: {
            status: "incomplete",
        }
    };
        var notification = new Notification(text,options);
        notification.addEventListener('click', function() {
            popUp.show();
            notification.close();
        });
}

document.getElementById('close').addEventListener('click', ()=>  {
    const notDoneText = `You viewed ${percent}%`
    
    if (!("Notification" in window)) return popUpClose(notDoneText);
    if(Notification.permission == "denied") return popUpClose(notDoneText);
    if(percent != 100){
        if (Notification.permission == "granted") return reopenVid(notDoneText);

        Notification.requestPermission().then(function(isGranted) {
            if (isGranted == "granted") return reopenVid(notDoneText);
        }); 
    }
    popUpClose(notDoneText);
});

myVideo.addEventListener('ended', ()=>{
    const doneText = "You watched the whole thing!"
    popUpClose(doneText);
});

