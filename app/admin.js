window.addEventListener('load', function () {

  var account = prompt("Please enter your account name: ");
  var password = prompt("Please enter your password: ");
  var fb = new Firebase("makegaminggreat.firebaseio.com/");

  if(account && password)
  {
    fb.once("value", function(snapshot){
      if(snapshot.child(account).exists)
      {
        if(snapshot.child(account).val() == password)
        {
          
          var fb2 = new Firebase("makegaminggreat.firebaseio.com/users/");
          
          var reset = document.getElementById("btnReset");
          reset.style.visibility = "visible";
          
          console.log('test');
          
          
          btnReset.style.cursor = "pointer";
          
          btnReset.onclick = function() 
          {
            fb2.set({});
          };
        
        }
      }
    }); 
  };
});
      
      
