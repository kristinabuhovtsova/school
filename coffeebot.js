
const lst=document.getElementsByClassName('menu');
let screen=document.getElementById('screen')
const prices = {
    "Эспрессо" : 90,
    "Латте": 130,
    "Капучино": 110, 
    "Банановый латте": 150,
    "Ванильный капучино": 150,
    "Флэт уайт": 100,
    "Молоко": 25,
    "Вишневый сироп": 35
}
const volumes = {
    "Эспрессо" : 100,
    "Латте": 250,
    "Капучино": 250, 
    "Банановый латте":300,
    "Ванильный капучино":300,
    "Флэт уайт":280,
    "Молоко":50,
    "Вишневый сироп":50
}

var glass250=5
var glass380=6
var milkvolume=1000
var syropvolume=1500
var glass=0

for (var i = 0; i < lst.length; i++) {
    lst[i].addEventListener("click", CoffeeChoose)
}
var order=[]
var totalprice=0
var milkcheck=true
var syropcheck=true
document.getElementById("repeal").addEventListener("click", Reset)
function VolOrder() {
  let vol=0
  order.forEach(function(el) {
    vol+= volumes[el]
  })
  return vol
}
function Reset () {
    milkcheck=true
    syropcheck=true
    if (order.indexOf("Латте")!==-1) {
      let cnt=0
      order.forEach(function(el) {if (el==="Латте") {cnt++}});
      milkvolume+=cnt*100
    }
    if (order.indexOf("Капучино")!==-1) {
      let cnt=0
      order.forEach(function(el) {if (el==="Капучино") {cnt++}});
      milkvolume+=cnt*80
    }
    if (order.indexOf("Флэт уайт")!==-1) {
      let cnt=0
      order.forEach(function(el) {if (el==="Фдэт уайт") {cnt++}});
      milkvolume+=cnt*120
    }
    if (order.indexOf("Молоко")!==-1) {
      let cnt=0
      order.forEach(function(el) {if (el==="Молоко") {cnt++}});
      milkvolume+=cnt*50
    }
    if (order.indexOf("Вишневый сироп")!==-1) {
      let cnt=0
      order.forEach(function(el) {if (el==="Вишневый сироп") {cnt++}});
      syropvolume+=cnt*50
    }
    order=[]
    totalprice=0
    
    screen.innerHTML=""
    glass=1

}
function CoffeeChoose () {
    if (glass250>0){
      glass=1
    }
    else {
      glass=2
    }
    if (VolOrder()+volumes[this.innerHTML]>380 || glass===1 && glass380===0 && VolOrder()+volumes[this.innerHTML]>250){
      screen.innerHTML="Стакан уже заполнен"
      window.setTimeout(function() {
           screen.innerHTML=String(order.join(' '))+ " " + totalprice;}, 1000);
    }
    else {if (VolOrder()+volumes[this.innerHTML]>250) {
      glass=2
    }
    order.push(this.innerHTML)
    if (order.indexOf("Латте")!==-1){
      if (milkvolume <100){
        order.splice(order.indexOf("Латте"),1)
        milkcheck=false
        screen.innerHTML="Не хватает молока"
        window.setTimeout(function() {
            screen.innerHTML="";}, 1000);
      }
      else{milkvolume-=100}
    }
    if (order.indexOf("Капучино")!==-1){
      if (milkvolume <80){
        order.splice(order.indexOf("Капучино"),1)
        milkcheck=false
        screen.innerHTML="Не хватает молока"
        window.setTimeout(function() {
            screen.innerHTML="";}, 1000);
      }
      else{milkvolume-=80}}
    if (order.indexOf("Флэт уайт")!==-1){
      if (milkvolume <120){
        order.splice(order.indexOf("Флэт уайт"),1)
        screen.innerHTML="Не хватает молока"
        milkcheck=false
        screen.innerHTML="Не хватает молока"  
        window.setTimeout(function() {
            screen.innerHTML="";}, 1000)
      }
      else{milkvolume-=120}}
    totalprice+=prices[this.innerHTML]
    console.log(5)
    if (milkcheck){
      console.log(1)
      if (order.length>1)
        {screen.innerHTML=String(order.length)+"-ой " + String(order[0]) +" " + String(totalprice)
        console.log(2)}
    else {screen.innerHTML=String(order[0])+ " " + String(totalprice)}
    milkcheck=true
    }
}}
document.getElementById('milk').addEventListener("click", AddMilk)
document.getElementById('syrop').addEventListener("click", AddSyrop)

