

var data = [{
    x: [0, 0],
    y: [-1, 1],
}];

// 3 steps to animat a chart
//
// Aragorn.Chart("gd", data)
// const dataNames = Aragorn.creatFrameNames(data);
// console.log(dataNames)
// document.getElementById('animat-btn').addEventListener('click',()=> Aragorn.startChartAnimation('gd', 'class0'))
// document.getElementById('animat-btn2').addEventListener('click',()=> Aragorn.startChartAnimation('gd', 'class1'))
//
// Aragorn.animation.effects.fade(".box");
//
// Aragorn.textFlash('.tlt')
//
// // todo : fix the multiple animation
//
// function generatePoint (func) {
//     console.log('ffffffffffffff' + arguments.length)
//     var values = []
//     arguments[1]  = -50;
//     var increment = (1) ;
//     for (var i = 1; i < 100; i++)
//         values[i] = func(arguments[1] + increment * i);
//     return values
//
// }
//

// document.getElementById('change').addEventListener('click',()=> Aragorn.drawFunc('myIv', 1, f2, -1000,1000,1))


 // ---- pixi ---
// let PIXI = Aragorn.PIXI;
// const app = new PIXI.Application();
// document.body.appendChild(app.view);

// 1. Create a Pixi renderer and define size and a background color



// ------------------------------------------------------------------

function expretion (x){
    return Math.cos(x) * Math.sin(x);
}

function f1(x){
    return x*x*x
}
function f2(x){
    return x*x
}

 Aragorn.fantasyDrawFunc('myDiv', 1, f1, -Math.PI,Math.PI,0.1,5,1000 )

// -------------------------- Example of html recorder--------------
Aragorn.htmlRecorder ('myDiv', 'background-canvas', 'btn-start-recording', 'btn-stop-recording', 'timer', 'counter', 'preview-video' )

Aragorn.textRollIn('.title')
