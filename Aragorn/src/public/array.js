let main = document.createElement('div');
main.style.border = '1px solid black';
 let input = document.createElement('input');
 input.setAttribute('type','text');
 input.setAttribute('id','input');

 let submit = document.createElement('button');
 submit.innerText = 'Enqueue'
 submit.setAttribute('id','submit');
 submit.addEventListener("click", ()=>{
     // document.getElementById('submit').addEventListener('change', (e)=>e.target.value);
     let text = document.getElementById('input').value;
     insert(text)})


let dequeueBtn = document.createElement('button');
dequeueBtn.innerText = 'Dequeue';
dequeueBtn.setAttribute('id','dequeueBtn');
dequeueBtn.addEventListener("click", ()=>{
    // document.getElementById('submit').addEventListener('change', (e)=>e.target.value);
    let text = document.getElementById('dequeueBtn').value;
    dequeue()})



 let list = document.createElement('ul');
 list.setAttribute('id', 'list');
 list.style.display = 'flex';
 list.style.flexDirection = 'row';
 list.style.border = '1px solid black';




// ---------------------------------- screen capture




main.appendChild(input);
main.appendChild(submit);
main.appendChild(dequeueBtn);
main.appendChild(list);

document.body.appendChild(main);

// ------------------------------- PIXI -------------------------------------
let PIXI = Aragorn.PIXI;
const app = new PIXI.Application({ width: 1700, height: 750, backgroundColor:0x14171D });
document.body.appendChild(app.view);



const letters = [];
const arrows = [];
function addLetter(letter, parent, color,height,width , pos) {
    const bg =  PIXI.Sprite.from('../imgs/circle.png');
    // const bg = new PIXI.Graphics();
    bg.width = width;
    bg.height = height;
    bg.tint = color;

    const text = new PIXI.Text(letter, {fill: "#fff"});
    text.anchor.set(0.5);
    text.position = {x: 50, y: 50};

    const container = new PIXI.Container();
    container.position = pos;
    container.visible = false;
    container.addChild(bg, text);
    parent.addChild(container);
    Aragorn.Animation.to(bg, 1, {
        pixi: { x: height, lineWidth: 5, fillColor: 0x0088f7 }
    });
    Aragorn.Animation.to(text, 1, {
        pixi: { x: width * 1.5 , y:height/2 , lineWidth: 5 }
    });
    letters.push(container);
    return container;
}
function addArrow(color, width, height , pos, parent){
    const arrow =  PIXI.Sprite.from('../imgs/arrow.png');
    arrow.width = width;
    arrow.height = height;
    arrow.tint = color;
    arrow.position = pos

    Aragorn.Animation.to(arrow, 1, {
        pixi: { y: height , lineWidth: 5,rotation:50 }
    });
    const container = new PIXI.Container();
    container.position = {x:width *1, y:-2*height};
    container.visible = true;
    container.addChild(arrow);
    parent.addChild(container);
    arrows.push(container);
}

// Define height and width
let width = 100;
let height = 100;
let parent = addLetter('list', app.stage, 0xff00ff, height,width,{x: 250, y: 225});
function insert(item){
    if (item){
        let container = addLetter(item, parent, 0xffffff, height,width,{x: letters.length * (width ) , y: 0});
        addArrow(0xff00ff, 50,50,{x:  (letters.length ) * width,y:0}, parent)

    }
    // console.log(letters.length)

}
function  dequeue(){
    if (letters.length > 1){
        letters[letters.length - 1].visible = false;
        arrows[arrows.length - 1].visible = false;
        letters.pop();
        arrows.pop()

    }

}






const bg =  PIXI.Sprite.from('../imgs/smok.png');
bg.position = {x:100, y:0}
bg.width = 1500;
bg.height = 900;
bg.tint = 0x1100ff
Aragorn.Animation.fromTo(bg, 5, {
    pixi: { x: 100 , y:-20, lineWidth: 5, fillColor: 0x0088f7 }},{
    pixi: { x: 100 , y:0, lineWidth: 5, fillColor: 0x0088f7 }
});
app.stage.addChild(bg)

let elapsed = 0.0;
app.ticker.add((delta) => {
    elapsed += delta/60;
    // if (elapsed >= letters.length) { elapsed = 0.0; }
    console.log(letters.length)
    for (let i = 0; i < letters.length; i ++) {
        letters[i].visible = elapsed >= i;

    }




});