function AddMilk(){
    if (order===[]){
      if (glass250>0){
      glass=1
    }
    else {
      glass=2
    }
    }
    if (VolOrder()+volumes[this.innerHTML]>380 || glass===1 && glass380===0 && VolOrder()+volumes[this.innerHTML]>250){
      screen.innerHTML="Стакан уже заполнен"
      window.setTimeout(function() {
           screen.innerHTML=String(order.join(' '))+ " " + totalprice;}, 1000);
    }
    else {if (VolOrder()+volumes[this.innerHTML]>250) {
      glass=2
    }
    order.push(this.innerHTML)
    if (order.indexOf("Молоко")!==-1){
      if (milkvolume <50){
        order.splice(order.indexOf("Молоко"),1)
        milkcheck=false
        screen.innerHTML="Не хватает молока"
        window.setTimeout(function() {
            screen.innerHTML=String(order.join(' '))+ " " + totalprice;}, 1000);
      }
      else{milkvolume-=50}}
      if (milkcheck){
        totalprice+=prices[this.innerHTML]
        screen.innerHTML=String(order.join(' ')) + " " + totalprice
      }
      milkcheck=true
      console.log(VolOrder())
}
}
function AddSyrop (){
  if (VolOrder()+volumes[this.innerHTML]>380 || glass===1 && glass380===0 && VolOrder()+volumes[this.innerHTML]>250){
      screen.innerHTML="Стакан уже заполнен"
      window.setTimeout(function() {
           screen.innerHTML=String(order.join(' '))+ " " + totalprice;}, 1000);
    }
    else {if (VolOrder()+volumes[this.innerHTML]>250) {
      glass=2
    }
    order.push(this.innerHTML)
    if (order.indexOf("Вишневый сироп")!==-1){
      if (syropvolume <50){
        order.splice(order.indexOf("Вишневый сироп"),1)
        syropcheck=false
        screen.innerHTML="Не хватает cиропа"
        window.setTimeout(function() {
            screen.innerHTML=String(order.join(' '))+ " " + totalprice;}, 1000);
      }
      else{syropvolume-=50}}
      if (syropcheck){
        totalprice+=prices[this.innerHTML]
        screen.innerHTML=String(order.join(' ')) + " " + totalprice
      }
    syropcheck=true
    let cnt=0
    order.forEach(function(el) {if (el==="Вишневый сироп") {cnt++}})
    if (cnt==2) {
      document.getElementById('syrop').disabled=true
    }
}}
var check=true
var audio = new Audio()
var timer1=0
var timer2=0
document.getElementById('payment').addEventListener("click", Pay) 
function Pay () {
            document.getElementById("screen").innerHTML="<div id='progress'></div><div id='green'></div>"
            let el=document.getElementById("green")
            if ((order.indexOf("Банановый латте")!==-1) || (order.indexOf("Ванильный капучино")!==-1)|| (order.indexOf("Флэт уайт")!==-1)){
              var cooktime=5000
            }
            else if ((order.indexOf("Эспрессо")!==-1) || (order.indexOf("Латте")!==-1)|| (order.indexOf("Капучино")!==-1)|| ((order.indexOf("Молоко")!==-1) && (order.length===1))) {
              var cooktime=3000
            }
            if (((order.indexOf("Молоко")!==-1)&& (order.length!==1)) || (order.indexOf("Вишневый сироп")!==-1)){
              var cooktime=8000
            }
            let width=0;
            const st=setInterval(frame, (cooktime/100)) 
            function frame () {
              if (width>=100) {
                  clearInterval(st);
              } else {
                width++
                el.style.width=width + '%';
                el.innerHTML=width*1+'%'
              }
            }

            window.setTimeout(function() {
            document.getElementById("ready").innerHTML="<img src='cof.jpg'>";}, cooktime);
            audio.src = 'Sound.mp3';
            timer1=window.setTimeout(function() {
              audio.play()
             }, cooktime+5000) 
            timer2=window.setTimeout(function() {
              check=false
              document.getElementById("screen").innerHTML="НАПИТОК В ЗОНЕ ВЫДАЧИ"
              audio.pause();
              audio.currentTime=0.0
              }, cooktime+20000) 
            
}
document.getElementById("ready").addEventListener("click", Finish)
function Finish () {
              document.getElementById('syrop').disabled=false
              document.getElementById('ready').display="none"
              if (glass===1) {
                glass250-=1
              }
              else {
                glass380-=1
              }
              clearTimeout(timer1)
              clearTimeout(timer2)
              if (check) {
              prog=document.getElementById("progress")
              prog.parentNode.removeChild(prog)
              prog=document.getElementById("green")
              prog.parentNode.removeChild(prog)
              }
              prog=document.querySelector("img")
              prog.parentNode.removeChild(prog)
              screen.innerHTML=""
              order=[]
              totalprice=0
              audio.pause();
              audio.currentTime=0.0
              if (glass250===0 && glass380===0){
                screen.innerHTML="Нет стаканов"
              }
      }
            