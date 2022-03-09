

var trace1 = {
    x: [1, 2, 3, 4,10],
    y: [10, 15, 13, 17,11],
    type: 'scatter'
};

var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
};

var data = [trace1, trace2];



// 3 steps to animat a chart
Aragorn.Chart("gd", data)

document.getElementById('animat-btn').addEventListener('click',()=> Aragorn.startChartAnimation('gd', 'class0'))
document.getElementById('animat-btn2').addEventListener('click',()=> Aragorn.startChartAnimation('gd', 'class1'))

// Aragorn.Animation.to('#gd',{duration: 2, scaleX: 0.5, scaleY: 0.5, easel: {tint: 0x00FF00}})

Aragorn.textFlash('.tlt')

// todo : fix the multiple animation
