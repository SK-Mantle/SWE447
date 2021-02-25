// Midterm Menard
// Solar.js modified to render stuff this time

var canvas;
var gl;

var ViewOffset;
var Perspective;
var near = 20;
var far = 200;

var time = 0.0;
var timeDelta = 0.5;

function init() 
{
	canvas = document.getElementById("webgl-canvas");
	gl = WebGLUtils.setupWebGL(canvas);
	
	if (!gl) { alert("WebGL initialization failed"); }
	
	gl.clearColor(0.529, 0.808, 0.99, 1.0);
	gl.enable(gl.DEPTH_TEST);
	
	for(var name in Spheres)
	{
		var sphere = Spheres[name].model = new Sphere();
		
		sphere.uniforms = {
			color : gl.getUniformLocation(sphere.program, "color"),
			ModelView : gl.getUniformLocation(sphere.program, "ModelView"),
			Perspective : gl.getUniformLocation(sphere.program, "Perspective"),
		};
	}
	
	for(var name in Cylinders)
	{
		var cylinder = Cylinders[name].model = new Cylinder();
		
		cylinder.uniforms = {
			color : gl.getUniformLocation(cylinder.program, "color"),
			ModelView : gl.getUniformLocation(cylinder.program, "ModelView"),
			Perspective : gl.getUniformLocation(cylinder.program, "Perspective"),
		};
	}
	
	for(var name in Tubes)
	{
		var tube = Tubes[name].model = new Tube();
		
		tube.uniforms = {
			color : gl.getUniformLocation(tube.program, "color"),
			ModelView : gl.getUniformLocation(tube.program, "ModelView"),
			Perspective : gl.getUniformLocation(tube.program, "Perspective"),
		};
	}
	
	for(var name in Planes)
	{
		var plane = Planes[name].model = new Plane(Planes[name].source);
		
		plane.uniforms = {
			texture: gl.getUniformLocation(plane.program, "uTexture"),
			ModelView : gl.getUniformLocation(plane.program, "ModelView"),
			Perspective : gl.getUniformLocation(plane.program, "Perspective"),
		};
	}
	
	resize();
	
	window.requestAnimationFrame(render);
}

function render()
{
	time += timeDelta;
	
	var matrixStack = new MatrixStack();
	
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	

	ViewOffset = translate(0.0, 0.0, -0.5*(near + far));
	matrixStack.load(ViewOffset);
	
	DrawObject(Cylinders["Axel"], matrixStack);
	DrawObject(Spheres["Background"], matrixStack);
	
	window.requestAnimationFrame(render);
}


function DrawObject(data, matrixStack, pointMode)
{
	if (!pointMode) { pointMode = false; }
	data.model.PointMode = pointMode;

	matrixStack.push();
	
	matrixStack.rotate(data.baseAngle + (data.timeScale * time), data.axis);
	matrixStack.translate(data.translate[0], data.translate[1], data.translate[2]);
	matrixStack.scale(data.scale[0], data.scale[1], data.scale[2]);
	
	gl.useProgram(data.model.program);
	
	gl.uniformMatrix4fv(data.model.uniforms.ModelView, false, flatten(matrixStack.current()));
	gl.uniformMatrix4fv(data.model.uniforms.Perspective, false, flatten(Perspective));
	gl.uniform4fv(data.model.uniforms.color, flatten(data.color));

	data.model.render();
	
	for (var i = 0; i < data.children.length; i++)
	{
		switch(data.children[i].type)
		{
			case "Sphere": DrawObject(Spheres[data.children[i].name], matrixStack, pointMode); break;
			case "Cylinder": DrawObject(Cylinders[data.children[i].name], matrixStack, pointMode); break;
			case "Tube": DrawObject(Tubes[data.children[i].name], matrixStack, pointMode); break;
			case "Plane": DrawPlane(Planes[data.children[i].name], matrixStack); break;
		}
	}
	

	matrixStack.pop();
}

function DrawPlane(data, matrixStack)
{

	matrixStack.push();
	

	matrixStack.rotate(data.baseAngle + (data.timeScale * time), data.axis);
	matrixStack.translate(data.translate[0], data.translate[1], data.translate[2]);
	matrixStack.scale(data.scale[0], data.scale[1], data.scale[2]);
	

	gl.useProgram(data.model.program);
	

	gl.uniformMatrix4fv(data.model.uniforms.ModelView, false, flatten(matrixStack.current()));
	gl.uniformMatrix4fv(data.model.uniforms.Perspective, false, flatten(Perspective));
	gl.uniform1i(data.model.uniforms.texture, 0);
	

	data.model.render();
	
	matrixStack.pop();
}

function resize()
{
	var w = canvas.clientWidth;
	var h = canvas.clientHeight;
	
	gl.viewport(0, 0, w, h);
	
	var fovy = 75.0;
	var aspect = w / h;
	
	Perspective = perspective(fovy, aspect, near, far);
}

window.onload = init;
window.onresize = resize;