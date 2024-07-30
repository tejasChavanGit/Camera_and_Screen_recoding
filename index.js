function stream() {
    let video = document.querySelector('video')
    let option = {video:true}
    navigator.mediaDevices.getUserMedia(option)
    // navigator.mediaDevices.getDisplayMedia(option) - is used to share the screen...
    .then(res=>video.srcObject=res)

    console.log(window);
}
