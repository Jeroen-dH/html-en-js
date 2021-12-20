var btn = document.createElement('button');
btn.style.margin = '300px';
document.body.appendChild(btn);
var count = 0;
var a = 0

// schijf hier tussen je code
var COLORS = ['purple','yellow','red','green','blue']


function knop(a){
    if (btn.innerHTML == 'licht uit'){
        console.log("licht aan");
        document.body.style.backgroundColor = 'yellow'; //COLORS[Math.floor(Math.random() * COLORS.length)];
        btn.innerHTML = 'licht aan';
        count = count + 1
    }else {
        console.log("licht uit");
        document.body.style.backgroundColor = "black";
        btn.innerHTML = 'licht uit';
        count = count - 1
    }}
    
document.body.style.backgroundColor = "black";
btn.innerHTML = 'licht uit';
btn.onclick = function() {knop()} 

// schijf hier tussen je code