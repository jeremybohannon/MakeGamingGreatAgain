window.addEventListener('load', function () {

  var supporters = document.getElementById("supporters");
  var hat = document.getElementById("hat");


  var fb = new Firebase("https://makegamesgreatagaib.firebaseio.com/");

  var count;

  fb.child("count").on("value", function(data){
    count = data.val();
  });

  console.log(hat);

  hat.style.cursor = 'pointer';

  hat.onclick = function() {
    fb.set({
      count: count++
    });
    updateSupporters();
  };

  setInterval(function(){
    calculateCount();
    updateSupporters();
  }, 6000);


  function calculateCount(){
    count++;
  };

  function updateSupporters(){
    supporters.innerHTML = count;
  };


});
