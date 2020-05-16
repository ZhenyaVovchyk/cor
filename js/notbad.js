const log = (g) => { console.log(g) };


let canvas = document.getElementById('canvas1'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function BacksImg(img) {
    this.img = new Image();
    this.img.src = img;

    this.w = 50;
    this.h = 50;

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * canvas.width;
    this.xx = Math.random() * canvas.width / 2;
    this.yy = Math.random() * canvas.height / 2;
    this.zz = Math.random() * canvas.width * 2;

    this.angle = 0;
    this.direction = Math.floor(Math.random() * 2 - 2 + Math.random() * 1 + 1);
}

let x1, y1;
let recAnimFrame, backs0 = [],
    numBacks = 41;

let img = new Image();
img.src = './img/stop.png';

let aim = new Image();
aim.src = './img/bg.png';

let backs = {
    0: new BacksImg('./img/0.png'),
    1: new BacksImg('./img/1.png'),
    2: new BacksImg('./img/2.png'),
    3: new BacksImg('./img/3.png'),
    4: new BacksImg('./img/4.png'),
    5: new BacksImg('./img/5.png'),
    6: new BacksImg('./img/6.png'),
    7: new BacksImg('./img/7.png'),
    8: new BacksImg('./img/8.png'),
    9: new BacksImg('./img/9.png'),
    10: new BacksImg('./img/10.png'),
    11: new BacksImg('./img/11.png'),
    12: new BacksImg('./img/22.png'),
    13: new BacksImg('./img/13.png'),
    14: new BacksImg('./img/14.png'),
    15: new BacksImg('./img/15.png'),
    16: new BacksImg('./img/16.png'),
    17: new BacksImg('./img/17.png'),
    18: new BacksImg('./img/18.png'),
    19: new BacksImg('./img/19.png'),
    20: new BacksImg('./img/20.png'),
    21: new BacksImg('./img/21.png'),
    22: new BacksImg('./img/22.png'),
    21: new BacksImg('./img/23.png'),
    24: new BacksImg('./img/24.png'),
    25: new BacksImg('./img/25.png'),
    26: new BacksImg('./img/26.png'),
    27: new BacksImg('./img/27.png'),
    28: new BacksImg('./img/28.png'),
    29: new BacksImg('./img/29.png'),
    30: new BacksImg('./img/30.png'),
    31: new BacksImg('./img/31.png'),
    32: new BacksImg('./img/32.png'),
    33: new BacksImg('./img/33.png'),
    34: new BacksImg('./img/34.png'),
    35: new BacksImg('./img/35.png'),
    36: new BacksImg('./img/36.png'),
    37: new BacksImg('./img/37.png'),
    38: new BacksImg('./img/38.png'),
    39: new BacksImg('./img/39.png'),
    40: new BacksImg('./img/40.png'),
    41: new BacksImg('./img/41.png')
}


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
window.addEventListener('load', () => { start(); });
window.addEventListener('dblclick', () => { cancelAnimationFrame(recAnimFrame) });
window.addEventListener('mousemove', (e) => {
    x1 = e.offsetX - 50;
    y1 = e.offsetY - 50;
})



function start() {
    upDate();
    draw();
    recAnimFrame = requestAnimationFrame(start);
}

function upDate() {

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas

    ctx.drawImage(aim, x1, y1, 100, 100); // draw aim

    let ax, ay, ar;
    for (let i in backs) {
        let b = backs[i];
        ax = (b.x - b.xx) * (b.zz / b.z);
        ay = (b.y - b.yy) * (b.zz / b.z);
        ar = 1 * (b.zz / b.z);

        ax += b.xx;
        ay += b.yy;
        b.z--;
        b.angle += b.direction * Math.PI / 180;

        if (b.z <= 0) b.z = canvas.width;


        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.angle);
        ctx.drawImage(b.img, ar / -2, ar / -2, ar + 25, ar + 25); // draw backterias
        ctx.restore();
    };
}