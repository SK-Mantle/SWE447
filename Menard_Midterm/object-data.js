// Menard Midterm

var bgImg = "https://i.ibb.co/0CYDHsf/trees.jpg";
var bgSides = 16;
var bgSpeed = -1;


var bgSize = 150;


var bgScale = bgSize * Math.tan(Math.PI / bgSides);


var bgDist = bgSize / Math.cos(Math.PI / bgSides);

var Spheres = {
	Connector1 : {
		model : undefined,
		axis : [0, 0, 1],
		baseAngle : 0,
		timeScale : 0,
		translate : [8, 0, 0],
		scale : [0.5, 0.5, 0.5],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Cylinder",
			name: "SpokeN"
		}]
	},

	Connector2 : {
		model : undefined,
		axis : [0, 0, 1],
		baseAngle : 90,
		timeScale : 0,
		translate : [8, 0, 0],
		scale : [0.5, 0.5, 0.5],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Cylinder",
			name: "SpokeE"
		}]
	},

	Connector3 : {
		model : undefined,
		axis : [0, 0, 1],
		baseAngle : 180,
		timeScale : 0,
		translate : [8, 0, 0],
		scale : [0.5, 0.5, 0.5],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Cylinder",
			name: "SpokeS"
		}]
	},

	Connector4 : {
		model : undefined,
		axis : [0, 0, 1],
		baseAngle : 270,
		timeScale : 0,
		translate : [8, 0, 0],
		scale : [0.5, 0.5, 0.5],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Cylinder",
			name: "SpokeW"
		}]
	},

	Background : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 0,
		timeScale : 0,
		translate : [0, 18, bgDist * 0.9],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Sphere",
			name: "Slide1"
		},{
			type: "Sphere",
			name: "Slide2"
		},{
			type: "Sphere",
			name: "Slide3"
		},{
			type: "Sphere",
			name: "Slide4"
		},{
			type: "Sphere",
			name: "Slide5"
		},{
			type: "Sphere",
			name: "Slide6"
		},{
			type: "Sphere",
			name: "Slide7"
		},{
			type: "Sphere",
			name: "Slide8"
		},{
			type: "Sphere",
			name: "Slide9"
		},{
			type: "Sphere",
			name: "Slide10"
		},{
			type: "Sphere",
			name: "Slide11"
		},{
			type: "Sphere",
			name: "Slide12"
		},{
			type: "Sphere",
			name: "Slide13"
		},{
			type: "Sphere",
			name: "Slide14"
		},{
			type: "Sphere",
			name: "Slide15"
		},{
			type: "Sphere",
			name: "Slide16"
		},{
			type: "Cylinder",
			name: "Floor"
		},{
			type: "Cylinder",
			name: "Road"
		}]
	},
	Slide1 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 0 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide2 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 1 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide3 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 2 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide4 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 3 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide5 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 4 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide6 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 5 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide7 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 6 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide8 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 7 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide9 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 8 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide10 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 9 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide11 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 10 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide12 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 11 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide13 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 12 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide14 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 13 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide15 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 14 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	},
	Slide16 : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 15 * (360.0 / bgSides),
		timeScale : bgSpeed,
		translate : [0, 0, 0],
		scale : [1, 1, 1],
		color : [1.0, 1.0, 1.0, 1.0],
		children : [{
			type: "Plane",
			name: "Plane1"
		}]
	}
};

var Cylinders = {
	Axel : {
		model : undefined,
		axis : [0, 0, 1],
		baseAngle : 0,
		timeScale : 5,
		translate : [0, 0, 0],
		scale : [1.5, 1.5, 1.5],
		color : [0.2, 0.2, 0.2, 1.0],
		children : [{
			type: "Cylinder",
			name: "Hub"
		},{
			type: "Cylinder",
			name: "Internal"
		},{
			type: "Tube",
			name: "Rim"
		},{
			type: "Sphere",
			name: "Connector1"

		},{
			type: "Sphere",
			name: "Connector2"

		},{
			type: "Sphere",
			name: "Connector3"

		},{

			type: "Sphere",
			name: "Connector4"
		}]
	},
	Hub : {
		model : undefined,
		axis : [0, 0, 1],
		baseAngle : 0,
		timeScale : 0,
		translate : [0, 0, 0],
		scale : [4, 4, 1.2],
		color : [0.4, 0.4, 0.4, 1.0],
		children : []
	},
	Internal : {
		model : undefined,
		axis : [0, 0, 1],
		baseAngle : 0,
		timeScale : 0,
		translate : [0, 0, 0],
		scale : [16, 16, 0.2],
		color : [0.1, 0.1, 0.1, 1.0],
		children : []
	},
	SpokeN : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 90,
		timeScale : 0,
		translate : [0, 0, 0],
		scale : [1.6, 2.4, 16],
		color : [0.5, 0.5, 0.5, 1.0],
		children : []
	},

	SpokeE : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 90,
		timeScale : 0,
		translate : [0, 0, 0],
		scale : [1.6, 2.4, 16],
		color : [0.5, 0.5, 0.5, 1.0],
		children : []
	},

	SpokeS : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 90,
		timeScale : 0,
		translate : [0, 0, 0],
		scale : [1.6, 2.4, 16],
		color : [0.5, 0.5, 0.5, 1.0],
		children : []
	},

	SpokeW : {
		model : undefined,
		axis : [0, 1, 0],
		baseAngle : 90,
		timeScale : 0,
		translate : [0, 0, 0],
		scale : [1.6, 2.4, 16],
		color : [0.5, 0.5, 0.5, 1.0],
		children : []
	},

	Floor : {
		model : undefined,
		axis : [1, 0, 0],
		baseAngle : 90,
		timeScale : 0,
		translate : [0, 0, bgScale * 1.45],
		scale : [bgDist * 0.65, bgDist * 0.65, 0.1],
		color : [0.0, 0.3, 0.0, 1.0],
		children : []
	},
	Road : {
		model : undefined,
		axis : [1, 0, 0],
		baseAngle : 90,
		timeScale : 0,
		translate : [0, 0, bgScale * 1.5],
		scale : [bgDist * 1.1, bgDist * 1.1, 0.1],
		color : [0.15, 0.15, 0.15, 1.0],
		children : []
	}
};

var Tubes = {
	Rim : {
		model : undefined,
		axis : [0, 0, 1],
		baseAngle : 0,
		timeScale : 0,
		translate : [0, 0, 0],
		scale : [18, 18, 1.2],
		color : [0.6, 0.6, 0.6, 1.0],
		children : []
	}
};

var Planes = {
	Plane1 : {
		model : undefined,
		axis : [0, 0, 1],
		baseAngle : 180,
		timeScale : 0,
		translate : [0, 0, bgSize],
		scale : [bgScale, bgScale * 1.5, bgScale],
		source : bgImg
	}
};
