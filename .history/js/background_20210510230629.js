var livePatern = {
    canvas: null,
    context: null,
    cols: 0,
    rows: 0,
    colors: [252, 251, 249, 248, 241, 240],
    triangleColors: [],
    destColors: [],
    
    init: function(){
      this.canvas = document.getElementById('canvas');
      this.context = this.canvas.getContext('2d');
      this.cols = Math.floor(document.body.clientWidth / 24);
      this.rows = Math.floor(document.body.clientHeight / 24) + 1;
      
      this.canvas.width = document.body.clientWidth;
      this.canvas.height = document.body.clientHeight;
      
      this.drawBackground();
      this.animate();
    },
    
    drawTriangle: function(x, y, color, inverted){
      inverted = inverted == undefined ? false : inverted;
  
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(inverted ? x - 22 : x + 22, y + 11);
      this.context.lineTo(x, y + 22);
      this.context.fillStyle = "rgb("+color+","+color+","+color+")";
      this.context.fill();
      this.context.closePath();
    },
    
    getColor: function(){    
      return this.colors[(Math.floor(Math.random() * 6))];
    },
    
    drawBackground: function(){
      var eq = null;
      var x = this.cols;
      var destY = 0;
      var color, y;
      
      while(x--){
        eq = x % 2;
        y = this.rows;
  
        while(y--){
          destY = Math.round((y-0.5) * 24);
  
          this.drawTriangle(x * 24 + 2, eq == 1 ? destY : y * 24, this.getColor());
          this.drawTriangle(x * 24, eq == 1 ? destY  : y * 24, this.getColor(), true);
        }
      }
    },
    
    animate: function(){
      var me = this;
  
      var x = Math.floor(Math.random() * this.cols);
      var y = Math.floor(Math.random() * this.rows);
      var eq = x % 2;
  
      if (eq == 1) {
        me.drawTriangle(x * 24, Math.round((y-0.5) * 24) , this.getColor(), true);
      } else {
        me.drawTriangle(x * 24 + 2, y * 24, this.getColor());
      }
  
      setTimeout(function(){    
        me.animate.call(me);
      }, 10);
    },
  };
  
  !function(){livePatern.init();}()


  let waves = 4;

  function docify(str){
    document.getElementById('wrap').innerHTML = "";
    for(let i = 0; i < str.length; i++){
      let el = document.createElement('div');
      el.className = "hoovy";
      el.appendChild(  document.createTextNode(str.charAt(i))  );
      el.setAttribute('data-phi',i*Math.PI/(10 - waves));
      el.style.transform = "";
      document.getElementById('wrap').appendChild(el);
    }
    document.getElementById('wrap').appendChild(document.createElement('br'));
  }
  
  let omeg = 1.8,
      ampl = 13,
      wrap = document.getElementById('wrap'),
      time = 0;
  
  function anim(){
   
    if(omeg * time > 2*Math.PI){
      time = 0;
    }
    for(let k = 0; k < wrap.childNodes.length; k++){
      let elem = wrap.childNodes[k];
      let phi = elem.getAttribute('data-phi');
      elem.style.transform = 'translateY('+ampl*Math.sin(omeg*time + phi/2) + 'px)';
    }
    time += 6/100;
    requestAnimationFrame(anim);
  };
  
  document.getElementById('wrap').innerHTML = "";
  
  document.getElementById('ampset').oninput = function(){
    ampl = this.value;
  }
  document.getElementById('omegset').oninput = function(){
    omeg = this.value;
  }
  document.getElementById('fonts').oninput = function(){
    for(let i = 0; i < wrap.childNodes.length; i++){
      wrap.childNodes[i].style.fontSize = document.getElementById('fonts').value + 'px';
    }
  }
  document.getElementById('waves').oninput = function(){
    waves = this.value;
    docify(document.getElementById('texty').value);
  }
  document.getElementById('texty').oninput = function(){
    docify(this.value);
  }
  
  docify('AESTHETIC');
  anim();