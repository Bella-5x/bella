window.onload=function(){
var next=document.getElementById("next");
var time=document.getElementById('time');
var body=document.getElementById("begin");
var x=8 , y=01; 
var int=1000;
var count=10;


var links=["math_unit1.html","math_exam.html"];

next.href=links[0];

function cout(){

    time.innerHTML=count+" sec";
    if(count>0){
    count--;
    }
    else{
      time.style.top="90px";
      time.style.right="5px";
      time.style.color="black";
      time.style.fontSize="20px";
      body.style.display="none";
      
      retime();
    }
}

  setInterval(cout,1000);

cout();



function timeout(){
next.click();
}


 function retime(){
  
if(y==0 && x==0){
  timeout();
}

    if(y==00){
     y=59;
     x--;
   }
     y--;
   
   if(y<10){
   time.innerHTML=x + " : " + "0" + y;
   }
   else{
     time.innerHTML=x + " : " + y;
   }
   
 }
 if(count==0){
 if(!(x==0 && y==0)){
   setInterval(retime,int);
 }

}//count if

}



