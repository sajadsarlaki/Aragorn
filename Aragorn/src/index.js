import * as Plotly from 'plotly.js-dist-min';
import * as PIXI from 'pixi.js';
import {gsap as Gsap} from "gsap";

// text Animations
const rollIn = (el, opt) => {
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
const tada = (el, opt) => {
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
const flash = (el, opt) => {
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
const bounce = (el, opt) => {
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
const swing = (el, opt) => {
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
const shake = (el, opt) => {
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
const wobble = (el, opt) => {
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
const pulse = (el, opt) => {
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
const flip = (el, opt) => {
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
const flipInX = (el, opt) => {
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
const flipInY = (el, opt) => {
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
const fadeIn = (el, opt) => {
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
                name: `frame${index}`
            }
        else if (yLength)
            return {
                data: [{y: data[0].y.slice(0, index + 1)}],
                name: `frame${index}`
            }
        else if (xLength)
            return {
                data: [{x: data[0].x.slice(0, index + 1)}],
                name: `frame${index}`
            }
        else
            return new Error("invalid data chart.")


    })
}

function creatFrameNames(data){
    return data[0].x.map((item, index) => `frame${index}`)
}

function startAnimation(id, frameNames) {
    Plotly.animate(id, frameNames, {
        frame: [
            {duration: 1000},
            {duration: 500},
        ],
        transition: [
            {duration: 800, easing: 'elastic-in'},
            {duration: 100, easing: 'cubic-in'},
        ],
        mode: 'afterall'
    })}


export {
    Plotly,
    PIXI,
    Gsap,
    rollIn,
    tada,
    flash,
    shake,
    fadeIn,
    flip,
    flipInX,
    flipInY,
    pulse,
    swing,
    bounce,
    wobble,
    creatDataFrames,
    creatFrameNames,
    startAnimation
}
