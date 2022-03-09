


var data = [{
    x: [0, 1, 2, 3, 4, 5],
    y: [2, 4, 3, 0, 5, 6],
}];

// 3 steps to animat a chart
let dataframes = Aragorn.creatDataFrames(data);
let frameNames = Aragorn.creatFrameNames(data);

Aragorn.Plotly.newPlot("gd", /* JSON object */ {
    "data": data,
    "layout": { "width": 600, "height": 400}
}).then(
    function (){
        Aragorn.Plotly.addFrames('gd', dataframes );
    }
)

document.getElementById('animat-btn').addEventListener('click',()=> Aragorn.startAnimation('gd', dataframes))
