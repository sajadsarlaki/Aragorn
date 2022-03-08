

var baseLayout = {
    title: 'Watermark Template',
    // items with a `name` attribute in template.images will be added to any
    // plot using this template
    images: [{
        name: 'watermark_1',
        // source: "https://raw.githubusercontent.com/michaelbabyn/plot_data/master/benzene.png",
        xref: "paper",
        yref: "paper",
        x: 0.40,
        y: 0.9,
        sizex: 0.7,
        sizey: 0.7,
        opacity: 0.1,
        layer: "below"
    },
        {
            name: 'watermark_2',
            source: "https://raw.githubusercontent.com/michaelbabyn/plot_data/master/naphthalene.png",
            xref: "paper",
            yref: "paper",
            x: .75,
            y: 0.3,
            sizex: 0.25,
            sizey: 0.25,
            sizing: "stretch",
            opacity: 0.2,
            layer: "below"
        }],
    showlegend: false
};

var template = {data: {}, layout: {
    // paper_bgcolor:'rgba(0,0,0,0)',
    //     plot_bgcolor:'rgba(0,0,0,0)'
        }
};

var data = [{
    x: [0, 1, 2, 3, 4, 5],
    y: [2, 4, 3, 0, 5, 6],
}];



var layoutUsingTemplate = {
    template: template,

    images: [
        {
            // set the second watermark in the template to be invisible
            templateitemname: 'watermark_2',
            visible: false
        }
    ]
};


Aragorn.Plotly.newPlot("myDiv", data, layoutUsingTemplate,{showSendToCloud:true}).then(function () {
    Aragorn.Plotly.addFrames('myDiv', [
        {
            data: [{x: [0,0,0,0,0,0],y: [0,0,0,0,0,0]}],
            name: 'frame1'
        }, {
            data:data,
            name: 'frame2'
        }
    ]);
});
function startAnimation() {
    Aragorn.Plotly.animate('myDiv', ['frame1', 'frame2'], {
        frame: [
            {duration: 1500},
            {duration: 500},
        ],
        transition: [
            {duration: 800, easing: 'elastic-in'},
            {duration: 100, easing: 'cubic-in'},
        ],
        mode: 'afterall'
    })}
Aragorn.Gsap.to("#myDiv", {rotation: 360, x: 100, duration: 1});
