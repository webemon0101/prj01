function calcBMI(){
    let weight= document.getElementById("weight").value ;
    let height= document.getElementById("height").value ;
    let comment="体重と身長を入力してね。"
    let bmi = weight/((height/100)^2);
    if(bmi<18.5){
        comment="やせすぎ！！";
    }else if(bmi>25){
        comment="デブ";
    }else{
        comment="ふつー";
    }
    
    document.getElementById("bmi").textContent=bmi;
    document.getElementById("comment").textContent=comment; 
    

}

function check(){
    let a = document.getElementById("i0").value ;
    let b = document.getElementById("i1").value ;
    document.getElementById("r0").textContent = a==b;

}

function Pen(color, length){
    this.color = color;
    this.length = length;
    this.draw=function(){
        this.length -=1;
    }
}

let penR= new Pen("red", 15);
let penG = new Pen("green", 20);
let penB = new Pen("blue", 8);
let pen =penR;

function stroke(){
    pen.draw();
    let pencil = document.getElementById("pencil");
    pencil.style.width = pen.length + "cm";
    pencil.style.backgroundColor = pen.color;
    pencil.textContent = "色＝"+pen.color+"長さ＝"+pen.length;
}

function pickR(){
    pen= penR;
}

function pickG(){
    pen= penG;
}

function pickB(){
    pen= penB;
}

let colors = ["red", "blue", "green", "yellow", "purple"];
let index = 0;
function insert(){
    let parent = document.getElementById("mylist");
    let item = document.createElement("li");
    item.textContent=colors[index];
    item.style.color = colors[index];
    index = ++index % colors.length;
    parent.appendChild(item);
}

function init(){
    let b= document.getElementById("board");
    for(let i=0;i<8;i++){
        let tr = document.createElement("tr");
        for(let j=0;j<8;j++){
            let td = document.createElement("td");
            td.className="cell";
            td.id="cell"+i+j;
            td.onclick=clicked;
            tr.appendChild(td);
        }
        b.appendChild(tr);
    }
}

function clicked(e){
    document.getElementById(e.target.id).textContent = "O";
}

let timerId=NaN;
let count=0;
function startTimer(){
    clearInterval(timerId);
    timerId=setInterval(tick, 100);
}
function stopTimer(){
    clearInterval(timerId);
}
function tick(){
    count +=0.1;
    document.getElementById("counter").textContent=count;
}


