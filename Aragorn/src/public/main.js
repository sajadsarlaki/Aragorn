

var trace1 = {
    x: [1, 2, 3, 4,10],
    y: [10, 15, 13, 17,11],
    // type: 'scatter'
};

var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
};

var data = [{
    x: [0, 0],
    y: [-1, 1],
}];



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


document.getElementById('change').addEventListener('click',()=> Aragorn.fantasyDrawFunc('myIv', 0, f2, -Math.PI,Math.PI,0.1,3,100))


