window.addEventListener('load', function () {

  var fb = new Firebase("makegaminggreat.firebaseio.com/");


  btnReset.style.cursor = "pointer";

  btnReset.onclick = function() {
    fb.set({});
  };    
});