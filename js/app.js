/// <reference path="babylon.2.1.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function(){
	//get the canvas
	var canvas = document.getElementById('renderCanvas');

	// create a BabylonJS engine object
	var engine = new BABYLON.Engine(canvas, true);

	//create a new scene
	var scene = new BABYLON.Scene(engine);


	//create camera
	var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0 ,2, -15), scene);	
	// interactive camera
	camera.attachControl(canvas);

	// light environment light (comes from above)
	var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

	// ground mesh 
	var ground = BABYLON.Mesh.CreateGround('ground1', 20, 20, 2, scene);

	//create a sphere
	var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
	//sphere position
	sphere.position.y = 1;

	//second sphere
	var sphere2 = BABYLON.Mesh.CreateSphere('sphere2', 16, 4, scene);
	//sphere 2 position`
	sphere2.position = new BABYLON.Vector3(3, 3, 3);

	// create a box
	var box = BABYLON.Mesh.CreateBox('box', 1, scene);
	box.position = new BABYLON.Vector3(5, 2, -5);

	//create a cylinder
	var cylinder = BABYLON.Mesh.CreateCylinder('cyl', 5, 1, 3, 30, scene);

	var lines = BABYLON.Mesh.CreateLines('lines', [
			new BABYLON.Vector3(0, 5, 0), new BABYLON.Vector3(1, 5, 0), new BABYLON.Vector3(0, 5, 1), new BABYLON.Vector3(2, 2, 0), new BABYLON.Vector3(1, 5, -5)], scene );

	//render the scene
	engine.runRenderLoop(function(){
		scene.render();
	});

};