
import * as Plotly from 'plotly.js-dist-min';
import * as PIXI from 'pixi.js';
import {gsap as Gsap} from "gsap";

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
    wobble
}
