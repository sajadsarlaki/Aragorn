

// var data = [{
//     x: [0, 0],
//     y: [-1, 1],
// }];

// 3 steps to animat a chart
// Aragorn.Chart("gd", data)
// const dataNames = Aragorn.creatFrameNames(data);
// console.log(dataNames)
// document.getElementById('animat-btn').addEventListener('click',()=> Aragorn.startChartAnimation('gd', 'class0'))
// document.getElementById('animat-btn2').addEventListener('click',()=> Aragorn.startChartAnimation('gd', 'class1'))

// Aragorn.animation.effects.fade(".box");

Aragorn.textFlash('.tlt')

// todo : fix the multiple animation

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

// function expretion (x){
//     return math.cos(x[]) * math.sin(x);
// }

function f1(x){
    return x*x*x
}
function f2(x){
    return x*x
}

// const newData = [{x: new Array(100).fill(1).map((item, index) => index), y:generatePoint(f1)}];
// console.log(newData)
 Aragorn.fantasyDrawFunc('myIv', 1, f1, -Math.PI,Math.PI,0.1,9,100 )
//
document.getElementById('change').addEventListener('click',()=> Aragorn.drawFunc('myIv', 1, f2, -1000,1000,1))


 // ---- pixi ---
let PIXI = Aragorn.PIXI;
const app = new PIXI.Application();
document.body.appendChild(app.view);

// 1. Create a Pixi renderer and define size and a background color

var circle = new PIXI.Graphics();
// define outline = stroke
circle.lineStyle(20, 0x91CF46, 1);
// draw circle (x, y, radius)
circle.drawCircle(app.view.width / 2, app.view.height / 2, 100);


app.stage.addChild(circle)

let velocity = 1;
app.ticker.add(()=>{
    circle.x += velocity
})

