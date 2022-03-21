const load_script = function(src) {
    // Initialize scripts queue
    if( load_script.scripts === undefined ) {
        load_script.scripts = [];
        load_script.index = -1;
        load_script.loading = false;
        load_script.next = function() {
            if( load_script.loading ) return;

            // Load the next queue item
            load_script.loading = true;
            var item = load_script.scripts[++load_script.index];
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = item.src;
            // When complete, start next item in queue and resolve this item's promise
            script.onload = () => {
                load_script.loading = false;
                if( load_script.index < load_script.scripts.length - 1 ) load_script.next();
                item.resolve();
            };
            head.appendChild(script);
        };
    }

    // Adding a script to the queue
    if( src ) {
        // Check if already added
        for(var i=0; i < load_script.scripts.length; i++) {
            if( load_script.scripts[i].src === src ) return load_script.scripts[i].promise;
        }
        // Add to the queue
        var item = { src: src };
        item.promise = new Promise(resolve => {item.resolve = resolve;});
        load_script.scripts.push(item);
        load_script.next();
    }

    // Return the promise of the last queue item
    return load_script.scripts[ load_script.scripts.length - 1 ].promise;
};






async function webcamRecorder(){
    let headID = document.getElementsByTagName('head')[0];
    console.log(headID)
    let firstLink = document.createElement('link');
    firstLink.type = 'text/css';
    firstLink.rel = 'stylesheet';
    firstLink.href = '../../node_modules/video.js/dist/video-js.min.css';
    // --

    let secondLink = document.createElement('link');
    secondLink.type = 'text/css';
    secondLink.rel = 'stylesheet';
    secondLink.href = '../../node_modules/video.js/dist/video-js.css';
// -------------
     headID.appendChild(firstLink);
    headID.appendChild(secondLink);

// ------------------------------------------ scripts ---------------------------------------
    let scripts =
    [load_script("../../node_modules/video.js/dist/video.min.js"),
    load_script("../../node_modules/recordrtc/RecordRTC.js"),
    load_script("../../node_modules/webrtc-adapter/out/adapter.js"),
    load_script("../../node_modules/videojs-record/dist/videojs.record.js"),
    ]
   await Promise.all(scripts).then(()=>{


           let options = {
           controls: true,
           bigPlayButton: true,
           width: 320,
           height: 240,
           fluid: false,
           plugins: {
           record: {
           audio: true,
           video: true,
           maxLength: 1000,
           debug: true
       }
       }
       };

           // apply some workarounds for opera browser
           // applyVideoWorkaround();

           var player = videojs('myVideo', options, function() {
           // print version information at startup
           var msg = 'Using video.js ' + videojs.VERSION +
           ' with videojs-record ' + videojs.getPluginVersion('record') +
           ' and recordrtc ' + RecordRTC.version;
           videojs.log(msg);
       });

           // error handling
           player.on('deviceError', function() {
           console.log('device error:', player.deviceErrorCode);
       });

           player.on('error', function(element, error) {
           console.error(error);
       });

           // user clicked the record button and started recording
           player.on('startRecord', function() {
           console.log('started recording!');
       });

   // >span{
   //         display: block; !important;
   //         border: 10px solid #8D121A;
   //     }

       let startBtn = document.querySelector('.vjs-device-button>span');
       startBtn.innerText = 'Camera'
       startBtn.style.padding = '25px';
       startBtn.style.borderRadius = '75px';
       startBtn.style.backgroundColor = '#008800';






       // user completed recording and stream is available
           player.on('finishRecord', function() {
           // the blob object contains the recorded data that
           // can be downloaded by the user, stored on server etc.
           console.log('finished recording: ', player.recordedData);
       });

   })





}
