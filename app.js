function getName(frmUrName){ //get var from Input ID UrName
    frmUrName.style.background = "white";
  }
  
  function frmNorm (frmNorm){
    frmNorm.style.background = "gray";
  }
  
  function clickit(){
    var ShowUrName = document.forms["GameForm"]["UrName"].value;
    
    //combine name with nice greet
    var Greeting = "Hello " + ShowUrName + ". <br/>Such a beautiful name. Are you ready to play with me?<br /> I'm \"Imt.\", a Script Bot, by the way."
      //Say Hi to user after getting name from input text with changing page.
      document.getElementById("ShowUrName").innerHTML = Greeting;
      //Introducing game
      var GameIntro = "I have a number, need you to guess.";
      document.getElementById("GameIntro").innerHTML = GameIntro;
  }
  
  function clearemall(){
    document.body.innerHTML = '';
  }