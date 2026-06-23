
const items=[
{title:"CHUR BRO",text:"Universal Kiwi gratitude system."},
{title:"YEAH NAH",text:"Translation: No."},
{title:"SWEET AS",text:"Everything is mint."},
{title:"PAVLOVA FACT",text:"New Zealand invented Pavlova."}
];

const memes=[
"Aussie detected. Deploy Pavlovas.",
"The Hilux survived another impossible mission.",
"She'll be right."
];

function rotate(){
 const i=items[Math.floor(Math.random()*items.length)];
 document.getElementById('title').textContent=i.title;
 document.getElementById('content').textContent=i.text;
}

function popup(){
 const p=document.getElementById('popup');
 p.textContent=memes[Math.floor(Math.random()*memes.length)];
 p.classList.remove('hidden');
 setTimeout(()=>p.classList.add('hidden'),4000);
}

rotate();
setInterval(rotate,10000);
setInterval(popup,15000);
