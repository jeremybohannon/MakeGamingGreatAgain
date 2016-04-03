window.addEventListener('load', function () {

  var supporters = document.getElementById("supporters");
  var hair = document.getElementById("hair");
  var china = document.getElementById("china");
  var wall = document.getElementById("wall");
  var remark = document.getElementById("remark");
  var joke = document.getElementById("joke");
  var per = document.getElementById("supportersPer");

  var count;
  var hairCount, chinaCount, wallCount, remarkCount, jokeCount, perCount;
  var hairPer, chinaPer, wallPer, remarkPer, jokePer;
  hairPer = chinaPer = wallPer = remarkPer = jokePer = perCount = 0.00;

  var account;
   do{
    account = prompt("Please enter account name: ");
    if(account === "") alert("You pressed ok, but the input box was emptym your account is: " + "Default_Name")
    if(!account) account = "Default_Name";
   }while( account === "");

   var fb = new Firebase("makegaminggreat.firebaseio.com/users/" + account );

   fb.once("value", function(snapshot){
     if(!snapshot.exists()){
       fb.set({
         count: 0,
         hair: 15,
         china: 100,
         wall: 1000,
         remark: 12000,
         joke: 24000,
         per: 0,
         hairPer: 0,
         chinaPer: 0,
         wallPer: 0,
         remarkPer: 0,
         jokePer: 0
       });
       alert("Your game can now be accessed with name: " + account);
     }
   });


    fb.child("count").on("value", function(data){
      count = data.val();
    });

    fb.child("per").on("value", function(data){
      perCount = data.val();
    });

    fb.child("hair").on("value", function(data){
      hairCount = data.val();
    });
    fb.child("hairPer").on("value", function(data){
      hairPer = data.val();
    });

    fb.child("china").on("value", function(data){
      chinaCount = data.val();
    });
    fb.child("chinaPer").on("value", function(data){
      chinaPer = data.val();
    });

    fb.child("wall").on("value", function(data){
      wallCount = data.val();
    });
    fb.child("wallPer").on("value", function(data){
      wallPer = data.val();
    });

    fb.child("remark").on("value", function(data){
      remarkCount = data.val();
    });
    fb.child("remarkPer").on("value", function(data){
      remarkPer = data.val();
    });

    fb.child("joke").on("value", function(data){
      jokeCount = data.val();
          updateHTML();
    });
    fb.child("jokePer").on("value", function(data){
      jokePer = data.val();
    });


  hat.style.cursor = 'pointer';

  hat.onclick = function() {
    count++;
    fb.update({
      count: count
    });
    updateHTML();
  };

  btnHair.style.cursor = 'pointer';

  btnHair.onclick = function() {
    if(count >= hairCount){
      count -= hairCount;
      hairCount += Math.ceil(hairCount / 6);
      console.log(hairPer);
      if(hairPer == 0.00){
        hairPer = .1;
      } else {
        hairPer += hairPer *.2;
      }
      updateHTML();
      update();
    }
  };

  btnChina.style.cursor = 'pointer';

  btnChina.onclick = function() {
    if(count >= chinaCount){
      count -= chinaCount;
      chinaCount += Math.ceil(chinaCount / 5);
      if(chinaPer == 0.00){
        chinaPer = 1;
      } else {
        chinaPer += chinaPer *.5;
      }
      updateHTML();
      update();
    }
  };

  btnWall.style.cursor = 'pointer';

  btnWall.onclick = function() {
    if(count >= wallCount){
      count -= wallCount;
      wallCount += Math.ceil(wallCount / 4);
      if(wallPer == 0.00){
        wallPer = 30;
      } else {
        wallPer += wallPer *2;
      }
      updateHTML();
      update();
    }
  };

  btnRemark.style.cursor = 'pointer';

  btnRemark.onclick = function() {
    if(count >= remarkCount){
      count -= remarkCount;
      remarkCount += Math.ceil(remarkCount / 3);
        remarkPer = 100;
      } else {
        remarkPer += remarkPer * 3;
      }
      updateHTML();
      update();
    };

  btnJoke.style.cursor = 'pointer';

  btnJoke.onclick = function() {
    if(count >= jokeCount){
      count -= jokeCount;
      jokeCount += Math.ceil(jokeCount / 2);
      if(jokePer == 0.00){
        jokePer = 10000;
      } else {
        jokePer += jokePer * 5;
      }
      updateHTML();
      update();
    }
  };

  setInterval(function(){
    calculateCount();
    update();
    updateHTML();
  }, 1000);


  function calculateCount(){

      percount = hairPer + chinaPer + wallPer + remarkPer + jokePer;
      count += perCount;
      perCount = Math.floor(percount * 100) / 100;

  };

  function updateHTML(){
    supporters.innerHTML = Math.floor(count);
    hair.innerHTML = hairCount;
    china.innerHTML = chinaCount;
    wall.innerHTML = wallCount;
    remark.innerHTML = remarkCount;
    joke.innerHTML = jokeCount;
    per.innerHTML = perCount;

    validPerase(hairCount, hair);
    validPerase(chinaCount, china);
    validPerase(wallCount, wall);
    validPerase(remarkCount, remark);
    validPerase(jokeCount, joke);

  };

  function validPerase(typeCount, type){
    if(typeCount > count){
      type.style.color = "#f66";
    } else {
      type.style.color = "lightgrey";
    }
  };



  function update(){
    fb.update({
      count: count,
      hair: hairCount,
      china: chinaCount,
      wall: wallCount,
      remark: remarkCount,
      joke: jokeCount,
      hairPer: hairPer,
      chinaPer: chinaPer,
      wallPer: wallPer,
      remarkPer: remarkPer,
      jokePer: jokePer,
      per: perCount
    });
  };
  
  
});
