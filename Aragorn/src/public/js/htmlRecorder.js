

module.exports = function recorder (elementToRecordId, canvas2dId, btnStartId, btnStopId, timerId, counterId, linkID ) {
    let elementToRecord = document.getElementById(elementToRecordId);
    let canvas2d = document.getElementById(canvas2dId);
    let context = canvas2d.getContext('2d');
    let loaderInterval

    canvas2d.width = elementToRecord.clientWidth;
    canvas2d.height = elementToRecord.clientHeight;

    let isRecordingStarted = false;
    let isStoppedRecording = false;

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    (function looper() {
        if (!isRecordingStarted) {
            return setTimeout(looper, 500);
        }

        html2canvas(elementToRecord).then(function (canvas) {
            context.clearRect(0, 0, canvas2d.width, canvas2d.height);
            context.drawImage(canvas, 0, 0, canvas2d.width, canvas2d.height);

            if (isStoppedRecording) {
                return;
            }

            requestAnimationFrame(looper);
        });
    })();

    let recorder = new RecordRTC(canvas2d, {
        type: 'canvas'
    });

    document.getElementById(btnStartId).onclick = function () {
        loaderInterval = setInterval(()=>{
            timer.innerHTML = `${currentTime}s     recording  ${new Array(Math.floor(Math.random() * 10) + 2).fill('.').join(' ')}`
            currentTime += 1
        }, 100, currentTime)
        this.disabled = true;

        isStoppedRecording = false;
        isRecordingStarted = true;

        recorder.startRecording();
        document.getElementById(btnStopId).disabled = false;


    };

    document.getElementById(btnStopId).onclick = function () {
        this.disabled = true;
        clearInterval(loaderInterval)

        recorder.stopRecording(function () {
            isRecordingStarted = false;
            isStoppedRecording = true;
            let blob = recorder.getBlob();
            // document.getElementById('preview-video').srcObject = null;
            document.getElementById(linkID).href = URL.createObjectURL(blob);
            document.getElementById(linkID).parentNode.style.display = 'block';
            // elementToRecord.style.display = 'none';

            // window.open(URL.createObjectURL(blob));
        });
    };

    let timer = document.getElementById(timerId);
    let counter = document.getElementById(counterId);
    let currentTime = 0;

    // let interval = setInterval(function () {
    //     timer.innerHTML = new Date();
    //     counter.innerHTML = (Math.random() * 100).toString().replace('.', '');
    // }, 1000);
}
