const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// prompt to select media stream, pass to video element , then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (e) {
        // Catch Errors
        console.log('Whoops, Error Dedected : ', e);
    }
}
button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset The Button
    button.disabled = false;
});
selectMediaStream();