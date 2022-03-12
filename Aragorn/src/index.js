import * as Plotly from 'plotly.js-dist-min';
import * as PIXI from 'pixi.js';
import {gsap as Animation} from "gsap";

// text Animations
const textRollIn = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
        {...opt,
            selector: '.texts',
            loop: true,
            minDisplayTime: 2000,
            autoStart: true,
            in: {
                effect: 'rollIn',
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: true,
                reverse: false,
                callback: function () {}
            },
            out: {
                effect: 'wobble',
                delayScale: 1.5,
                delay: 50,
                sequence:true,
                callback: function () {}
            },
        })
}
const textTada = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'tada',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })
}
const textFlash = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'flash',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })
}
const textBounce = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'bounce',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })}
const textSwing = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'swing',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })}
const textShake = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'shake',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })}
const textWobble = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })}
const textPulse = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'pulse',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })}
const textFlip = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'flip',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })}
const textFlipInX = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'flipInX',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })}
const textFlipInY = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'flipInY',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })}
const textFadeIn = (el, opt) => {
    $(el).textillate(
        opt? {...opt,inEffects: ['rollIn']}:
            {...opt,
                selector: '.texts',
                loop: true,
                minDisplayTime: 2000,
                autoStart: true,
                in: {
                    effect: 'fadeIn',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: true,
                    reverse: false,
                    callback: function () {}
                },
                out: {
                    effect: 'wobble',
                    delayScale: 1.5,
                    delay: 50,
                    sequence:true,
                    callback: function () {}
                },
            })}



// chart animations
function creatDataFrames(data){
        let xLength = data[0].x ? data[0].x.length:0
        let yLength = data[0].y ? data[0].y.length:0
        let dataLength = Math.max(xLength,yLength);
        return new Array(dataLength).fill(1).map((item, index) => {
            if (xLength && yLength)
                return {
                    data: [{ x: data[0].x.slice(0, index + 1), y: data[0].y.slice(0, index + 1)}],
                    name: `frame${index}`,
                    // group: `class${idx}`
                }
            else if (yLength)
                return {
                    data: [{y: data[0].y.slice(0, index + 1)}],
                    name: `frame${index}`,
                    // group: `class${idx}`

                }
            else if (xLength)
                return {
                    data: [{x: data[0].x.slice(0, index + 1)}],
                    name: `frame${index}`,
                    // group: `class${idx}`

                }
            else
                return new Error("invalid data chart.")
        })




}

function creatFrameNames(data, NOF){
        let xLength = data[0].x  ? data[0].x.length:0;
        let yLength = data[0].y  ? data[0].y.length:0;
        let dataLength = Math.max(xLength,yLength);
        return new Array(dataLength).fill(1).map((item, index) => {
            if(index % NOF === 0 || index === dataLength-1)
            return `frame${index}`})
}

function startChartAnimation(id, cls, duration) {
            // let frameNames = creatFrameNames(data);
            //  frameNames.forEach(trace => {
            //      console.log(trace)
                 Plotly.animate(id,cls, {
                     frame: [
                         {duration: duration},
                         {duration: duration},
                     ],
                     transition: [
                         {duration: 500, easing: 'elastic-in'},
                         {duration: 500, easing: 'cubic-in'},
                     ],
                     mode: 'afterall'
                 })
   }



function Chart (id,actual, data, layout){
    let dataframes = creatDataFrames(data);
    console.log(dataframes)
    if (actual)
    Plotly.newPlot(id,data,
        layout? layout :
         { "width": 600, "height": 400}
    ).then(()=>
                Plotly.addFrames(id, dataframes )

    )
else {
        Plotly.react(id,data,
            layout? layout :
                { "width": 600, "height": 400}
        ).then(()=>
            Plotly.addFrames(id, dataframes )

        )
    }


}


function drawFunc (id, func, start, end, step, layout) {
    let Ys = []
    let Xs = []
    for (let i = start; i <= end; i+=step) {
        Xs.push(i)
        Ys.push(func(i));
    }
    const data = [{x:Xs, y:Ys}];
    Plotly.newPlot(id,data,
        layout? layout :
            { "width": 800, "height": 600}
    )




}
function fantasyDrawFunc (id, actual, func, start, end, step, NOF, duration ,layout ){

    let Ys = []
    let Xs = []
    for (let i = start; i <= end; i+=step) {
        Xs.push(i)
        Ys.push(func(i));
    }
    const data = [{x:Xs, y:Ys}];
    Chart(id, actual, data, layout)
    const names = creatFrameNames(data, NOF);
    setTimeout(()=>startChartAnimation(id, names, duration),30)
}

export {
    Plotly,
    PIXI,
    Animation,
    textFlipInX,
    textFlash,
    textFlip,
    textPulse,
    textFlipInY,
    textRollIn,
    textShake,
    textSwing,
    textTada,
    textWobble,
    textBounce,
    textFadeIn,
    creatDataFrames,
    creatFrameNames,
    startChartAnimation,
    Chart,
    drawFunc,
    fantasyDrawFunc

}
