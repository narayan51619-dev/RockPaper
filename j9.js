let button1=document.getElementById("but1");
let button2=document.getElementById("but2");
let button3=document.getElementById("but3");
const max=3;
const min=0;
let randomchoice;
let para5=document.getElementById("p5");
let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let div3=document.getElementById("div3");
let div4=document.getElementById("div4");
let c1=document.getElementById("c1");
let c2=document.getElementById("c2");
let c3=document.getElementById("c3");
let play=document.getElementById("play");
let play1=document.getElementById("play1");
let play2=document.getElementById("play2");
button1.onclick=function(){
    let para1=document.getElementById("p1");
    let para3=document.getElementById("p3");
     para3.innerHTML="Your Choice";
    para3.style.fontSize="30px";
    para1.innerHTML="🪨";
    para1.style.fontSize="100px";
    let para2=document.getElementById("p2");
    let para4=document.getElementById("p4");
    para4.innerHTML="Computer Choice";
    para4.style.fontSize="30px";
    para2.style.fontSize="100px";
    
    randomchoice=Math.floor(Math.random()*max)+min;
    if(randomchoice==0){
        para2.innerHTML="🪨";
        
    }
    else if(randomchoice==1){
        para2.innerHTML="📄";
        
    }
    else if(randomchoice==2){
        para2.innerHTML="✂️";
        
    }
   switch (randomchoice){
    case 0:
        div4.style.opacity="0.06"
        div2.style.display="block";
        div2.style.visibility="visible";
        div2.style.position="absolute";
        div2.style.bottom="300px";
        div2.style.left="300px";
        div2.style.height="300px";
        div2.style.width="400px";
        div2.style.justifyContent="center"; 
        c2.innerHTML="Your Score=0 <br> Computer Score=0";
        
        break;
    case 1:
         div4.style.opacity="0.06"
        div3.style.display="block";
        div3.style.visibility="visible";
        div3.style.position="absolute";
        div3.style.bottom="300px";
        div3.style.left="300px";
        div3.style.height="300px";
        div3.style.width="400px";
        div3.style.justifyContent="center"; 
        c3.innerHTML="Your Score=0 <br> Computer Score=1";
        break;
    case 2:
        div4.style.opacity="0.06"
        div1.style.display="block";
        div1.style.visibility="visible";
        div1.style.position="absolute";
        div1.style.bottom="300px";
        div1.style.left="300px";
        div1.style.height="300px";
        div1.style.width="400px";
        div1.style.justifyContent="center"; 
        c1.innerHTML="Your Score=1 <br> Computer Score=0";
        break;
    }
}
button2.onclick=function(){
    let para1=document.getElementById("p1");
    let para3=document.getElementById("p3");
    para3.innerHTML="Your Choice";
    para3.style.fontSize="30px";
    para1.innerHTML="📄";
    para1.style.fontSize="100px";
    randomchoice=Math.floor(Math.random()*max)+min;
     let para2=document.getElementById("p2");
     let para4=document.getElementById("p4");
    para4.innerHTML="Computer Choice";
    para4.style.fontSize="30px";
    para2.style.fontSize="100px";
    if(randomchoice==0){
        para2.innerHTML="🪨";
       
    }
    else if(randomchoice==1){
        para2.innerHTML="📄";
    }
    else if(randomchoice==2){
        para2.innerHTML="✂️";
    }
    if (randomchoice==0){

    }
    switch (randomchoice){
    case 0:
            div4.style.opacity="0.06"
        div1.style.display="block";
        div1.style.visibility="visible";
        div1.style.position="absolute";
        div1.style.bottom="300px";
        div1.style.left="300px";
        div1.style.height="300px";
        div1.style.width="400px";
        div1.style.justifyContent="center"; 
        c1.innerHTML="Your Score=1 <br> Computer Score=0";
        break;
    case 1:
         div4.style.opacity="0.06"
        div2.style.display="block";
        div2.style.visibility="visible";
        div2.style.position="absolute";
        div2.style.bottom="300px";
        div2.style.left="300px";
        div2.style.height="300px";
        div2.style.width="400px";
        div2.style.justifyContent="center"; 
        c2.innerHTML="Your Score=0 <br> Computer Score=0";
        break;
    case 2:
        div4.style.opacity="0.06"
        div3.style.display="block";
        div3.style.visibility="visible";
        div3.style.position="absolute";
        div3.style.bottom="300px";
        div3.style.left="300px";
        div3.style.height="300px";
        div3.style.width="400px";
        div3.style.justifyContent="center"; 
        c3.innerHTML="Your Score=0 <br> Computer Score=1";
        break;
    }
}
button3.onclick=function(){
    let para1=document.getElementById("p1");
    let para3=document.getElementById("p3");
     para3.innerHTML="Your Choice";
    para3.style.fontSize="30px";
    para1.innerHTML="✂️";
    para1.style.fontSize="100px";
    randomchoice=Math.floor(Math.random()*max)+min;
     let para2=document.getElementById("p2");
     let para4=document.getElementById("p4");
    para4.innerHTML="Computer Choice";
    para4.style.fontSize="30px";
    para2.style.fontSize="100px";
    if(randomchoice==0){
        para2.innerHTML="🪨";
    }
    else if(randomchoice==1){
        para2.innerHTML="📄";
    }
    else if(randomchoice==2){
        para2.innerHTML="✂️";
    }
    switch (randomchoice){
    case 0:
        div4.style.opacity="0.06"
        div3.style.display="block";
        div3.style.visibility="visible";
        div3.style.position="absolute";
        div3.style.bottom="300px";
        div3.style.left="300px";
        div3.style.height="300px";
        div3.style.width="400px";
        div3.style.justifyContent="center"; 
        c3.innerHTML="Your Score=0 <br> Computer Score=1";
        break;
    case 1:
        div4.style.opacity="0.06"
        div1.style.display="block";
        div1.style.visibility="visible";
        div1.style.position="absolute";
        div1.style.bottom="300px";
        div1.style.left="300px";
        div1.style.height="300px";
        div1.style.width="400px";
        div1.style.justifyContent="center"; 
        c1.innerHTML="Your Score=1 <br> Computer Score=0";
        break;
    case 2:
          div4.style.opacity="0.06"
        div2.style.display="block";
        div2.style.visibility="visible";
        div2.style.position="absolute";
        div2.style.bottom="300px";
        div2.style.left="300px";
        div2.style.height="300px";
        div2.style.width="400px";
        div2.style.justifyContent="center"; 
        c2.innerHTML="Your Score=0 <br> Computer Score=0";
        break;
    
    }  

}
play.onclick=function(){
    div4.style.opacity="1";
    div1.style.display="none";
    div2.style.display="none";
    div3.style.display="none";
} 
play1.onclick=function(){
    div4.style.opacity="1";
    div1.style.display="none";
    div2.style.display="none";
    div3.style.display="none";
} 
play2.onclick=function(){
    div4.style.opacity="1";
    div1.style.display="none";
    div2.style.display="none";
    div3.style.display="none";
} 
