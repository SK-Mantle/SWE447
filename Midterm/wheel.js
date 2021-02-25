/////////////////////////////////////////////////////////////////////////////
//
//  This used to be solarsystem don't reinvent the wheel and all that
//
/////////////////////////////////////////////////////////////////////////////

var canvas;
var gl;



var Planets = {
  middleWheel : undefined,
  spokeOneOne : undefined,
  spokeOneTwo : undefined,
  spokeOneThree : undefined,
  spokeTwoOne : undefined,
  spokeTwoTwo : undefined,
  spokeTwoThree : undefined,
  spokeThreeOne : undefined,
  spokeThreeTwo : undefined,
  spokeThreeThree : undefined,
  spokeFourOne : undefined,
  spokeFourTwo : undefined,
  spokeFourThree: undefined,
  bigWheel: undefined
};


var V;  

var P;  
var near = 10;      
var far = 120;      


var time = 0.0;      
                     
var timeDelta = 0.5; 

function init() {
  canvas = document.getElementById("webgl-canvas");

  gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) { alert("WebGL initialization failed"); }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  
  gl.enable(gl.DEPTH_TEST);

  for (var name in Planets ) {

    var planet = Planets[name] = new Sphere();

    planet.uniforms = { 
      color : gl.getUniformLocation(planet.program, "color"),
      MV : gl.getUniformLocation(planet.program, "MV"),
      P : gl.getUniformLocation(planet.program, "P"),
    };
  }

  resize();

  window.requestAnimationFrame(render);  
}


function render() {
  time += timeDelta;

  var ms = new MatrixStack();

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  V = translate(0.0, 0.0, -0.5*(near + far));
  ms.load(V);  

  var name, planet, data;
   
  name = "middleWheel";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false; 

  ms.push();
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();
  
  name = "bigWheel";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;

  ms.push();
  // ms.rotate(data.year * time, data.axis);
  ms.translate(data.distance , 0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();
  
  name = "spokeOneOne";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;

  ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(data.distance , 0, 0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();
  
  
  name = "spokeOneTwo";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;

  ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(data.distance , 0, 0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();
  
  
  Ename = "spokeOneThree";
  Eplanet = Planets[Ename];
  Edata = SolarSystem[Ename];

  Eplanet.PointMode = false;

  ms.push();
  ms.rotate(Edata.year * time, Edata.axis);
  ms.translate(Edata.distance , 0, 0);
  ms.scale(Edata.radius);
  gl.useProgram(Eplanet.program);
  gl.uniformMatrix4fv(Eplanet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(Eplanet.uniforms.P, false, flatten(P));
  gl.uniform4fv(Eplanet.uniforms.color, flatten(Edata.color));
  Eplanet.render();
  ms.pop();
  
  
  name = "spokeTwoOne";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;

  ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(-data.distance , 0, 0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();
  
  
  name = "spokeTwoTwo";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;

 ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(-data.distance , 0, 0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();
  
 
  name = "spokeTwoThree";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;

  ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(-data.distance , 0, 0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();
  

  
  
  name = "spokeThreeOne";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;
  
  ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(data.distance - 7.5, 4.5,  0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();

  name = "spokeThreeTwo";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;
  
  ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(data.distance - 4, 8,  0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();
  
    
  name = "spokeThreeThree";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;

  ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(data.distance - 10.5, 11,  0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();
  
  name = "spokeFourOne";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;
  
  ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(data.distance - 7.5, -4.5,  0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();
  
  name = "spokeFourTwo";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;
  
  ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(data.distance - 3.5, -8,  0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();

  name = "spokeFourThree";
  planet = Planets[name];
  data = SolarSystem[name];

  planet.PointMode = false;

  ms.push();
  ms.rotate(data.year * time, data.axis);
  ms.translate(data.distance - 10.5, -11, 0);
  ms.scale(data.radius);
  gl.useProgram(planet.program);
  gl.uniformMatrix4fv(planet.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(planet.uniforms.P, false, flatten(P));
  gl.uniform4fv(planet.uniforms.color, flatten(data.color));
  planet.render();
  ms.pop();

  window.requestAnimationFrame(render);
}


//---------------------------------------------------------------------------
//
//  resize() - handle resize events
//

function resize() {
  var w = canvas.clientWidth;
  var h = canvas.clientHeight;

  gl.viewport(0, 0, w, h);

  var fovy = 50.0; // degrees
  var aspect = w / h;

  P = perspective(fovy, aspect, near, far);
}

//---------------------------------------------------------------------------
//
//  Window callbacks for processing various events
//

window.onload = init;
window.onresize = resize;