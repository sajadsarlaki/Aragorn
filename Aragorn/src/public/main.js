


var data = [{
    x: [0, 1, 2, 3, 4, 5],
    y: [2, 4, 3, 0, 5, 6],

    type: 'scatter'}];

// 3 steps to animat a chart
let dataframes = Aragorn.creatDataFrames(data);
let frameNames = Aragorn.creatFrameNames(data);

Aragorn.Chart("gd", data)

document.getElementById('animat-btn').addEventListener('click',()=> Aragorn.startAnimation('gd', data))
