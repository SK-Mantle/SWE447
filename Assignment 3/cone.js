var gl = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 0.0, 0.5, 0.0, 1.0 );
    
    gl.enable(gl.DEPTH_TEST);
    
    cone = new Cone();

    render();
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT | gl.depth_BUFFER_BIT);
    
    cone.render();
    
    requestAnimationFrame(render);
}

window.onload = init;
