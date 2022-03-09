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
    return data.map((trace, idx)=>{
        let xLength = trace.x ? trace.x.length:0
        let yLength = trace.y ? trace.y.length:0
        let dataLength = Math.max(xLength,yLength);
        return new Array(dataLength).fill(1).map((item, index) => {
            if (xLength && yLength)
                return {
                    data: [{ x: trace.x.slice(0, index + 1), y: trace.y.slice(0, index + 1)}],
                    name: `frame${idx}-${index}`,
                    group: `class${idx}`
                }
            else if (yLength)
                return {
                    data: [{y: trace.y.slice(0, index + 1)}],
                    name: `frame${idx}-${index}`,
                    group: `class${idx}`

                }
            else if (xLength)
                return {
                    data: [{x: trace.x.slice(0, index + 1)}],
                    name: `frame${idx}-${index}`,
                    group: `class${idx}`

                }
            else
                return new Error("invalid data chart.")
        })
    })



}

function creatFrameNames(data){
    return data.map((trace, idx)=>  {
        let xLength = trace.x ? trace.x.length:0
        let yLength = trace.y ? trace.y.length:0
        let dataLength = Math.max(xLength,yLength);
        return new Array(dataLength).fill(1).map((item, index) => `frame${idx}-${index}`)}
)
}

function startChartAnimation(id, cls) {
            // let frameNames = creatFrameNames(data);
            //  frameNames.forEach(trace => {
            //      console.log(trace)
                 Plotly.animate(id,cls, {
                     transition: {
                         duration: 500,
                         easing: 'linear'
                     },
                     frame: {
                         duration: 500,
                         redraw: true,
                     },
                     mode: 'afterall'
                 })
   }



function Chart (id,data, layout){
    let dataframes = creatDataFrames(data);
    Plotly.newPlot(id,data,
        layout? layout :
         { "width": 600, "height": 400}
    ).then(()=>
        dataframes.forEach(trace => {
                Plotly.addFrames(id, trace );
        })

    )
    console.log(dataframes)
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

}
