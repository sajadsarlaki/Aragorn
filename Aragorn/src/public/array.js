let main = document.createElement('div');
main.style.border = '1px solid black';
 let input = document.createElement('input');
 input.setAttribute('type','text');
 input.setAttribute('id','input');

 let submit = document.createElement('input');
 submit.setAttribute('type','submit');
 submit.addEventListener("click", ()=>{
     // document.getElementById('submit').addEventListener('change', (e)=>e.target.value);
     let text = document.getElementById('input').value;
     insert(text)})

 let list = document.createElement('ul');
 list.setAttribute('id', 'list');
 list.style.display = 'flex';
 list.style.flexDirection = 'row';
 list.style.border = '1px solid black';


main.appendChild(input);
main.appendChild(submit);
main.appendChild(list);
document.body.appendChild(main);





let PIXI = Aragorn.PIXI;
// const app = new PIXI.Application({
//     width: 500 ,
//     height: 500 ,
//     backgroundAlpha:0.1
// });
// var graphics = new PIXI.Graphics();
// graphics.beginFill('green'); // Red
// graphics.drawCircle(60, 185, 40); // drawCircle(x, y, radius)
//
// var text1 = new PIXI.Text('1', { font: '16px SegoeUI' });
// text1.position.x = 60;
// text1.position.y = 185;
// app.stage.addChild(text1);
// // app.stage.addChild(text);
// app.stage.addChild(graphics)
//
//
//
// document.getElementById('list').appendChild(app.view);


// Create the application helper and add its render target to the page
// Create the application helper and add its render target to the page
const app = new PIXI.Application({ width: 1200, height: 800 });
document.body.appendChild(app.view);

// // Label showing scene graph hierarchy
// const label = new PIXI.Text('Scene Graph:\n\napp.stage\n  ┗ A\n     ┗ B\n     ┗ C\n  ┗ D', {fill: '#ffffff'});
// label.position = {x: 300, y: 100};
// app.stage.addChild(label);

// Helper function to create a block of color with a letter
const letters = [];
function addLetter(letter, parent, color,height,width , pos) {
    const bg = new PIXI.Sprite(PIXI.Texture.WHITE);
    bg.width = width;
    bg.height = height;
    bg.tint = color;

    const text = new PIXI.Text(letter, {fill: "#ffffff"});
    text.anchor.set(0.5);
    text.position = {x: 50, y: 50};

    const container = new PIXI.Container();
    container.position = pos;
    container.visible = false;
    container.addChild(bg, text);
    parent.addChild(container);

    letters.push(container);
    return container;
}
function addLine(color , pos, parent){
    let line = new PIXI.Graphics();
// Arbitrary line style, say we have a non-white background
    line.lineStyle(8,color,1);
    line.moveTo(pos.x,pos.y);
    line.bezierCurveTo(0,pos.y,pos.x +20,20,pos.x,pos.y)



    const container = new PIXI.Container();
    container.position = {x:0, y:0};
    container.visible = true;
    container.addChild(line);
    parent.addChild(container);


}


// insert item

// Define 4 letters
let width = 200;
let height = 200;

let parent = addLetter('A', app.stage, 0xff0000, height,width,{x: 200, y: 200});


function insert(item){
    console.log(letters.length)
    let container = addLetter(item, parent, 0xffffff, height,width,{x: letters.length * width, y: 0});
    addLine(0x0000ff,{x: 100 + letters.length * width,y:180}, app.stage)

}
// Display them over time, in order
let elapsed = 0.0;
app.ticker.add((delta) => {
    elapsed += delta/60;
    // if (elapsed >= letters.length) { elapsed = 0.0; }
    for (let i = 0; i < letters.length; i ++) {
        letters[i].visible = elapsed >= i;
    }
});
