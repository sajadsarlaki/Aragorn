 module.exports = class Recorder {
    constructor(id) {
        this.canvas = document.getElementById(id);
         // init the recorder
    }
    recorderGenerator(){
        let stream = this.canvas.captureStream(30); // grab our canvas MediaStream
        return  new MediaRecorder(stream);
    }

    recordFunction(start, rec, loaderParent, time) {
        const chunks = []; // here we will store our recorded media chunks (Blobs)
        // every time the recorder has new data, we will store it in our array
        rec.ondataavailable = e => chunks.push(e.data);
        // only when the recorder stops, we construct a complete Blob from all the chunks
        rec.onstop = e => this.exportVid(new Blob(chunks, {type: 'video/webm'}));

        if (start){
            const loader = document.createElement('div');
            loader.setAttribute('id','loader')
            loaderParent.appendChild(loader)
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

    exportVid(blob) {
        // const vid = document.createElement('video');
        let src = URL.createObjectURL(blob);
        // vid.controls = true;
        // document.body.appendChild(vid);

        const a = document.createElement('a');
        a.download = 'myvid.webm';
        a.href = src;
        a.textContent = 'download the video';
        document.body.appendChild(a);
    }

}

 // let recorder = new Recorder('box');
 // const rec = recorder.recorderGenerator();
 //
 // let recording = document.createElement('button');
 // recording.innerText = 'recording'
 // recording.setAttribute('id','recording');
 // recording.addEventListener("click", ()=>{
 //     console.log(document.querySelector('canvas'))
 //     recorder.recordFunction(1, rec, document.body)
 // })
 //
 // let stopIt = document.createElement('button');
 // stopIt.innerText = 'StopIT'
 // stopIt.setAttribute('id','stop');
 // stopIt.addEventListener("click", ()=>{
 //     recorder.recordFunction(0, rec)
 // })
 //
 // document.body.appendChild(recording)
 // document.body.appendChild(stopIt)







