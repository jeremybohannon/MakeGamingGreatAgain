window.addEventListener('load', function () {

  var supporters = document.getElementById("supporters");
  var hair = document.getElementById("hair");
  var china = document.getElementById("china");
  var wall = document.getElementById("wall");
  var remark = document.getElementById("remark");


  var fb = new Firebase("https://makegamesgreatagaib.firebaseio.com/");

  var count;
  var hairCount, chinaCount, wallCount, remarkCount;


  fb.child("count").on("value", function(data){
    count = data.val();
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
        updateHTML();
  });


  hat.style.cursor = 'pointer';

  hat.onclick = function() {
    count++;
    updateHTML();
  };

  console.log(btnHair);

  btnHair.style.cursor = 'pointer';

  btnHair.onClick = function() {
      console.log('test');
  };

  setInterval(function(){
    calculateCount();
    updateHTML();
    update();
  }, 6000);


  function calculateCount(){
    count++;
  };

  function updateHTML(){
    supporters.innerHTML = count;
    hair.innerHTML = hairCount;
    china.innerHTML = chinaCount;
    wall.innerHTML = wallCount;
    remark.innerHTML = remarkCount;
  };

  function update(){
    fb.set({
      count: count++,
      hair: hairCount,
      china: chinaCount,
      wall: wallCount,
      remark: remarkCount
    });
  };


});
