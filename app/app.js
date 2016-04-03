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
  hairPer = chinaPer = wallPer = remarkPer = jokePer = perCount = 0;

  var account;
   account = prompt("Please enter account name: ");

   var fb = new Firebase("https://testingthis123.firebaseio.com/users/" + account );

   fb.once("value", function(snapshot){
     if(!snapshot.exists()){
       fb.set({
         count: 0,
         hair: 15,
         china: 100,
         wall: 1000,
         remark: 12000,
         joke: 24000,
         per: 0
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

    fb.child("china").on("value", function(data){
      chinaCount = data.val();
    });

    fb.child("wall").on("value", function(data){
      wallCount = data.val();
    });

    fb.child("remark").on("value", function(data){
      remarkCount = data.val();
    });

    fb.child("joke").on("value", function(data){
      jokeCount = data.val();
          updateHTML();
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
      hairCount += Math.ceil(hairCount / 4);
      if(hairPer == 0){
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
      chinaCount += Math.ceil(chinaCount / 4);
      if(chinaPer == 0){
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
      if(wallPer == 0){
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
      remarkCount += Math.ceil(remarkCount / 4);
      if(remarkPer == 0){
        remarkPer = 100;
      } else {
        remarkPer += remarkPer * 3;
      }
      updateHTML();
      update();
    }
  };

  btnJoke.style.cursor = 'pointer';

  btnJoke.onclick = function() {
    if(count >= jokeCount){
      count -= jokeCount;
      jokeCount += Math.ceil(jokeCount / 4);
      if(jokePer == 0){
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
    perCount = hairPer + chinaPer + wallPer + remarkPer + jokePer;
    perCount = Math.round(perCount * 100) / 100
    count += perCount;
  };

  function updateHTML(){
    supporters.innerHTML = Math.floor(count);
    hair.innerHTML = hairCount;
    china.innerHTML = chinaCount;
    wall.innerHTML = wallCount;
    remark.innerHTML = remarkCount;
    joke.innerHTML = jokeCount;
    per.innerHTML = perCount;

    validPurchase(hairCount, hair);
    validPurchase(chinaCount, china);
    validPurchase(wallCount, wall);
    validPurchase(remarkCount, remark);
    validPurchase(jokeCount, joke);

  };

  function validPurchase(typeCount, type){
    if(typeCount > count){
      type.style.color = "#f66";
    } else {
      type.style.color = "lightgrey";
    }
  };
  


  function update(){
  console.log(perCount);
    fb.update({
      count: count,
      hair: hairCount,
      china: chinaCount,
      wall: wallCount,
      remark: remarkCount,
      joke: jokeCount,
      per: perCount
    });
  };
});
