let display2=document.querySelector(".sec");

  let display3= document.querySelector(".wpm");
  
  let textarea = document.querySelector(".ip");
  let timeLeft = 60;
  let id;
  let orignalText = "";
  function time(){
      
    if(timeLeft===-1){
      clearInterval(id);
      textarea.disabled = true;
      
      return;
    }
    
    display2.innerText=` Time : ${timeLeft} `;
    timeLeft --;
  }
  
  function startGame(){
   textarea.value = "";
    textarea.disabled = false;
    textarea.focus();
    let prev2 = localStorage.getItem("key2") || 0;
    document.querySelector(".wpm").innerText = `WPM : ${prev2}`
    let prev = localStorage.getItem("key") || 0;
    document.querySelector(".acc").innerText = `Accuracy : ${prev}%`;    
    
  const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is a powerful programming language.",
  "Practice daily to improve your coding skills.",
  "Consistency beats motivation every time."
];
  
  let randomSentence = Math.floor(Math.random()*sentences.length);
  let display = document.querySelector(".randomText");
  display.innerText = sentences[randomSentence];
    
    
    
     timeLeft=60;
    clearInterval(id);
   id= setInterval(time,1000);
    
     orignalText = sentences[randomSentence];
   
     
    }
   
     
 
  
  function wordspm(){
    let typedWords=textarea.value;
     let words = typedWords.trim().split(" ").filter((word)=>word !== "");
    
    let timeWehave = 60 - timeLeft;
    if(timeWehave>0){
    let wpm = Math.floor((words.length/timeWehave) * 60);
    display3.innerText = ` WPM : ${wpm} `
    localStorage.setItem("key2",wpm);
    }
   
  }
  // accuracy
  
  function Accuracy(){
    let correct = 0;
    
    let typedWords=textarea.value;
    if(typedWords.length===0){
      document.querySelector(".acc").innerText=`Accuracy : 0 %`;
      return;
    }
    
      for(let i=0;i<Math.min(typedWords.length,orignalText.length);i++){
        if(typedWords[i]===orignalText[i]){
          correct ++;
        }
      }
        
    
    let accuracy= (correct/orignalText.length)*100;
    let change = document.querySelector(".acc");
    change.innerText = ` Accuracy : ${accuracy.toFixed(2)}%`;
        localStorage.setItem("key",accuracy.toFixed(2));
    
  }
  
  
  let newBtn = document.querySelectorAll(".btn");
  newBtn[0].addEventListener("click",startGame);
  newBtn[1].addEventListener("click",startGame);
  textarea.addEventListener("input",wordspm);
  textarea.addEventListener("input",Accuracy);

