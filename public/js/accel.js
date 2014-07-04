var domy = function(content){
  document.body.innerHTML = content;
};

var state = {
  a: 0,
  b: 0,
  d: 0,
  x: 0,
  y: 0,
  z: 0,
}

window.onload = function(){

  if (!window.DeviceMotionEvent)
    console.warn("DeviceMotionEvent NOT supported");

  var motionCount = 0;
  var mCounter = document.getElementById('motionCounter');

  var orientationCount = 0;
  var oCounter = document.getElementById('orientationCounter');

  var a = document.getElementById('alpha');
  var b = document.getElementById('beta');
  var g = document.getElementById('gamma');

  var aX = document.getElementById('aX');
  var zY = document.getElementById('aY');
  var aZ = document.getElementById('aZ');

  window.addEventListener('devicemotion', function(event){
    mCounter.innerText = ++motionCount;
    aX.innerText = state.x = event.acceleration.x;
    aY.innerText = state.y = event.acceleration.y;
    aZ.innerText = state.z = event.acceleration.z;
    if (motionCount === orientationCount)
      mCounter.innerText = 'Motion is last'
  }, false);

  // on my ipod touch, this is fired last
  window.addEventListener('deviceorientation', function(event) {
    oCounter.innerText = ++orientationCount;
    a.innerText = state.a = event.alpha;
    b.innerText = state.b = event.beta;
    g.innerText = state.g = event.gamma;
    if (motionCount === orientationCount)
      oCounter.innerText = 'orientationCount is last'
  }, false);
};

function sendState = function(){

};
