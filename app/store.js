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