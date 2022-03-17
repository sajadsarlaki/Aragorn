

var data = [{
    x: [0, 0],
    y: [-1, 1],
    mode: 'line',}];

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



    let fx = ((Math.sqrt(Math.cos(x))*Math.cos(400*x) +
        Math.sqrt(Math.abs(x))-0.4)*(4-x*x)^0.1 )
    return    fx === 0 ? (fx + Math.random()*4) * Math.random() * 10 : fx * Math.random() * 10


}
function f2(x){
    return x*x
}

//  Aragorn.drawFunc('myDiv', 1, f1, -1,1,0.0007,'markers',
//      {
//     color: 'rgb(255, 121, 191)',
//         width: 100,
//          size:7
// })

Aragorn.fantasyDrawFunc('myDiv', 10, f1, -1,1,0.0005, 50, 1, 'lines+markers',
    {
        color: 'rgb(255, 0, 0)',
        width: 15,
        size:25
    },
    {
        width:  800,
        height: 450,
        title: "House Prices vs Size"
    }
    )
// Aragorn.Chart('myDiv',1, data)

// -------------------------- Example of html recorder--------------
Aragorn.htmlRecorder ('myDiv', 'background-canvas', 'btn-start-recording', 'btn-stop-recording', 'timer', 'counter', 'preview-video' )

Aragorn.textRollIn('.title')
