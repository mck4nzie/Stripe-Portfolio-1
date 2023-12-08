let button= document.querySelector("button");
let orange= document.querySelector(".orange");
let enter= document.querySelector(".enter");
let answer=document.querySelector(".answer");
let submit=document.querySelector(".submit");




button.onclick=function(){
orange.style="color:orange";
};

enter.onclick=function(){
 let input=document.querySelector(".putName").value;
  answer.innerHTML=input;
};



submit.onclick=function(){
let question=document.querySelector(".question").value;
  let colorX=document.querySelector(".colorX")

  let result1 =document.querySelector(".result1");
  let result2 =document.querySelector(".result2");

  if(question==="yes"){
    console.log("ok");
    colorX.style.color="green";
    
  }else{
console.log("no");
    colorX.style.color="red";
    
  }

  
};