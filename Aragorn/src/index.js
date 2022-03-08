
import Plotly from 'plotly.js-dist-min';
import * as PIXI from 'pixi.js';
import {gsap as Gsap} from "gsap";

const rollin = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'rollIn'}});
}
const tada = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'tada'}});
}
const flash = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'flash'}});
}
const bounce = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'bounce'}});
}
const swing = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'swing'}});
}
const shake = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'shake'}});
}
const wobble = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'wobble'}});
}

const pulse = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'pulse'}});
}
const flip = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'flip'}});
}
const flipInX = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'flipInX'}});
}
const flipInY = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'flipInY'}});
}
const fadeIn = (el, opt) => {
    $(el).textillate({...opt, in:{effect:'fadeIn'}});
}



export {
    Plotly,
    PIXI,
    Gsap,
    rollin,
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
