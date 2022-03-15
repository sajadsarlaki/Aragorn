
let canvas = document.querySelector('canvas');
const stream = canvas.captureStream(); // grab our canvas MediaStream
const rec = new MediaRecorder(stream); // init the recorder

let recording = document.createElement('button');
recording.innerText = 'recording'
recording.setAttribute('id','recording');
recording.addEventListener("click", ()=>{
    console.log(document.querySelector('canvas'))
    recordFunction(1, rec)
})

let stopIt = document.createElement('button');
stopIt.innerText = 'StopIT'
stopIt.setAttribute('id','stop');
stopIt.addEventListener("click", ()=>{
    recordFunction(0, rec)
})

document.body.appendChild(recording)
document.body.appendChild(stopIt)


function recordFunction(flag, rec, time) {
    const chunks = []; // here we will store our recorded media chunks (Blobs)

    // every time the recorder has new data, we will store it in our array
    rec.ondataavailable = e => chunks.push(e.data);
    // only when the recorder stops, we construct a complete Blob from all the chunks
    rec.onstop = e => exportVid(new Blob(chunks, {type: 'video/webm'}));



    if (flag){

        const loader = document.createElement('div');
        loader.setAttribute('id','loader')
        document.body.appendChild(loader)

        let currentTime = 0;
        const loaderInterval = setInterval(()=>{

                loader.innerText = `${currentTime}s     recording  ${new Array(Math.floor(Math.random() * 10) + 2).fill('.').join(' ')}`
                currentTime += 1
            }, 1000, currentTime
        )


        rec.start();
        if (time)
           setTimeout(()=>rec.stop(), time); // stop recording in 3s
    }
    else {
        let loader = document.getElementById('loader');
        loader.remove()
        rec.stop()
    }

}

function exportVid(blob) {
    // const vid = document.createElement('video');
    src = URL.createObjectURL(blob);
    // vid.controls = true;
    // document.body.appendChild(vid);

    const a = document.createElement('a');
    a.download = 'myvid.webm';
    a.href = src;
    a.textContent = 'download the video';
    document.body.appendChild(a);
}












// let btn = document.querySelector(".record-btn")
//
// btn.addEventListener("click", async function () {
//     let stream = await navigator.mediaDevices.getDisplayMedia({
//         video: true
//     })
//
//     //needed for better browser support
//     const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
//         ? "video/webm; codecs=vp9"
//         : "video/webm"
//     let mediaRecorder = new MediaRecorder(stream, {
//         mimeType: mime
//     })
//
//     let chunks = []
//     mediaRecorder.addEventListener('dataavailable', function(e) {
//         chunks.push(e.data)
//     })
//
//     mediaRecorder.addEventListener('stop', function(){
//         let blob = new Blob(chunks, {
//             type: chunks[0].type
//         })
//         let url = URL.createObjectURL(blob)
//
//         let video = document.querySelector("video")
//         video.src = url
//
//         let a = document.createElement('a')
//         a.href = url
//         a.download = 'video.webm'
//         a.click()
//     })
//
//     //we have to start the recorder manually
//     mediaRecorder.start()
// })
